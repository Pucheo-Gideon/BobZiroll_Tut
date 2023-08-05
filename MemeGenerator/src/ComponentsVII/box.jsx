import React from "react";

export default function Box (props){


    const styles = {
        backgroundColor: props.on? "#cccccc" : "none"
    }

    return <div className="box" style={styles}></div>;
}