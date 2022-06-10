import { useState } from "react";
export default function EditContact({
  item,
  active,
  setActive,
  // onChangeFirstName,
  // onChangeLastName,
  // onChangeNumber,
  // onSubmit,
  onSaveEditContact,
  state,
  getEditItem
}) {
  const [updateFirstName, setUpdateFirstName] = useState();
  const [updateLastName, setUpdateLastName] = useState();
  const [updateNumber, setUpdateNumber] = useState();

  const onChangeFirstNameHandler = ({ target }) => {
    setUpdateFirstName(target.value.toLowerCase());
  };
  const onChangeLastNameHandler = ({ target }) => {
    setUpdateLastName(target.value.toLowerCase());
  };
  const onChangeNumberHandler = ({ target }) => {
    setUpdateNumber(target.value.toLowerCase());
  };
  const onSaveEditContactHandler = (getEditItem) => {
    onSaveEditContact({
      id: getEditItem.id,
      firstName: updateFirstName,
      lastName: updateLastName,
      number: updateNumber,
    })
  }

  return (
    <div
      className={active ? "pop-up pop-up_active" : "pop-up"}
      onClick={() => setActive(false)}
    >
      <div className="pop-up__content" onClick={(e) => e.stopPropagation()}>
        <div className="pop-up__header">
          <p className="pop-up__name">
            Edit Contact:
            <b className="pop-up__name-b">
              {getEditItem.firstName} {getEditItem.lastName}
            </b>
          </p>
          <div className="pop-up__escape" onClick={() => setActive(false)}>
            X
          </div>
        </div>
        <div className="pop-up__body">
          <div className="pop-up__image"></div>
          <form
            className="pop-up__form"
            // onSubmit={(e) => {
            //   return onSubmit(e, getEditItem.id);
            // }}
          >
            <div className="pop-up__field">
              <p className="pop-up__field-name">First Name</p>
              <input
                className="pop-up__input"
                placeholder={getEditItem.firstName}
                onChange={(e) => onChangeFirstNameHandler(e)}
              ></input>
            </div>
            <div className="pop-up__field">
              <p className="pop-up__field-name">Last Name</p>
              <input
                className="pop-up__input"
                placeholder={getEditItem.lastName}
                onChange={(e) => onChangeLastNameHandler(e)}
              ></input>
            </div>
            <div className="pop-up__field">
              <p className="pop-up__field-name">Phone Number</p>
              <input
                className="pop-up__input"
                placeholder={getEditItem.number}
                onChange={(e) => onChangeNumberHandler(e)}
              ></input>
            </div>
            <button onClick={() => onSaveEditContactHandler(getEditItem)} className="pop-up__save">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
