import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGears, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => (
  <div className="main-container">
    <div className="aside">
      <div className="nav-toggler"></div>

      <div className="nav">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
        </NavLink>
      </div>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/wamashudu-sengani-5911ba20a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/WamashuduSengani"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Sidebar
