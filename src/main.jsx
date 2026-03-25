import { createRoot } from 'react-dom/client';
import TrafficLight from './Traffic-LightApp.jsx';
import TipCalculator from './TipCalculator.jsx';
import App from './FeedbackForm.jsx'
import TypingTest from './TypingSpeedTester.jsx';


createRoot(document.getElementById('root')).render(
  <div>
    <TypingTest />
  </div>
);
