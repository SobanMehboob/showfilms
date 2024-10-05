import './App.css';
import HeroSection from './component/HeroSection';
import HeroTwo from './component/HeroTwo';
import Products from './component/Products';
import Review from './component/Review';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar'; // Assuming you have a Navbar component
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* Navbar is placed outside of Routes so it persists on every page */}
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <HeroTwo />
            </>
          } />
          <Route path="/product" element={<Products />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
