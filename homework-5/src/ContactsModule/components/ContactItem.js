import EditContact from "./EditContact";
import { useState } from "react";

export default function ContactItem(props) {
  const [modalActive, setModalActive] = useState(false);
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
          onClick={() => setModalActive(true)}
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
      <EditContact
        item={props}
        key={props.item.id}
        active={modalActive}
        setActive={setModalActive}
        onChangeFirstName1={props.onChangeFirstName}
        onChangeLastName1={props.onChangeLastName}
        onChangeNumber1={props.onChangeNumber}
        onSubmit1={props.onSubmit}
      />
    </li>
  );
}
