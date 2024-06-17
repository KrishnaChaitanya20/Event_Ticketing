import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import EventsPage from 'pages/Events/EventsPage';
import LoginPage from 'pages/Login/LoginPage';
import Signup from 'pages/Login/Signup';
import AdminLogin from 'pages/Admin/Adminlogin';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: "/events",
      element: <EventsPage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/adminlogin",
      element: <AdminLogin/>
    },
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
