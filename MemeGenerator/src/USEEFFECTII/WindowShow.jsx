
import React from "react";
import "./Window.css"

export default function WindowShow(){

    const[windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(()=>{
        function windowWidth(){
            console.log("Mounting width")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", windowWidth)

        return function(){
            window.removeEventListener("resized", windowWidth)
            console.log("Cleaning up")
        }
    })
    console.log("The window width is ==>",windowWidth)

    return <h1>{windowWidth}</h1>
}

const handleComplete = (id) => {
  let list = todoList.map((task) => {
    let item = {};
    if (task.id == id) {
      if (!task.complete) {
        //Task is pending, modifying it to complete and increment the count
        setCompletedTaskCount(completedTaskCount + 1);
      } else {
        //Task is complete, modifying it back to pending, decrement Complete count
        setCompletedTaskCount(completedTaskCount - 1);
      }
      item = { ...task, complete: !task.complete };
    } else item = { ...task };
    return item;
  });
  setTodoList(list);
};