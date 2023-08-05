import React from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Split from "react-split";
import SideBar from "./Components/SideBar";
import Editor from "./Components/Editor";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  // const id = nanoid();

  // Creates newnotes
  function createNewNote() {
    const newNotes = {
      id: nanoid(),
      body: "Type your markdown notes here!",
    };
    setNotes((prevNote) => [newNotes, ...prevNote]);
    setCurrentNoteId(newNotes.id);
  }

  // updates the new notes
  function updateNotes(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  // Find a note

  function findCurrentNotes() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId
      }) || notes[0]
    );
  }

  return (
    <main className="App">
      {notes.length > 0 ? 
        <Split 
            sizes={[30, 70]} 
            direction="horizontal" 
            className="split">
          <SideBar
            notes={notes}
            currentNotes={findCurrentNotes()}
            setCurrentNoteId={setCurrentNoteId}
            newNotes={createNewNote}
          />
          {currentNoteId && notes.length > 0 && 
            <Editor currentNotes={findCurrentNotes} updateNotes={updateNotes} />
          }
        </Split>
       : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first one" onClick={createNewNote}>
            Create a new one
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
