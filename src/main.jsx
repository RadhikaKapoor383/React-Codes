import { createRoot } from 'react-dom/client';
import WeatherCard from './WeatherCard.jsx';
import Trafficlight from './Traffic-LightApp.jsx';
import UniversityApplicationForm from './UniversityApplicationForm.jsx';
import UserCard from './life-cycle/user-data-fetcher.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <UserCard />
  </div>
);
