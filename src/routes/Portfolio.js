import Nav from '../components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='app'>
      <Nav />
      <div className='container'>
        <section style={{ paddingBottom: '0' }}>
          <div className='title-section'>
            <h2>Portfolio</h2>
            <p>Here you will find my applications</p>
          </div>
        </section>
        <div className='box' data-aos='fade-up'>
          <div className='itemp'>
            <a
              href='https://dgherghef.github.io/101GameScore/'
              target='_blank'
              style={{ cursor: 'pointer' }}
              rel='noreferrer'
            >
              <div className='application1'></div>
            </a>
          </div>

          <div className='itemp'>
            <a
              href='https://dgherghef.github.io/rummy/'
              target='_blank'
              style={{ cursor: 'pointer' }}
              rel='noreferrer'
            >
              <div className='application2'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
