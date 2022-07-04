import React from 'react';

function Main(props) {
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
            <img className="profile__avatar" src="#" alt="аватар"/>

            <div className="profile__list">
              <div className="profile__list-line">
                <h1 className="profile__name"></h1>
                <button
                  className="profile__edit-button"
                  type="button"
                  onClick={props.onEditProfile}
                  >
                </button>
              </div>
              <p className="profile__activity"></p>
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
        </ul>
      </section>
    </main>
  );
}

export default Main;
