import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button 
          className="popup__close"
          type="button"
          onClick={props.onClose}
        >
        </button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          className="popup__form"
          name={`formPopup${props.name}`}
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="popup__save" type="submit">
            {props.isLoading ? 'Сохранение...' : props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
