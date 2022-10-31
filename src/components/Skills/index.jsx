import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'


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

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

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

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="skills">
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'M',
              'Y',
              ' ',
              'T',
              'E',
              'C',
              'H',
              ' ',
              'S',
              'T',
              'A',
              'C',
              'K',
            ]}
            idx={1}
          />
        </h2>
        <div className="text_wrapper">
          <p>
            I am strong engineering professional with demonstrated skills
            working with Java,
            <br />
            Python (Programming language), Javascript, SQL, HTML, CSS and <br />
            sound knowledge in Agile Methodologies, Build Tools, Test Driven
            Development, Behavior Driven Development,
            <br />
            Object Oriented Programming, Maven, Docker and GitLab CI/CD
            pipelines
          </p>
        </div>
        <div className="stage-cube-cont skills_cube_view">
          <div className="cubespinner">
            <div className="face1">
              <p>Javascript</p>
            </div>
            <div className="face2">
              <p>Java</p>
            </div>
            <div className="face3">
              <p>Python</p>
            </div>
            <div className="face4">
              <p>Node.js</p>
            </div>
            <div className="face5">
              <p>HTML</p>
            </div>
            <div className="face6">
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
