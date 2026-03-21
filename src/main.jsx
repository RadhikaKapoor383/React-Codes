import { createRoot } from 'react-dom/client';
import StudentPortal from './Student-Portal.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <StudentPortal portalName="Student Portal" />
  </div>
);
