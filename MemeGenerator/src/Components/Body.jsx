import React from "react";
import memesData from "./memesData";
import './objectInState.css'

export const Body = () => {
 

  React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  },[])

  const [allMemes, setAllMemes] = React.useState('')

  console.log(allMemes)
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  })

  // const handleClick = (e)=> {
  //   e.preventDefault()
  //   const newData = memesData.data.memesev
  //   const selectRandom = Math.floor(Math.random() * newData.length);
  //  const url = newData[selectRandom].url;
  //   setMeme(prevMeme => ({
  //     ...prevMeme,
  //     randomImage: url
  //   }))

  //   console.log(memeImage)
  // }
 

  const handleGetMeme = (event) => {
    event.preventDefault()
    const newMemes = allMemes
    const randomMeme = Math.floor(Math.random() * newMemes.length)
    const url = newMemes[randomMeme].url

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  const handleChange =(event)=> {
    setMeme(prevMeme => ({
      ...prevMeme,
      [event.target.name]: event.target.value
    }))
  }
 


  return (
    <section className="body-section">
      <form>
        <div className="input--wrapper">
          <input
            type="text"
            className="input--left"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input--right"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleGetMeme} className="text--image">
          Get a new meme Image &#128444;
        </button>
      </form>
      <div className="meme-text-wrapper">
        {/* <h3></h3> */}
        <img className="meme--image" src={meme.randomImage} />
        <h1 className="memeText topText">{meme.topText}</h1>
        <h2 className="memeText bottomText">{meme.bottomText}</h2>
      </div>
    </section>
  );
};
