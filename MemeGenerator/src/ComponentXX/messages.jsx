import React from "react";

export default function Messages(){

    const [messages, setMessages] = React.useState(["a", "b", "c", "d", "c", "56"])

      /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */


    return(
        <div>
            <h1>{messages.length<1? "You're all caught up!": `You have ${messages.length} unread ${messages.length==1? "message": "messages"}`}</h1>
        </div>
    )
}