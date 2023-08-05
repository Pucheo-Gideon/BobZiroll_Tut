import React from "react";
import "../ComponentsII/style.css"


export default function TodoList (props) {

    const [todo, setTodo] = React.useState(["Hello 1", "Hello 2"])

    const newTodo = `Hello ${todo.length+1}`

    const handleOnAddItem = () => {
        setTodo(prevTodo => ([...prevTodo, newTodo]))
    }

    const delTodo = `Hello ${todo.length -1}`;
    const handleDeleteItem = ()=>{
        setTodo((prevTodo=> [ prevTodo.forEach(item => item.length-1)]))
    }
    console.log(newTodo)

    const styles = {
        backgroundColor: props.darkMode? "black" : "#ccc",
        color: props.darkMode? "white": "black",
        padding: "10px"
    }

    const todoElement = todo.map(item => <p key={item}>{item}</p>)

    return(
        <div style={styles}>
            <button onClick={handleOnAddItem}>
                Add Item
            </button>
            <button onClick={handleDeleteItem}>
                Delete Item
            </button>

            {todoElement}
        </div>
    )
}