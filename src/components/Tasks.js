import {useState} from "react";
import Popup from "reactjs-popup";
function Tasks(props) {

    const { name, onClick, editClick, value } = props;
    const [neww,setNeww] = useState(name);
    const handleChange= (e)=> {
        setNeww(e);
   }
      
    return (
        <div className="tasks">
            <div className="tasks-n">
                {name}
            </div>
            <div className="buttons">
                <Popup trigger = {<button className="del" >Edit</button>}>
                    {
                        (close)=> (
                                <div className="pop-up">
                                    <textarea className="pop-text" key={value} value={neww}  onChange= {(e)=> handleChange(e.target.value) }></textarea>
                                    <button className="pop-button" onClick={()=> {editClick(value,neww);close();}}>Save</button>
                                </div>
                                )
                    }
                </Popup>
                <button className="del"  onClick = {onClick}>Delete</button>
            </div>
        </div>
    )
}

export default Tasks;


