import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

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
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            A strong engineering professional with demonstrated skills working
            with Java,
            <br />
            Python (Programming language), Javascript, SQL, HTML, CSS and <br />
            sound knowledge in Agile Methodologies, Build Tools, Test Driven
            Development, Behavior Driven Development,
            <br />
            Object Oriented Programming, Maven, Docker and GitLab CI/CD
            pipelines
          </p>
        </div>
      </div>
    </>
  )
}

export default Skills
