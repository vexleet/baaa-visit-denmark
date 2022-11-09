import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import Lunch from './pages/Lunch.jsx';
import Dinner from './pages/Dinner.jsx';
import Breakfast from './pages/Breakfast.jsx';
import Activities from './pages/Activities.jsx';
import Plan from './pages/Plan.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/welcome-page',
    element: <WelcomePage />
  },
  {
    path: '/lunch',
    element: <Lunch />
  },
  {
    path: '/dinner',
    element: <Dinner />
  },
  {
    path: '/breakfast',
    element: <Breakfast />
  },
  {
    path: '/activities',
    element: <Activities />
  },
  {
    path: '/plan',
    element: <Plan />
  }
  
]);

export default router;
