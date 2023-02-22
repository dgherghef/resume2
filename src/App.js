import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Resume from './routes/Resume';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';
import { useEffect, useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className='App'>
          <PuffLoader color={'#AB6D46'} loading={loading} size={150} />
        </div>
      ) : (
        <Router basename='/resume2'>
          <Routes>
            <Route path='/resume2' exact element={<Home />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/resume' exact element={<Resume />} />
            <Route path='/portfolio' exact element={<Portfolio />} />
            <Route path='/contact' exact element={<Contact />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
