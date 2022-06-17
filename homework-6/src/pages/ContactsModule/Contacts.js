import { Search } from "./components/Search";
import { useState } from "react";
import ListContacts from "./components/ListContacts";
import EditContact from "./components/EditContact";
import './style/style.scss';

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
export default function Contacts() {
  const [list, setList] = useState(phoneBook);

  const [titleFilter, setTitleFilter] = useState("");

  const filterListByTitle = (list) => {
    return list.filter(
      (contact) =>
        contact.firstName.includes(titleFilter) ||
        contact.lastName.includes(titleFilter) ||
        contact.number.includes(titleFilter)
    );
  }
  const [modalActive, setModalActive] = useState(false);
  const [getEditItem, setGetEditItem] = useState(list[0]);

  function onClickEditButton(item) {
    setGetEditItem(item);
  };

  function onDeleteHandler(id) {
    setList(list.filter((contact) => contact.id !== id));
  }

  return (
      <div className="container">
        <Search
          onChangeSearch={({ target }) =>
            setTitleFilter(target.value.toLowerCase())
          }
        />
        <EditContact
          state={list}
          active={modalActive}
          setActive={setModalActive}
          setContactList={setList}
          getEditItem={getEditItem}
        />
        <ListContacts
          filterList={filterListByTitle}
          state={list}
          onDelete={onDeleteHandler}
          modalActive={setModalActive}
          onClickEditButton={onClickEditButton}
        />
      </div>
  );
}
