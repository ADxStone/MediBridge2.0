
import {  Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import PatientsDashboard from './Pages/PatientsDashboard';
function App() {
  return (
   
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/patient" element={<PatientsDashboard/>} />
        

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        
       
        <Route path="*" element={<Login />} />
      </Routes>
   
  );
}

export default App;





