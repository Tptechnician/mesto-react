import React, { useEffect } from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(()=>{
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  // Заготовка для popup удаления карточки
  /*function handleDeleteCardClick() {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  }*/

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsImagePopupOpen(false);
    setTimeout(()=>setSelectedCard({}), 1000);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser(data) {
      api.setUserInfo(data)
        .then((userData) => {
          setCurrentUser(userData);
          closeAllPopups();
      }).catch((err) => {
        console.log(err);
      });
  }

  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
