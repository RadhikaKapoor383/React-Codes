import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import ATM from './ATM-machine.jsx';
import {ShoppingCart} from './Shopping-cart.jsx';
import LiveDashboard from './live-dashboard.jsx';
import UserProfile from './UserProfile.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    {/* <App /> */}
    {/* <ATM /> */}
    {/* <ShoppingCart /> */}
    {/* <LiveDashboard stdname="Radhika" /> */}
    <UserProfile />

  </div>
)
