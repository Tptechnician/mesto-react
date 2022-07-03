import React from 'react';

function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_addimage').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
            <button 
              className="profile__avatar-button"
              type="button"
              onClick={handleEditAvatarClick}
              >
            </button>
            <img className="profile__avatar" src="#" alt="аватар"/>

            <div className="profile__list">
              <div className="profile__list-line">
                <h1 className="profile__name"></h1>
                <button
                  className="profile__edit-button"
                  type="button"
                  onClick={handleEditProfileClick}
                  >
                </button>
              </div>
              <p className="profile__activity"></p>
            </div>
        </div>
            <button
              className="profile__add-button"
              type="button"
              onClick={handleAddPlaceClick}
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
