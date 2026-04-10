import { createRoot } from 'react-dom/client';
import WeatherCard from './WeatherCard.jsx';
import Trafficlight from './Traffic-LightApp.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <Trafficlight />
  </div>
);
