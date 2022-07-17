import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  //console.log(props.card);
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

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="element">
      <button 
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      >
      </button>
        <img 
          className="element__image"
          src={`${props.card.link}`}
          alt={`${props.card.name}`}
          onClick={handleClick}
        />
      <div className="element__wraper">
        <h2 className="element__description">{`${props.card.name}`}</h2>
        <div className="element__like-wraper">
          <button 
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          >
          </button>
          <p className="element__like-count">{`${props.card.likes.length}`}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
