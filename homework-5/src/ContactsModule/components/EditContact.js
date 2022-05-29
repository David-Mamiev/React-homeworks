export default function EditContact({
  item,
  active,
  setActive,
  onChangeFirstName1,
  onChangeLastName1,
  onChangeNumber1,
  onSubmit1,
}) {
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
              {item.item.firstName} {item.item.lastName}
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
              return onSubmit1(e, item.item.id);
            }}
          >
            <div className="pop-up__field">
              <p className="pop-up__field-name">First Name</p>
              <input
                className="pop-up__input"
                placeholder={item.item.firstName}
                onChange={onChangeFirstName1}
              ></input>
            </div>
            <div className="pop-up__field">
              <p className="pop-up__field-name">Last Name</p>
              <input
                className="pop-up__input"
                placeholder={item.item.lastName}
                onChange={onChangeLastName1}
              ></input>
            </div>
            <div className="pop-up__field">
              <p className="pop-up__field-name">Phone Number</p>
              <input
                className="pop-up__input"
                placeholder={item.item.number}
                onChange={onChangeNumber1}
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
