import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button className="element__delete-button" type="button"></button>
        <img 
          className="element__image"
          src={`${props.card.link}`}
          alt={`${props.card.name}`}
          onClick={handleClick}
        />
      <div className="element__wraper">
        <h2 className="element__description">{`${props.card.name}`}</h2>
        <div className="element__like-wraper">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-count">{`${props.card.likes.length}`}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
