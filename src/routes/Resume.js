import Nav from '../components/Nav';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='app'>
      <Nav />
      <div className='container'>
        <div className='content-box' data-aos='fade-up'>
          <div className='experience'>
            <h2 style={{ color: '#AB6D46' }}>Sumary</h2>
            <ul id='bullet'>
              <li>
                <p>
                  Fueled by high energy levels and enthusiasm, I'm easily
                  inspired and more than willing to follow my fascinations
                  wherever they take me. I'm passionate of learning something
                  new, challenging myself and discover interesting things. I'm
                  able to pick up new skills and learn fast so I can be the best
                  version of myself.
                </p>
              </li>
            </ul>
            <h2 style={{ color: '#AB6D46' }}>Professional Experience</h2>
            <ul id='bullet'>
              <li>
                <div style={{ paddingLeft: '5%' }}>
                  <div>
                    <li>
                      BitSoft - Software Interface Implementation Consultant
                    </li>
                    <li>
                      Nenos - Full-Stack Developer
                    </li>
                    
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='resume'>
            <h2 style={{ color: '#AB6D46' }}>Education</h2>
            <ul id='bullet'>
              <li>
                <h3>Bachelor of Economics and Business Administration</h3>
                <p style={{ fontStyle: 'italic' }}>2019-2022</p>
                <p style={{ fontStyle: 'italic' }}>
                  "Dunarea de Jos" University, Galati
                </p>
                <p>Occupational skills covered:</p>
                <div className='content-left' style={{ paddingRight: '2%' }}>
                  <li>Digital Art in Photoshop</li>
                  <li>
                    Programming languages: C++, C#, Python, Javascript, PHP
                  </li>
                  <li>Web development: HTML, CSS</li>
                  <li>ECDL Certificate</li>
                </div>
                <div className='content-right'>
                  <li>Mathematical calculation programs in Eviews</li>
                  <li>Databases: SQL ORACLE, MySQL</li>
                  <li>Operating systems: Linux, Windows</li>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
