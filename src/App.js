import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';
function App() {
  const {theme}= useContext(AuthContext)
  return (
    <div id={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
