import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import EventsPage from 'pages/Events/EventsPage';
import LoginPage from 'pages/Login/LoginPage';
import Signup from 'pages/Login/Signup';
import AdminLogin from 'pages/Admin/Adminlogin';
import Profilepage from 'pages/Profile/Profilepage';
import Bookingpage from 'pages/Booking/Bookingpage';
import EventPage from 'pages/Event/EventPage';
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
      path:"/events/:id",
      element:<EventPage/>
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
    {
      path: "/Profilepage",
      element: <Profilepage/>
    },
    {
      path: "/Bookingpage/:eventid",
      element: <Bookingpage/>
    },
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
