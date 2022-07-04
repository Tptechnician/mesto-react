import React from 'react';

function Cards(props) {
  console.log(props);
  return (
    <li className="element">
      <button className="element__delete-button" type="button"></button>
        <img className="element__image" src={`${props.imageLink}`} alt="фото"/>
        <div className="element__wraper">
        <h2 className="element__description">{`${props.cardDescription}`}</h2>

        <div className="element__like-wraper">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-count">{`${props.likeCount}`}</p>
        </div>
      </div>
    </li>
  );
}

export default Cards;