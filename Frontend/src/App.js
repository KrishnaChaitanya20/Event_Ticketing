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
import AboutUs from 'pages/Aboutus/About';
import OrganizerLogin from 'pages/Organizer/OrganizerLogin';
import OrganizerSignUp from 'pages/Organizer/OrganizerSignUp';
import MyEvents from 'pages/Organizer/Myevents';
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
      path: "/profile",
      element: <Profilepage/>
    },
    {
      path: "/bookings/:eventid",
      element: <Bookingpage/>
    },
    {
      path: "/aboutus",
      element: <AboutUs/>
    },
    {
      path: "/organizer/login",
      element: <OrganizerLogin/>
    },
    {
      path: "/organizer/signup",
      element: <OrganizerSignUp/>
    },
    {
      path: "/organizer/myevents",
      element: <MyEvents/>
    }
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
