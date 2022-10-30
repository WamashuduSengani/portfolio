import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3,faGitAlt,faHtml5,faJava, faPython,faReact}
from '@fortawesome/free-brands-svg-icons'


class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } 
    else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}


window.onload = function() {
  
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};  

const Home = () => {
    return (
        
        <div class='main-content'>
        <div class="container">
            <div class="row">
                <div class="home-info padd-15" >
                    <h3 class="hello">Hello, my name is <span class="name">Wamashudu Sengani</span></h3>
                    
                    <h3 class="my-profession">
                        <a href="" class="typewrite" data-period="2000" data-type='[ "I am a Software Developer.", "I Love to Develop.", "I Love Design."]'
                         ><span class="wrap"></span></a>
                    </h3>


                    <p class="my-self"><br/>I am a goal driven individual passionate about technology.<br/>
                    I want to bring innovations to the world and use technology to enhance life.<br/>
                    I'm a team player with excellent communication skills.<br/>
                    I'm able to work effectively as an individual and within a team.
                    <br/>I'm a critical thinker, I possess good problem solving skills <br/>
                     and I always strive for continued excellence.</p>

                     <h4 class='reason'>Why do I want to be a SovTech Developer?</h4>
                     <p class="why">I just want to write code honestly</p>
                   
                    <a href='#contact' class='btn hire-me'>More about me</a>
                </div>
            </div>
               <div className="stage-cube-cont">
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
        </div>
  </div>
    );
}


export default Home;