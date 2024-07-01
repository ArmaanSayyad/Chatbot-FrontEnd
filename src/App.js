import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Portfolios from './components/Portfolios';
import About from './pages/About'; // Adjust the path if necessary
import Home from './pages/Home';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App bg-white h-screen overflow-y-scroll">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Home scrollToTestimonials={true} />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
