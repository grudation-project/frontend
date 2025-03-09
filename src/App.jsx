import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import RootLayout from './Components/RootLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ResetPassword from './pages/auth/ResetPassword';
import CheckEmail from './pages/auth/CheckEmail';
import NewPassword from './pages/auth/NewPassword';
import OtpVerification from './pages/auth/OtpVerification';
import Home from './pages/home/Home';
import NotFoundPage from './pages/utils/NotFoundPage';
import AboutPage from './pages/utils/About';
import { UserProvider } from './context/userContext';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="auth" >
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forget-password" element={<ResetPassword />} />
        <Route path="check-email" element={<CheckEmail />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="verify-user" element={<OtpVerification />} />
        <Route path="reset-pass-otp" element={<OtpVerification />} />
      </Route>
      <Route path='dashboard' element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />

    </Route>
  ))
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )

}

export default App;