import React from "react";
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css'
// import * as Showdown from "showdown"
import Showdown from "showdown";
// import { ShowdownExtension } from "react-showdown";

export default function Editor (props){
    
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        table: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    })

    return(
        <section className="pane editor">
            <ReactMde 
            value={props.currentNotes.body}
            onChange={props.updateNotes}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown)=>
                Promise.resolve(converter.makeHtml(markdown))
            }
            minEditorHeight={80}
            heightUnits="vh"
            >

            </ReactMde>
        </section>
    )
}