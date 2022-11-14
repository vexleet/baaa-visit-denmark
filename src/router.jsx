import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import LunchAndDinner from './pages/LunchAndDinner.jsx';
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
    element: <LunchAndDinner />
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
