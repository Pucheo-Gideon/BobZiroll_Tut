import React from "react";
// import "../CountImage.css";

export default function CountImage() {
  const [countUp, setCountUp] = React.useState({
    isImage: true,
    count: 0,
    image: `$${"/public/images/star-empty.png"}`,
    image2: `${"/public/images/star-filled.png"}`,
    // newCount:
  });

  console.log(countUp.count)
  console.log(countUp)
  const isClicked = countUp.isImage === true ? countUp.image2 : countUp.image;
  const onClickImage = () => {
    if (isClicked === countUp.image2) {
      setCountUp((prevState) => {
        return {
          ...prevState,
          // isImage: !prevState.isImage,
          count: prevState.count + 1,
        };
      });
    } else {
      console.log("Nothing");
    }
  };
  return (
    <main>
      <h1>This is an icon that changes when click on it.</h1>
      <img onClick={onClickImage} src={isClicked} />
      <h1>{countUp.count}</h1>
    </main>
  );
}
