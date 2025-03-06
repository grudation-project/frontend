import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './Components/Login/Login';
import LandingPage from './pages/landing/LandingPage';
import Register from './Components/Register/Register';
import RootLayout from './Components/RootLayout';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="auth" >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  ))
  return <RouterProvider router={router} />
}

export default App;