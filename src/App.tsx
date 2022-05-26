import { SingIn } from './pages/SingIn';
// import { SingUp } from './pages/SingUp';
import MainStyle from './styles/main';
import { AppProvider } from './hooks';

export function App() {
  return (
    <>
      <MainStyle />

      <AppProvider>
        <SingIn />
      </AppProvider>
    </>
  );
}
