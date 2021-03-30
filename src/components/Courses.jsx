import '../Courses.css'
import StudentIcon from './iconComponents/StudentIcon'
import TimeIcon from './iconComponents/TimeIcon'
import StarIcon from './iconComponents/StarIcon'
import BookIcon from './iconComponents/BookIcon'

const Courses = ({title, username, country, level, students, hours, star, lessons, flag}) => {
    return(
        <div className="courses">
            <div className="course-title">{title}</div>

            <div className="options"></div>
            
            <div className="user-info">
                <div className="course-header">
                    <div className="user-image">
                        <img src="/images/steve.jpeg" alt="userImage"/>
                    </div>
                    <div className="user-details">
                        <div className="user-course-name">{username}</div>
                    </div>
                </div>

                <hr/>

                <div className="country">
                    <img src={flag} alt=""/>
                    <div className="nationality">{country}</div>
                    <div className="class-level">{level}</div>
                </div>

                <div className="class-options">
                    <div className="class-option">
                        <div className="icon">
                            <StudentIcon/>
                        </div>

                        <div className="icon-title">
                            {students} Students
                        </div>
                    </div>

                    <div className="class-option">
                        <div className="icon">
                            <TimeIcon/>
                        </div>

                        <div className="icon-title">
                            {hours}hrs
                        </div>
                    </div>

                    <div className="class-option">
                        <div className="icon">
                            <StarIcon/>
                        </div>

                        <div className="icon-title">
                            {star}
                        </div>
                    </div>

                    <div className="class-option">
                        <div className="icon">
                            <BookIcon/>
                        </div>

                        <div className="icon-title">
                            {lessons} Lessons
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;