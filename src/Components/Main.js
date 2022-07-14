import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    api.getCard()
      .then((cardsData) => {
        setCards(cardsData);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
      setCards(cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    },
    (err) => {
      console.log(err);
    });
}

function handleCardDelete(card) {
  api.deleteCard(card._id)
  .then(() => {
    setCards(cards.filter((currentCard) => currentCard !== card));
  },
  (err) => {
    console.log(err);
  });
} 

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button 
            className="profile__avatar-button"
             type="button"
            onClick={props.onEditAvatar}
          >
          </button>
          <img className="profile__avatar" src={`${currentUser.avatar}`} alt="аватар"/>
          <div className="profile__list">
            <div className="profile__list-line">
              <h1 className="profile__name">{`${currentUser.name}`}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              >
              </button>
            </div>
            <p className="profile__activity">{`${currentUser.about}`}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        >
        </button>
      </section>

      <section className="elements">
        <ul className="elements__cards">
          {cards.map((card) => {
            return (<Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete ={handleCardDelete}
              />)
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
