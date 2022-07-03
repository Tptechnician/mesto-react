import headerlogo from '../images/header-logo.svg';

function App() {
  return (
    <body className="root">
    <div className="page">

        <header className="header">
            <img className="header__logo" src={headerlogo} alt="лого"/>
        </header>

        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <button className="profile__avatar-button" type="button"></button>
                    <img className="profile__avatar" src="#" alt="аватар"/>
                    
                    <div className="profile__list">
                        <div className="profile__list-line">
                            <h1 className="profile__name"></h1>
                            <button className="profile__edit-button" type="button"></button>
                        </div>
                        <p className="profile__activity"></p>
                    </div>
                </div>
                <button className="profile__add-button" type="button"></button>
            </section>

            <section className="elements">
                <ul className="elements__cards">
                </ul>
            </section>
        </main>

        <footer className="footer">
            <p className="footer__copyright">&copy;2022. Павел Дёмин</p>
        </footer>
        <div className="popup popup_type_profile">
            <div className="popup__content">
                <button className="popup__close" type="button"></button>
                <h3 className="popup__title">Редактировать профиль</h3>
                <form className="popup__form" name="formPopup" novalidate>
                    <input 
                        className="popup__input" 
                        type="text" 
                        name="inputname" 
                        id="input-name"
                        placeholder="Имя"
                        minlength="2"
                        maxlength="40"
                        required
                    />
                    <span className="popup__form-error" id="input-name-error"></span>
                    <input 
                        className="popup__input" 
                        type="text" 
                        name="inputactivity" 
                        id="input-activity"
                        placeholder="О себе"
                        minlength="2"
                        maxlength="200"
                        required
                    />
                    <span className="popup__form-error" id="input-activity-error"></span>
                    <button className="popup__save" type="submit">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_addimage">
            <div className="popup__content">
                <button className="popup__close popup__close-addimage" type="button"></button>
                <h3 className="popup__title">Новое место</h3>
                <form className="popup__form" name="formPopupAddImage" novalidate>
                    <input 
                        className="popup__input" 
                        type="text" 
                        name="inputtitle"
                        id="input-title"
                        placeholder="Название"
                        minlength="2"
                        maxlength="30"
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
                    <button className="popup__save" type="submit">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_avatar">
            <div className="popup__content">
                <button className="popup__close popup__close-avatar" type="button"></button>
                <h3 className="popup__title">Обновить аватар</h3>
                <form className="popup__form" name="formPopupAvatar" novalidate>
                    <input 
                        className="popup__input" 
                        type="url" 
                        name="inputlink" 
                        id="input-avatar"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span className="popup__form-error" id="input-avatar-error"></span>
                    <button className="popup__save" type="submit">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_delete">
            <div className="popup__content">
                <button className="popup__close popup__close-avatar" type="button"></button>
                <h3 className="popup__title">Вы уверены?</h3>
                <form className="popup__form" name="formPopupDelete">
                <button className="popup__save" type="submit">Да</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_viewimage popup_type_background">
            <div className="popup__wrapper">
                <img className="popup__image" src="#" alt="фото"/>
                <button className="popup__close popup__close-viewimage" type="button"></button>
                <h3 className="popup__title popup__title_viewimage"></h3>
            </div>
        </div>

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
</body>
  );
}

export default App;
