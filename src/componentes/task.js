import { useState } from "react";

export default function Task({item, onUpdate, onDelete}){

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title);
        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdate(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }
        return ( 
             <form className="TaskUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="TaksInput" onChange={handleChange} value={newValue}/>
            <button className="button" onClick={handleClickUpdate}>Update</button>
        </form>
        );
    }

    function TaksElement(){
        return <div className="TaskInfo">
           <span className="taskTitle">{item.title}</span>  <button className="button" onClick={()=> setIsEdit (true)} >Edit</button>
            <button className="button-delete" onClick = {(e) => onDelete(item.id)}>Delete item</button>
        </div>  
    }

    return(

        <div className="allitems">
            {isEdit ? <FormEdit/> : <TaksElement/>}<div></div>       
        </div>
    );

}

  