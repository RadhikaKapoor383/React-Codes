import { createRoot } from 'react-dom/client';
import WeatherCard from './WeatherCard.jsx';
import Trafficlight from './Traffic-LightApp.jsx';
import UniversityApplicationForm from './UniversityApplicationForm.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <UniversityApplicationForm />
  </div>
);
