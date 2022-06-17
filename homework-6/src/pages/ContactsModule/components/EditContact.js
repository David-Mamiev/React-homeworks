import { useReducer } from "react";

const reducer = (stateContact, action) => {
  switch (action.type) {
    case "firstName":
      return {
        ...stateContact,
        firstName: action.actualValue,
      };
    case "lastName":
      return {
        ...stateContact,
        lastName: action.actualValue,
      };
    case "number":
      return {
        ...stateContact,
        number: action.actualValue,
      };
    default:
      return stateContact;
  }
}

export default function EditContact({
  active,
  setActive,
  setContactList,
  state,
  getEditItem
}) {
  const [stateContact, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    number: "",
    actualvalue: ""
  });
  const setActualValue = (type, actualValue) => dispatch({ type: type, actualValue });
  const clearChangeFnc = () => {
    setActualValue("firstName", "");
    setActualValue("lastName", "");
    setActualValue("number", "");
  };

  const onSubmitHandler = (event, id) => {
    event.preventDefault();
    setContactList(
      state.map((contact) =>
        contact.id === id
          ? {
            ...contact,
            firstName: stateContact.firstName ? stateContact.firstName : getEditItem.firstName,
            lastName: stateContact.lastName ? stateContact.lastName : getEditItem.lastName,
            number: stateContact.number ? stateContact.number : getEditItem.number,
          }
          : contact
      )
    );
    clearChangeFnc();
  };

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
            onSubmit={(e) => {
              return onSubmitHandler(e, getEditItem.id);
            }}
          >
            <div className="pop-up__field">
              <p className="pop-up__field-name">First Name</p>
              <input
                className="pop-up__input"
                placeholder={getEditItem.firstName}
                onChange={(e) => setActualValue("firstName", e.target.value.toLowerCase())}
              ></input>
            </div>
            <div className="pop-up__field">
              <p className="pop-up__field-name">Last Name</p>
              <input
                className="pop-up__input"
                placeholder={getEditItem.lastName}
                onChange={(e) => setActualValue("lastName", e.target.value.toLowerCase())}
              ></input>
            </div>
            <div className="pop-up__field">
              <p className="pop-up__field-name">Phone Number</p>
              <input
                className="pop-up__input"
                placeholder={getEditItem.number}
                onChange={(e) => setActualValue("number", e.target.value.toLowerCase())}
              ></input>
            </div>
            <button type="submit" className="pop-up__save">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}