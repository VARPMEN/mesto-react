import { useEffect, useState } from "react";
import Card from "./Card";
import editBtnIcon from "../images/edit-button-icon.svg";
import addBtnIcon from "../images/add-button-icon.svg";
import api from "../utils/Api";
import { render } from "@testing-library/react";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, data]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(data);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <main>
      <section className="profile container" aria-label="Профиль">
        <div className="profile__info-block">
          <div className="profile__avatar-block">
            <img
              src={userAvatar}
              alt="Ваш аватар"
              className="profile__avatar"
            />
            <div className="profile__avatar-overlay" onClick={onEditAvatar}>
              <img
                src={editBtnIcon}
                alt="Редактирование"
                className="profile__overlay-icon"
              />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__user-name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              >
                <img
                  src={editBtnIcon}
                  alt="Редактирование"
                  className="profile__edit-button-icon"
                />
              </button>
            </div>
            <p className="profile__user-job">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить публикацию"
          onClick={onAddPlace}
        >
          <img
            src={addBtnIcon}
            alt="Добавить публикацию"
            className="profile__add-button-icon"
          />
        </button>
      </section>

      <section className="elements container" aria-label="Галерея">
        {cards.map((item) => {
          return <Card card={item} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
