import Popup from 'reactjs-popup';
import {useState} from 'react';
import Tasks from "./Tasks"

function Add() {
    const [message,setMessage]= useState("");
    const [list,setList]= useState([]);

    const handleChange = event => {
       setMessage(event.target.value);
    }

    const handleClick = () => {
        setList((prevList)=>[...prevList,message]);
    }

    const delClick = (i) => {
         const newList = list.filter((item,index)=> index!==i);
         setList(newList);
    }

    const editClick = (index,updatedValue) => {
          const updatedList = [...list];
          updatedList[index]= updatedValue;
          setList(updatedList);
      };

    return (
        <div>
            <Popup trigger={<button className="add-button">Add+</button>}>
                {(close)=> (
                    <div className="pop-up">
                    <textarea className="pop-text" placeholder='Enter your feelings....' onChange={handleChange}></textarea>
                    <button className="pop-button" onClick={()=> {handleClick(); close();}} >save</button>
                   </div>
                )}
            </Popup>
           <div className="list">
            <div className="note">
                List of Notes
            </div>
            {
            list.map((item,index)=> 
            <>
            <Tasks
                key={index} 
                name={item}
                value={index}
                onClick = {()=>delClick(index)} 
                editClick={editClick} 
             />
            </>)
           }
           </div>
        </div>
        
    )
}

export default Add;
