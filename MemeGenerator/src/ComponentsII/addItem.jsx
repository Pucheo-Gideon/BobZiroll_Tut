import React from "react";
import "../ComponentsII/style.css";

export function AddItem() {
  const [add, setAdd] = React.useState(["Thing 1", "Thing 2"]);

  
  const addedItem = `Thing ${add.length + 1}`
  function addItem() {
      setAdd(prevState => [...prevState, addedItem])
      console.log(addedItem);
    }
    // const removedItem = `thing ${add.length -1}`;
    // function deleteItem () {
    //     setAdd(prevState => [...prevState, removedItem-1])
    // }
    
    const thingsElements = add.map(things => <p key={things}>{things}</p>)
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
