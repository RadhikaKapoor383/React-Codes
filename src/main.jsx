import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import ATM from './ATM-machine.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    {/* <App /> */}
    <ATM />
  </div>
)
