import React, { createContext, ReactNode, useCallback } from 'react';
import { API } from '../services/API';

type SignInProps = {
  email: string;
  password: string;
}

type AuthContextProps = {
  name: string;
  signIn(credentials: SignInProps): Promise<void>;
}

type AuthContextData = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<AuthContextData> = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: SignInProps) => {
    const response = await API.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Hilquias', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
