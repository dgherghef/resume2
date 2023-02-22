import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='app'>
      <Nav />
      <div className='hero'></div>
      <div className='text-dec'>
        <div data-aos='zoom-in'>
          <h1 style={{ fontSize: '48px' }}>Denisa Gherghef</h1>
          <p style={{ fontSize: '20px', lineHeight: '90%' }}>
            The shoe is your enemy but the sock is your friend
          </p>
          <Link to='/about'>
            <button className='button'>About me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
