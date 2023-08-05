import React from "react";

export default function SideBar(props){

    console.log(props)
    const noteElement = props.notes.map((note, index)=>{
        <div key={note.id}>
            <div
                className={
                    `title ${
                        note.id === props.currentNotes.id? "selected-note" :""
                    }`
                }
                onClick={()=> props.setCurrentNoteId(note.id)}
            >
            </div>
            <h4>Note{index +1}</h4>
        </div>
    })

    return(
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElement}
        </section >
    )
}