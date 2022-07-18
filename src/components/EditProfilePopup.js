import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [formValues, setFormValues] = React.useState({name: '', about: ''});

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser(formValues);
  }

  React.useEffect(() => {
    setFormValues({name: currentUser.name, about: currentUser.about});
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name='profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <input 
        className="popup__input" 
        type="text" 
        value={formValues.name || ' '}
        name="name" 
        id="input-name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChange}
      />
      <span className="popup__form-error" id="input-name-error"></span>
      <input 
        className="popup__input" 
        type="text" 
        value={formValues.about || ' '}
        name="about" 
        id="input-activity"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChange}
      />
      <span className="popup__form-error" id="input-activity-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;