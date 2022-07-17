import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
  const [formValues, setFormValues] = useState({name: '', link: ''});

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace(formValues);
  }

  useEffect(() => {
    setFormValues({name: '', link: ''});
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name='addimage'
      title='Новое место'
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input 
        className="popup__input" 
        type="text" 
        name="name"
        id="input-title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={formValues.name || ''}
        onChange={handleChange}
      />
      <span className="popup__form-error" id="input-title-error"></span>
      <input 
        className="popup__input" 
        type="url" 
        name="link" 
        id="input-link"
        placeholder="Ссылка на картинку"
        required
        value={formValues.link || ''}
        onChange={handleChange}
      />
      <span className="popup__form-error" id="input-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;