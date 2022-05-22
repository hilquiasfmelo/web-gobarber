import { AuthProvider } from './context/AuthContext';
import { SingIn } from './pages/SingIn';
// import { SingUp } from './pages/SingUp';

import MainStyle from './styles/main';

export function App() {
  return (
    <>
      <MainStyle />
      <AuthProvider>
        <SingIn />
      </AuthProvider>
    </>
  );
}
