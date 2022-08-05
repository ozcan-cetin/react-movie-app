import './App.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <AppRouter/>
      <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
