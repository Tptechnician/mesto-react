import React, { useEffect } from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';



function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  // Заготовка для popup удаления карточки
  /*function handleDeleteCardClick() {
    setDeletePopupOpen(!isDeletePopupOpen);
  }*/

  function handleCardClick (card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeletePopupOpen(false);
    setImagePopupOpen(false);
    setTimeout(()=>setSelectedCard({}), 1000);
    ;
  }
  
  return (
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name='profile'
          title='Редактировать профиль'
          buttonText='Сохранить'
        >
          <input 
            className="popup__input" 
            type="text" 
            name="inputname" 
            id="input-name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__form-error" id="input-name-error"></span>
          <input 
            className="popup__input" 
            type="text" 
            name="inputactivity" 
            id="input-activity"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__form-error" id="input-activity-error"></span>
        </PopupWithForm>
       
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name='addimage'
          title='Новое место'
          buttonText='Сохранить'
        >
          <input 
            className="popup__input" 
            type="text" 
            name="inputtitle"
            id="input-title"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__form-error" id="input-title-error"></span>
          <input 
            className="popup__input" 
            type="url" 
            name="inputlink" 
            id="input-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__form-error" id="input-link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name='avatar'
          title='Обновить аватар'
          buttonText='Сохранить'
        >
          <input 
            className="popup__input" 
            type="url" 
            name="inputlink" 
            id="input-avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__form-error" id="input-avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          name='delete'
          title='Вы уверены?'
          buttonText='Да'
        />

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
        <template className="element-template">
            <li className="element">
                <button className="element__delete-button" type="button"></button>
                <img className="element__image" src="#" alt="фото"/>
                <div className="element__wraper">
                    <h2 className="element__description"></h2>
                    
                    <div className="element__like-wraper">                        
                        <button className="element__like-button" type="button"></button>
                        <p className="element__like-count"></p>
                    </div>
                </div>
            </li>
        </template>
    </div>
  );
}

export default App;
