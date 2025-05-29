import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Repair from '../pages/Repair';
import BookRepair from '../pages/BookRepair';
import Login from "@/pages/Kiosk/KioskLogin";
import KioskHome from "@/pages/Kiosk/KioskHome";
import KioskNewCustomer from "@/pages/Kiosk/KioskNewCustomer";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/repair" element={<Repair />} />
    <Route path="/bookRepair" element={<BookRepair />} />

    <Route path="/kioskLogin" element={<Login />} />
    <Route path="/kiosk" element={<KioskHome />} />
    <Route path="/kioskNewCustomer" element={<KioskNewCustomer />} />

  </Routes>
);

export default AppRoutes;