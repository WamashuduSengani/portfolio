import './index.scss'
import { NavLink } from 'react-router-dom'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 100000000000) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  tick() {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>'

    var that = this
    var delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }
}

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite')
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type')
    var period = elements[i].getAttribute('data-period')
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period)
    }
  }
}

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="typing"></div>
        <div className="text-zone">
          <h2 className="hello">
            Hello, my name is <span className="name">Wamashudu Sengani</span>
          </h2>
          <br />
          <h5>
            <p>
              I am 23 years old, currently studying Software Development at
              WeThinkCode_ graduating end of year. I'm a very ambitious
              individual with excellent communication skills, quiet confident,
              naturally curious. I am a motorsport enthusiast and I have a very
              strong passion for technology. I'm a critical thinker, I possess
              good problem solving skills and I always strive for continued
              excellence. I'm excited to learn and grow in many fields of
              software development and expand my knowledge in the industry and
              meet amazing people in my journey.
            </p>
          </h5>

          <h4>Why do I want to be a SovTech Developer?</h4>
          <p>
            I want to become part of the team that is changing the way business
            across the world build software. I related a lot with the SovTech
            #TECH spex because I want to innovate and change the world using
            technology. I love problem solving and learning while doing so. I
            see SovTech as a place where I can grow as a developer since I'm
            transitioning from being a student to getting into the industry
            professionally, there's plenty of opportunities for continuous
            learning for me. SovTech would help me enhance my technical as well
            as soft skills and where I can get a chance to work on different
            technologies. I believe that SovTech is where I can gain an experience. So, SovTech is
            simply the best company for starting my career because it strongly
            focus on learning.
          </p>

          <div className="typing">
            <a
              href=""
              className="typewrite"
              data-period="5000"
              data-type='[ "an aspiring software developer.", "I am eager to learn.","I am passionate about tech.",
            "I like innovation.","I am ambitious.","I love writing code.","Tech is cool"]'
            >
              <span className="wrap"></span>
            </a>
          </div>

          <NavLink
            activeclassname="active"
            className="flat-button"
            to="/contact"
          >
            <span>Contact Me</span>
          </NavLink>
        </div>
      </div>

      <div className="stage-cube-cont home_page_cube">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJava} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPython} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
