import React, {
  createContext, ReactNode, useCallback, useContext, useState,
} from 'react';
import { API } from '../services/API';

type AuthResponseProps = {
  token: string;
  user: object;
}
type SignInProps = {
  email: string;
  password: string;
}
// Interface principal do Contexto de Autenticação
type AuthContextProps = {
  user: object;
  signIn(credentials: SignInProps): Promise<void>;
  signUp(): void;
}
type AuthProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  /**
   * Obtém os dados do usuário logado
   */
  const [data, setData] = useState<AuthResponseProps>(() => {
    const token = localStorage.getItem('@gobarber::token');
    const user = localStorage.getItem('@gobarber::user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return { } as AuthResponseProps;
  });
  /** */

  const signIn = useCallback(async ({ email, password }: SignInProps) => {
    const response = await API.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@gobarber::token', token);
    localStorage.setItem('@gobarber::user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signUp = useCallback(async () => {
    localStorage.removeItem('@gobarber::token');
    localStorage.removeItem('@gobarber::user');

    setData({} as AuthResponseProps);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signUp, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
