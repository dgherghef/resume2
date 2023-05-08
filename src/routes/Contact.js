import Nav from '../components/Nav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [message, setMessage] = useState('');
  const [sub, setSub] = useState();
  console.log('ok');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_payvkti',
        'template_akwgei9',
        e.target,
        'HYVfyhSsGqKJRR1Dp'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Message sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className='app'>
      <Nav />
      <div className='container'>
        <section style={{ paddingBottom: '0' }}>
          <div className='title-section'>
            <h2>Contact</h2>
            <p>
              I don't like to be called when I'm at the doctor, so better send
              me an email and I'll answer as soon as I can
            </p>
          </div>
        </section>
        <div className='content-box' id='contact' data-aos='fade-up'>
          <div className='content-left' id='contact-left'>
            <form onSubmit={sendEmail}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    overflow: 'auto',
                  }}
                >
                  <input
                    type='text'
                    name='name'
                    className='input'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ float: 'left', width: '50%' }}
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    className='input'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ float: 'left', width: '50%' }}
                    required
                  />
                </div>
                <input
                  type='text'
                  name='subject'
                  className='input'
                  placeholder='Subject'
                  value={sub}
                  onChange={(e) => setSub(e.target.value)}
                  required
                />
                <textarea
                  type='text'
                  name='message'
                  className='input'
                  id='message'
                  placeholder='Message'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
                <button
                  id='button-contact'
                  className='button'
                  style={{
                    background: '#AB6D46',
                  }}
                >
                  Submit
                </button>
                {message}
              </div>
            </form>
          </div>
          <div
            className='content-right'
            id='contact-right'
            style={{ overflow: 'auto', padding: '5%', paddingLeft: '10%' }}
          >
            <div style={{ height: '30%' }}>
              <div id='contact-app-icon'>
                <i
                  className='bi bi-envelope-at-fill'
                  style={{ color: '#222B10', fontSize: '40px' }}
                ></i>
              </div>
              <div style={{ width: '50%', float: 'left' }}>
                <p>Email:</p>
                <p style={{ color: '#893914' }}>dgherghef@gmail.com</p>
              </div>
            </div>
            <div style={{ height: '30%' }}>
              <div id='contact-app-icon'>
                <i
                  className='bi bi-linkedin'
                  style={{ color: '#222B10', fontSize: '40px' }}
                ></i>
              </div>
              <div style={{ width: '50%', float: 'left' }}>
                <p>LinkedIn:</p>
                <a
                  href='https://www.linkedin.com/in/denisa-gherghef-72076023a'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#893914' }}
                >
                  <p>https://www.linkedin.com/in/denisa-gherghef-72076023a</p>
                </a>
              </div>
            </div>
            <div style={{ height: '30%' }}>
              <div id='contact-app-icon'>
                <i
                  class='bi bi-github'
                  style={{ color: '#222B10', fontSize: '40px' }}
                ></i>
              </div>
              <div style={{ width: '50%', float: 'left' }}>
                <p>GitHub:</p>
                <a
                  href='https://github.com/dgherghef'
                  rel='noreferrer'
                  target='_blank'
                  style={{ color: '#893914' }}
                >
                  <p>https://github.com/dgherghef</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
