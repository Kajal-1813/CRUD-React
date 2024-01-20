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

    return (
        <div>
            <Popup trigger={ 
            <button className="add-button">Add+</button>}
            modal
            >
                {(close)=> (
                    <div className="pop-up">
                    <textarea className="pop-text" placeholder='Enter your feelings....' onChange={handleChange}></textarea>
                    <button className="pop-button" onClick={()=> {handleClick(); close();}} >save</button>
                   </div>
                )}

            </Popup>
           <div className="list">
            <div>
                List of Items
            </div>
            {
            list.map((item,index)=> 
            <>
            <Tasks key={index} name={item} onClick = {()=>delClick(index)}/>
            </>)
           }
           </div>
        </div>
        
    )
}

export default Add;




