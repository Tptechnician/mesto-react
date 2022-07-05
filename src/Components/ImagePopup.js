import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_viewimage popup_type_background ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__wrapper">
        <img 
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <button
          className="popup__close popup__close-viewimage"
          type="button"
          onClick={props.onClose}
        >
        </button>
        <h3 className="popup__title popup__title_viewimage">{props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
