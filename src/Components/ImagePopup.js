import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_viewimage popup_type_background">
      <div className="popup__wrapper">
        <img className="popup__image" src="#" alt="фото"/>
        <button className="popup__close popup__close-viewimage" type="button"></button>
        <h3 className="popup__title popup__title_viewimage"></h3>
      </div>
    </div>
  );
}

export default ImagePopup;