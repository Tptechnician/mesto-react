import React, { useEffect, useState } from 'react';
import api from '../utils/Api.js';
import Cards from './Cards.js';


function Main(props) {
  const [userName, setUserName] = useState([]);
  const [userDescription , setUserDescription ] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards ] = useState([]);

  useEffect(()=>{
    api.getUserData()
      .then(([userData, cardsData]) => {
        setUserName( userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
            <img className="profile__avatar" src={`${userAvatar}`} alt="аватар"/>

            <div className="profile__list">
              <div className="profile__list-line">
                <h1 className="profile__name">{`${userName}`}</h1>
                <button
                  className="profile__edit-button"
                  type="button"
                  onClick={props.onEditProfile}
                  >
                </button>
              </div>
              <p className="profile__activity">{`${userDescription}`}</p>
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
          {cards.map((item) => {
            return (<Cards
              imageLink={item.link}
              cardDescription={item.name}
              likeCount={item.likes.length}
            />)
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
