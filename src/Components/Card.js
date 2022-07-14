import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwnCard = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwnCard ? 'element__delete-button_active' : ''}`
  );
  const cardLikeButtonClassName = (
    `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button className={cardDeleteButtonClassName} type="button"></button>
        <img 
          className="element__image"
          src={`${props.card.link}`}
          alt={`${props.card.name}`}
          onClick={handleClick}
        />
      <div className="element__wraper">
        <h2 className="element__description">{`${props.card.name}`}</h2>
        <div className="element__like-wraper">
          <button className={cardLikeButtonClassName} type="button"></button>
          <p className="element__like-count">{`${props.card.likes.length}`}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
