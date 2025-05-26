// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../index.css';


export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}