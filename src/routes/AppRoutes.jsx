import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Repair from '../pages/Repair';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/repair" element={<Repair />} />
    
  </Routes>
);

export default AppRoutes;