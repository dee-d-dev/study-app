import '../Tables.css'

const Tables = ({yes, no}) =>{
    
    return(
        <div class="tables">
            <div className="field first-row"></div>
            <div className="field first-row">Mon</div>
            <div className="field first-row">Tue</div>
            <div className="field first-row">Wed</div>
            <div className="field first-row">Thurs</div>
            <div className="field first-row">Fri</div>
            <div className="field">8-8:30</div>
            <div className="field">{yes}</div>
            <div className="field">❌</div>
            <div className="field">❌</div>
            <div className="field">{no}</div>
            <div className="field">❌</div>
            <div className="field">9-9:30</div>
            <div className="field">✅</div>
            <div className="field">✅</div>
            <div className="field">❌</div>
            <div className="field">✅</div>
            <div className="field">✅</div>
            <div className="field">10-10:30</div>
            <div className="field">✅</div>
            <div className="field">❌</div>
            <div className="field">❌</div>
            <div className="field">✅</div>
            <div className="field">✅</div>
            <div className="field">11-11:30</div>
            <div className="field">❌</div>
            <div className="field">✅</div>
            <div className="field">✅</div>
            <div className="field">✅</div>
            <div className="field">✅</div>
            <div className="field">12-12:30</div>
            <div className="field">❌</div>
            <div className="field">✅</div>
            <div className="field">❌</div>
            <div className="field">✅</div>
            <div className="field">✅</div>
        </div>
    )
}

export default Tables