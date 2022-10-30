import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
    const form = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
    return (
        
        <div>


        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

        <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input placeholder="Name" type="text" name="name" required />
            </li>
            <li className="half">
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
        </div>
      </div>
      </div>
    )
}

export default Contact