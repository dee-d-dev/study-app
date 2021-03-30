import '../CenterSpace.css'
import Courses from './Courses'

const CenterSpace = () => {
    return(
        <div className="centerspace">
            <div className="stories">

                <div className="story">
                    <div className="story-content">
                        <p>+</p>
                    </div>
                    <div className="name">You</div>
                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">David</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Tiemma</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Trojan</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Timi</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Samson</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Akintunde</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Lanre</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Seun</div>

                </div>

                <div className="story">
                    <img src="/images/steve.jpeg" className="story-content" alt=""/>
                    <div className="name">Bolaji</div>

                </div>

            </div>

            <div className="welcome">
                <div className="greetings">Hello Adedotun,</div>
                <div className="message">You have new messages, <span>please check your inbox.</span></div>

                <div className="message-btn">SHOW MESSAGE</div>

                <img src="/images/microphone.png" width="200px" alt=""/>
            </div>

            <div className="analytics">
                <div className="subheading">Time spent on learning</div>

                <div className="images">
                    <img src="/images/analytics.png" width="270px" alt=""/>

                    <img src="/images/progress.png" width="450px" alt=""/>
                </div>
            </div>

            <div className="last-section">
                <div className="section-header">
                    <div className="courses-header"><p>Your courses </p><span>5 results</span></div>
                    <div className="view">view all</div>
                </div>


                <div className="course">
                    <Courses title="Introduction to Finance"
                        username="Adedigba Adedotun"
                        country="Nigeria"
                        level="Intermediate level"
                        students="400"
                        hours="30"
                        star="3.7"
                        lessons="28"
                        flag="/images/flag.png"
                    
                    />

                    <Courses title="Machine Learning with JavaScript"
                        username="Olamide Sholanke"
                        country="UAE"
                        level="Beginner level"
                        students="600"
                        hours="42"
                        star="4.5"
                        lessons="38"
                        flag="/images/uae-flag.jpg"

                    
                    />
                </div>
            </div>
            
            
        </div>
    )
}

export default CenterSpace;