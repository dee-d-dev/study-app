import '../Rightboard.css'
import SearchIcon from './iconComponents/SearchIcon'
import CalendarIcon from './iconComponents/CalendarIcon'
import Class from './Class'
import Tables from './Tables'

const Rightboard = () => {
    return(
        <div className="Rightboard">
           <div className="top">
               <div className="search"><SearchIcon color="grey"/></div>
               <input type="text" className="input" placeholder="Search everything..."/>
               <div className="notify">notify</div>
           </div>

           <div className="section-head">
                    <div className="inner-header"><p>Daily practice </p><span>5 results</span></div>
                    <div className="view-all">view all</div>
            </div>

            <div className="classes">
                <Class title="Online Dictation"  type="#Learning" duration="15mins"/>

                <Class title="Speech writing"  type="#Grammar" duration="45mins"/>
            </div>

            <div className="timetable">
                <div className="tt-head">
                    <p>Your classes</p>
                    <span>Today,    29 MAR</span>
                </div>

                <input type="text" className="class-search" id="search"/>

                <div className="tt-icon">
                    <div className="icon-1">
                        <SearchIcon color="white" for="id"/>
                    </div>

                    <div className="icon-2">
                        <CalendarIcon color="white"/>
                    </div>
                </div>
            </div>

            <div className="class-ass">
                <Tables yes="✅" no="❌"/>
            </div>

            <div className="class-ass">
                <Tables yes="✅" no="❌"/>
            </div>
        </div>
    )
}
export default Rightboard;