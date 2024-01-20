
import Popup from "reactjs-popup";
function Tasks(props) {

    const name= props.name;
    const onClick = props.onClick;
   const index=props.index;

    return (
        <div className="tasks">
            <div className="tasks-n">
            {name}
            </div>
            <div>
            <button className="del"  onClick = {onClick}>Delete</button>
       </div>
            
        </div>
    )
}

export default Tasks;