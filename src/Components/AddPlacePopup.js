import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
  const [link, setLink] = React.useState('');
  const [title, setTitle] = React.useState('');
  
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      link: link,
      name: title
    });
    setLink('');
    setTitle('');
  }

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
        name="inputtitle"
        id="input-title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={title || ''}
        onChange={handleChangeTitle}
      />
      <span className="popup__form-error" id="input-title-error"></span>
      <input 
        className="popup__input" 
        type="url" 
        name="inputlink" 
        id="input-link"
        placeholder="Ссылка на картинку"
        required
        value={link || ''}
        onChange={handleChangeLink}
      />
      <span className="popup__form-error" id="input-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;