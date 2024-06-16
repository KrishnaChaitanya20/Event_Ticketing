import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import EventsPage from 'pages/Events/EventsPage';
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
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
