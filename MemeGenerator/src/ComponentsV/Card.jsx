import React from "react";
import Star from "./Star"
import "../ComponentsV/Card.css"

export default function C_Card() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
    isProfilePix: false
  });

  /**
   * Challenge: Move the star image into its own component
   * - It should receive a prop called `isFilled` that it
   *   uses to determine which icon it will display
   * - Import and render that component, passing the value of
   *   `isFavorite` to the new `isFilled` prop.
   * - Don't worry about the abiliity to flip this value quite yet.
   *   Instead, you can test if it's working by manually changing
   *   `isFavorite` in state above.
   */
  
//   const starIcon = contact.isFavorite? "star-filled.png": "star-empty.png"

const profilePix = contact.isProfilePix ? "user.png" : "Three.JPG";
  const toggleFavorite = ()=> {
    setContact( prevState => ({
        ...prevState,
        isFavorite: !prevState.isFavorite,
        // isProfilePix: !prevState.isProfilePix
    }))
  }

  const togglePix = () => {
    setContact(prevData => ({
        ...prevData,
        isProfilePix: !prevData.isProfilePix
    }))
  }
  return (
    <main>
      <article className="card">
        <img src= {`./images/${profilePix}`} className="card--image" onClick={togglePix} />
        <div className="card--info">
         <Star isAvailable = {contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
