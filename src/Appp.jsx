import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const Appp = () =>
{
    const [inputList , setInputList]=useState("");
    const [Items ,setItems]= useState([]);
    const itemEvent = (event) =>
    {
        setInputList(event.target.value);
    };
    const ListOfItems = () =>
    {
setItems((oldItems) =>
{ 
    return [...oldItems, inputList];
});
setInputList("");
    };
    const deleteItems=(id)=>
    {
  console.log("deleted");
  setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !==id;
      })
  })
    };
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a Item"
                value={inputList}
                onChange={itemEvent}/>
                <button onClick={ListOfItems}> + </button>

                <ol>
                    {/*<li>{inputList}</li>*/ }
                    {Items.map((itemval ,index) =>{
                      return <ToDoLists key={index}
                       id={index}
                        text={itemval}
                        onSelect={deleteItems} />;
                    }
                    )}
                </ol>
            </div>
        </div>
        </>
    );

};
export default Appp;