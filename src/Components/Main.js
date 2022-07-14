import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const CurrentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    api.getCard()
      .then((cardsData) => {
        setCards(cardsData);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

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
          <img className="profile__avatar" src={`${CurrentUser.avatar}`} alt="аватар"/>
          <div className="profile__list">
            <div className="profile__list-line">
              <h1 className="profile__name">{`${CurrentUser.name}`}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              >
              </button>
            </div>
            <p className="profile__activity">{`${CurrentUser.about}`}</p>
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
              />)
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
