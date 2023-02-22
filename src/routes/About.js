import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='app'>
      <Nav />
      <div className='container'>
        <section>
          <div className='title-section'>
            <h2>About</h2>
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
        </section>
        <div className='content-box' data-aos='fade-up'>
          <div className='content-left'>
            <h2>Get to know me!</h2>
            <p>
              Hello, I'm Denisa. I have a serious passion for web design and I
              love developing web application from start to finish. I'm a
              well-organised person, problem solver and independent debugger
              with high attention to detail. I also enjoy outdoor activities, TV
              series and cooking.
            </p>
            <p>
              I'm open to opportunities where I can contribute, learn and grow.
              If you have a good opportunity that matches my skills then don't
              hesitate to contact me.
            </p>
            <Link to='/contact'>
              <button className='button'>Contact</button>
            </Link>
          </div>
          <div className='content-right'>
            <div className='skills-box'>
              <h2>Skills</h2>
              <div className='skills-items'>
                <div className='details'>
                  <span>Html</span>
                  <span>100%</span>
                </div>
                <div className='bar'>
                  <div id='html-bar'></div>
                </div>
                <div className='details'>
                  <span>CSS</span>
                  <span>95%</span>
                </div>
                <div className='bar'>
                  <div id='css-bar'></div>
                </div>
                <div className='details'>
                  <span>Javascript</span>
                  <span>85%</span>
                </div>
                <div className='bar'>
                  <div id='javascript-bar'></div>
                </div>
                <div className='details'>
                  <span>C#</span>
                  <span>80%</span>
                </div>
                <div className='bar'>
                  <div id='cs-bar'></div>
                </div>
                <div className='details'>
                  <span>Photoshop</span>
                  <span>90%</span>
                </div>
                <div className='bar'>
                  <div id='photoshop-bar'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
