import deleteBtnIcon from "../images/delete-btn-icon.svg";

const Card = (props) => {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="element__image"
        onClick={handleCardClick}
      />
      <button
        className="element__delete-btn"
        type="button"
        aria-label="Удалить"
      >
        <img
          src={deleteBtnIcon}
          alt="Удалить"
          className="element__delete-btn-icon"
        />
      </button>
      <div className="element__container">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__like-btn"
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <p className="element__counter-likes">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
};
export default Card;
