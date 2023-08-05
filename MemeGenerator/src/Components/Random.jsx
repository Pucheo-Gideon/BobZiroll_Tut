import React from "react";

import memesData from "./memesData";

export function Apps() {
  const [url, updateUrl] = React.useState("");

  const handleUrl = (e) => {
    e.preventDefault;
    const newMemes = memesData.data.memes;
    const select = Math.floor(Math.random() * newMemes.length);
    updateUrl(newMemes[select].url);
  };
  return (
    <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <p
          style={{ height: "50px", width: "300px",   backgroundColor: "#ccc" }}
          onClick={handleUrl}
        >
          {url}
        </p>
      </div>
    </>
  );
}
