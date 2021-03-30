import '../Class.css'

const Class = ({title, type, duration}) => {
    return(
        <div className="class">
            <div className="class-header">
                {title}
            </div>

            <div className="class-type">
                {type}
            </div>

            <div className="duration">{duration}</div>
        </div>
    )
}

export default Class;