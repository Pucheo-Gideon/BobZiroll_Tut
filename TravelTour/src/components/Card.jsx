import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <section className="cards-container">
        <img src={props.card.imageUrl} alt="image" className="card--image" />
      <div className="card">
        <div className="country-latitude">
          <img src={props.card.locationIcon} className="locationIcon" />
          <h3>{props.card.location.country}</h3>
          <p>{props.card.location.coordinates.latitude}</p>
          <p>{props.card.location.coordinates.longitude}</p>
        </div>
      <h3 className="card--title">{props.card.title}</h3>
      <h4 className="card-date">{props.card.date}</h4>
      <p className="card--description">{props.card.description}</p>
      </div>
    </section>
  );
};

export { Card };
