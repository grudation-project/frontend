import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import RootLayout from './Components/RootLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ResetPassword from './pages/auth/ResetPassword';
import CheckEmail from './pages/auth/CheckEmail';
import NewPassword from './pages/auth/NewPassword';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="auth" >
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="check-email" element={<CheckEmail />} />
        <Route path="new-password" element={<NewPassword />} />
      </Route>
    </Route>
  ))
  return <RouterProvider router={router} />
}

export default App;