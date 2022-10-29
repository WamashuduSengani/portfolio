import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,faUser,faLinkedin} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (

  <div class='main-container'>
        <div class='aside'>
            <div class="logo">
                <a href='#'>
                    <span>W</span>
                amashudu</a>
            </div>
            <div class='nav-toggler'>
                
            </div>
            <ul class="nav">
                <li><a href='#' exact='true' class="active" to='/'><i class="fa-fa-home">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/></i>Home</a></li>
                <li><a href='#' exact='true' class="active" className='about-link' to='/about'><i class="fa-fa-user"> 
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/></i>About</a></li>
                <li><a href='#' exact='true' class="active" className='contact-link' to='/contact'><i class="fa-fa-user"> 
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/></i>Contact</a></li>
              
            </ul>

            <ul class='socials'>
                <li><a target='_blank' rel='noreferrer' href='https://github.com/WamashuduSengani'><i class="fa-fa-user"> 
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/></i>GitHub</a></li>
                <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/wamashudu-sengani-5911ba20a/'><i class="fa-fa-user"> 
                    <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e'/></i>Linkedin</a></li>
            </ul>    

        <div class='main-content'>
        <section class='home section'>
            Home

        </section>

        </div>


    </div>
    </div>

    
)

export default Sidebar;