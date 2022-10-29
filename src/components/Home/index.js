import './index.scss'

const Home = () => {
    return (
        
        <div class='main-content'>
        <div class="container">
            <div class="row">
                <div class="home-info padd-15" >
                    <h3 class="hello">Hello, my name is <span class="name">Wamashudu Sengani</span></h3>
                    <h3 class="my-profession">I'm an <span class='typing'>aspiring Software Developer</span></h3>
                    <p class="my-self">Tell us more about yourself,
                        </p>
                    <a href='#contact' class='btn hire-me'>Why I want to be a SovTech Developer?</a>
                </div>
            </div>
            {/* <div class='home-img padd-15'>
                <img src='src/assets/images/33c90b7c-be7a-48a6-b8c2-684f15490e21.jpeg' alt=''></img>
            </div> */}
        </div>

        </div>
    );
}


export default Home;