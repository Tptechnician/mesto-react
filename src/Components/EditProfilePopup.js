import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(' ');
  const [description, setDescription] = React.useState(' ');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name='profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input 
        className="popup__input" 
        type="text" 
        value={name || ' '}
        name="inputname" 
        id="input-name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChangeName}
      />
      <span className="popup__form-error" id="input-name-error"></span>
      <input 
        className="popup__input" 
        type="text" 
        value={description || ' '}
        name="inputactivity" 
        id="input-activity"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChangeDescription}
      />
      <span className="popup__form-error" id="input-activity-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;