import { createRoot } from 'react-dom/client';
import WeatherCard from './WeatherCard.jsx';
import Trafficlight from './Traffic-LightApp.jsx';
import UniversityApplicationForm from './UniversityApplicationForm.jsx';
import UserCard from './life-cycle/user-data-fetcher.jsx';
import App from './App.jsx';
import StudentsData from './Students.jsx';
import Counter from './useState.jsx';
import KeyEvents from './keyboardEvent.jsx'
import Todo from './TodoList.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <Todo />
  </div>
);
