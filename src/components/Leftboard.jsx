import '../leftboard.css'
// import Class from './icons/dashboard.svg'
// import Dashboard from './icons/chart-bar.svg'
// import Resources from './icons/folder.svg'
import FirstIcon from './iconComponents/FirstIcon'
import SecondIcon from './iconComponents/SecondIcon'
import ThirdIcon from './iconComponents/ThirdIcon'
import FourthIcon from './iconComponents/FourthIcon'
import FifthIcon from './iconComponents/FifthIcon'
import SixthIcon from './iconComponents/SixthIcon'
import SeventhIcon from './iconComponents/SeventhIcon'
import SettingsIcon from './iconComponents/SettingsIcon'
import LogoutIcon from './iconComponents/LogoutIcon'

const Leftboard = () => {
    return(
        <div className="leftboard">
            <header className="header">Ìle iwé 📔</header>

            <div className="dash-lists">
                <div className="dash-list">
                    <div className="dash-icon">
                        {/* <img src={Dashboard} alt=""/> */}
                        <FirstIcon/>
                    </div>
                    <div className="dash-title">
                        Dashboard
                    </div>
                </div>
                <div className="dash-list">
                    <div className="dash-icon">
                        {/* <img src={Class} alt=""/> */}
                        <SecondIcon/>
                    </div>
                    <div className="dash-title">
                        Classes
                    </div>
                </div>
                <div className="dash-list">
                    <div className="dash-icon">
                        {/* <img src={Resources} alt=""/> */}
                        <ThirdIcon/>
                    </div>
                    <div className="dash-title">
                        Resources
                    </div>
                </div>
                <div className="dash-list">
                    <div className="dash-icon">
                        <FourthIcon/>
                    </div>
                    <div className="dash-title">
                        Homework
                    </div>
                </div>
                <div className="dash-list">
                    <div className="dash-icon">
                        <FifthIcon/>
                    </div>
                    <div className="dash-title extra">
                        Analysis
                        <div className="level">Pro</div>
                    </div>
                </div>
                <div className="dash-list">
                    <div className="dash-icon">
                        <SixthIcon/>
                    </div>
                    <div className="dash-title">
                        Friends
                    </div>
                </div>
                <div className="dash-list">
                    <div className="dash-icon">
                        <SeventhIcon/>
                    </div>
                    <div className="dash-title extra">
                        Messages
                        <div className="messages">3</div>
                    </div>
                </div>
            </div>
            <div className="functions">
                <div className="function">
                    <div className="function-icon">
                        <SettingsIcon/>
                    </div>

                    <div className="function-text">Settings</div>
                </div>
                <div className="function">
                    <div className="function-icon">
                        <LogoutIcon/>
                    </div>
                    <div className="function-text log-out">log out</div>
                </div>

                <div className="question">
                    <div className="question-head">Are you ready for exams?</div>
                    <div className="line"></div>
                    <div className="time">
                        <div className="hours frame">
                            <div className="number">
                                <p>0</p><p>4</p>
                            </div>
                            <div className="text">
                                DAYS
                            </div>
                        </div>
                        <div className="min frame">
                            <div className="number">
                                <p>1</p><p>0</p>
                            </div>
                            <div className="text">
                                HOURS
                            </div>
                        </div>
                        <div className="sec frame">
                            <div className="number">
                                <p>1</p><p>0</p>
                            </div>
                            <div className="text">
                                MINUTES
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user">
                    <div className="user-img">
                        <img src="/images/steve.jpeg" alt="userImage"/>
                    </div>
                    <div className="user-details">
                        <div className="user-name">Adedigba Adedotun</div>
                        <div className="user-occupation">Software Engineer</div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Leftboard;