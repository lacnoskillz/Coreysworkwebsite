import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import '../pages/styles/Contact.css'
const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector('.headerdiv2');
      if (mainContainer) { // Check if the element exists
        const scrollPosition = window.scrollY;
        mainContainer.style.backgroundPosition = `center ${60 - scrollPosition * 0.07}%`;
      }
    };

    if (window.innerWidth > 960) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.innerWidth > 960) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  const [state, handleSubmit] = useForm("mjvqypdy");
  if (state.succeeded) {
      return <h2 className='successpage'>Thank you for reaching out. I will get back to you as soon as I can!</h2>;
  }
    return (
      <div>
      <div className='headerdiv2'>
  <div className="overlay"></div>
  <h2 className='Contacth2'>Contact</h2>
</div>
      <div className='Contactcontainer'>
      <div className='Contactdiv3'>
      <h3 className='Contacth3'>Contact Info</h3>
      <p className='contactpageinfo'>CALL or TEXT: <a href="tel:808-870-7003" className='contactphonehref'>(808)870-7003</a></p>
      <p className='contactpageinfo'>Email: <a href="mailto:Coreyharrison8oh8@icloud.com">Coreyharrison8oh8@icloud.com</a></p>
      <p>Or fill out the form below</p>
      </div>
      <form required onSubmit={handleSubmit} >
        <div className="mb-3">
          <label className="form-label">Name</label>
          {/* added onBlur that runs logic that adds a span when its empty and user clicks off dom else its invisible */}
          <input type="name" className="form-control" required={true} id="name" onBlur={(e) => {
            if (!e.target.value) {
              document.getElementById('nameerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
            } else {
              document.getElementById('nameerr').innerHTML = ''
             
            }
          }}onChange={(e) => {
            if (!e.target.value) {
              document.getElementById('nameerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
            } else {
              document.getElementById('nameerr').innerHTML = ''
             
            }
          }}></input>
          <div id='nameerr'></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required={true} onChange={(e) => {
           if(e.target.value.match(/.+@.+\..+/)){
              document.getElementById('emailerr').innerHTML = ''
            }else {
              document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">Incorrect Email Format</span>'
            }
          }} onBlur={(e) => {
            if (!e.target.value) {
              document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
            } else if(e.target.value.match(/.+@.+\..+/)){
              document.getElementById('emailerr').innerHTML = ''
            }else {
              document.getElementById('emailerr').innerHTML = '<span style="color:red; font-size: 1vh;">Incorrect Email Format</span>'
            }
          }}></input>
          <div id='emailerr'></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" rows="10" required={true} onBlur={(e) => {
              
            if (!e.target.value) {
              document.getElementById('texterr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
            } else {
              document.getElementById('texterr').innerHTML = ''
            }
          }}onChange={(e) => {
              
            if (!e.target.value) {
              document.getElementById('texterr').innerHTML = '<span style="color:red; font-size: 1vh;">This field is required.</span>'
            } else {
              document.getElementById('texterr').innerHTML = ''
            }
          }}></textarea>
          <div id='texterr'></div>
        </div>
        <div id="recapdiv">
  
        <div>
        {/* <ReCAPTCHA
    sitekey="6LcSSIElAAAAAKpvOYeTMbkbCBF3hla3-9PCImD1"
     size={recapsize}
    onChange={handleCaptcha}
    ref={captchaRef}
  /> */}
  <div id="recap"></div>
  </div>
  <div id="subbtndiv">
        <button type="submit" id="subbtn" className="btn btn-primary subbtn"><i class="bi bi-send"></i> Send</button>
        </div>
  
        </div>
      </form>
      
    </div>
    </div>
    );
  };


export default Contact;