import { Search } from "./components/Search";
import { useMemo, useState } from "react";
import ContactItem from "./components/ContactItem";

export default function Contacts() {
  const phoneBook = [
    {
      id: 1,
      firstName: "andres",
      lastName: "garcia",
      number: "+380123456789",
    },
    {
      id: 2,
      firstName: "anna",
      lastName: "delvey",
      number: "+380123456789",
    },
    {
      id: 3,
      firstName: "anna",
      lastName: "sorokin",
      number: "+380636541548",
    },
    {
      id: 4,
      firstName: "bob",
      lastName: "garisson",
      number: "+38096548795",
    },
    {
      id: 5,
      firstName: "jane",
      lastName: "doe",
      number: "+380504895488",
    },
    {
      id: 6,
      firstName: "john",
      lastName: "doe",
      number: "+380123456789",
    },
    {
      id: 7,
      firstName: "robert",
      lastName: "person",
      number: "+380985461254",
    },
  ];
  const [list, setList] = useState(phoneBook);
  let updateFirstName;
  let updateLastName;
  let updateNumber;
  function onDeleteHandler(id) {
    setList(list.filter((contact) => contact.id !== id));
  }
  const onChangeFirstNameHandler = ({ target }) => {
    updateFirstName = target.value.toLowerCase();
  };
  const onChangeLastNameHandler = ({ target }) => {
    updateLastName = target.value.toLowerCase();
  };
  const onChangeNumberHandler = ({ target }) => {
    updateNumber = target.value.toLowerCase();
  };
  const onSubmitHandler = (event, id) => {
    event.preventDefault();
    setList(
      list.map((contact) =>
        contact.id === id
          ? {
              ...contact,
              firstName: updateFirstName,
              lastName: updateLastName,
              number: updateNumber,
            }
          : contact
      )
    );
  };

  const [titleFilter, setTitleFilter] = useState("");

  const filterListByTitle = (list) =>
    list.filter(
      (contact) =>
        contact.firstName.includes(titleFilter) ||
        contact.lastName.includes(titleFilter) ||
        contact.number.includes(titleFilter)
    );

  return (
    <div className="container">
      <div className="header">
        <div className="header__name-block">
          <h1 className="header__title">Contacts Book</h1>
          <p className="header__name">made by David</p>
        </div>
        <a
          href="https://github.com/David-Mamiev"
          target="_blank"
          className="header__link"
        >
          My GitHub Account
        </a>
      </div>
      <Search
        onChangeSearch={({ target }) =>
          setTitleFilter(target.value.toLowerCase())
        }
      />
      <ul className="phone-book">
        {filterListByTitle(list).map((contact) => (
          <ContactItem
            key={contact.id}
            item={contact}
            onDelete={onDeleteHandler}
            onChangeFirstName={onChangeFirstNameHandler}
            onChangeLastName={onChangeLastNameHandler}
            onChangeNumber={onChangeNumberHandler}
            onSubmit={onSubmitHandler}
          />
        ))}
      </ul>
    </div>
  );
}
