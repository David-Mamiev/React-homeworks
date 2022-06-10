import { contactContext } from "../../contexts/ContactContext";
import { useContext } from "react";

export default function ContactItem(props) {
  const modalActive = useContext(contactContext);
  return (
    <li className="phone-book__item">
      <div className="phone-book__left">
        <div className="phone-book__image"></div>
        <div className="phone-book__text-block">
          <h5 className="phone-book__name">
            {props.item.firstName} {props.item.lastName}
          </h5>
          <p className="phone-book__number">{props.item.number}</p>
        </div>
      </div>
      <div className="phone-book__right">
        <div
          className="phone-book__change"
          onClick={() => {
            modalActive(true);
            props.onClickEditButton(props.item)
          }}
        >
          ✍️
        </div>
        <div
          className="phone-book__delete"
          onClick={() => props.onDelete(props.item.id)}
        >
          🗑
        </div>
      </div>
    </li>
  );
}