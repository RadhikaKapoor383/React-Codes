import { createRoot } from 'react-dom/client';
import TrafficLight from './Traffic-LightApp.jsx';
import TipCalculator from './TipCalculator.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <TipCalculator />
  </div>
);
