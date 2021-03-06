import { Search } from "./components/Search";
import { useState } from "react";
import ListContacts from "./components/ListContacts";
import EditContact from "./components/EditContact";
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
  // REDUCER
  function reducer(state, action){
    switch(action) {
      case "delete":
        return state;
        default:
          return state;
    }
  }

  //WT
  const [list, setList] = useState(phoneBook);
  // const [updateFirstName, setUpdateFirstName] = useState();
  // const [updateLastName, setUpdateLastName] = useState();
  // const [updateNumber, setUpdateNumber] = useState();

  // let updateFirstName = "";
  // let updateLastName = "";
  // let updateNumber = "";
  // function cleanInputValue (){
  //   updateFirstName = "";
  //   updateLastName = "";
  //   updateNumber = "";
  // };
  function onDeleteHandler(id) {
    setList(list.filter((contact) => contact.id !== id));
  };
  // СТАРІЙ КОДвd
  // const onChangeFirstNameHandler = ({ target }) => {
  //   // setUpdateFirstName(target.value.toLowerCase());
  //   updateFirstName = target.value.toLowerCase();
  // };
  // const onChangeLastNameHandler = ({ target }) => {
  //   // setUpdateLastName(target.value.toLowerCase());
  //   updateLastName = target.value.toLowerCase();
  // };
  // const onChangeNumberHandler = ({ target }) => {
  //   // setUpdateNumber(target.value.toLowerCase());
  //   updateNumber = target.value.toLowerCase();
  // };
  // const onSubmitHandler = (event, id) => {
  //   event.preventDefault();
  //   setList(
  //     list.map((contact) =>
  //       contact.id === id
  //         ? {
  //           ...contact,
  //           firstName: updateFirstName ? updateFirstName : (list.filter((contact) => contact.id === id))[0].firstName,
  //           lastName: updateLastName ? updateLastName : (list.filter((contact) => contact.id === id))[0].lastName,
  //           number: updateNumber ? updateNumber : (list.filter((contact) => contact.id === id))[0].number,
  //         }
  //         : contact
  //     )
  //   );
  //   cleanInputValue();
    // setUpdateFirstName("");
    // setUpdateLastName("");
    // setUpdateNumber("");
  // };
  function onSaveHandler(editContact){
    setList(
          list.map((contact) =>
            contact.id === editContact.id
              ? editContact
              : contact
          )
        );
  };

  const [titleFilter, setTitleFilter] = useState("");

  const filterListByTitle = (list) =>
    {list.filter(
      (contact) =>
        contact.firstName.includes(titleFilter) ||
        contact.lastName.includes(titleFilter) ||
        contact.number.includes(titleFilter)
    );
      }
  // const [modalActive, setModalActive] = useState(false);
  // const [getEditItem, setGetEditItem] = useState(list[0]);
  // function onClickEditButton(item){
  //   setGetEditItem(item);
  // };
  
  return (
    <div className="container">
      <Search
        onChangeSearch={({ target }) =>
          setTitleFilter(target.value.toLowerCase())
        }
      />
      <EditContact
        // state={list}
        listp={list}
        active={modalActive}
        setActive={setModalActive}
        // onChangeFirstName={onChangeFirstNameHandler}
        // onChangeLastName={onChangeLastNameHandler}
        // onChangeNumber={onChangeNumberHandler}
        // onSubmit={onSubmitHandler}
        getEditItem={getEditItem}
        onSaveEditContact={onSaveHandler}
      />
      <ListContacts
        filterList={filterListByTitle}
        state={list}
        onDelete={onDeleteHandler}
        // onChangeFirstName={onChangeFirstNameHandler}
        // onChangeLastName={onChangeLastNameHandler}
        // onChangeNumber={onChangeNumberHandler}
        // onSubmit={onSubmitHandler}
        modalActive={setModalActive}
        onClickEditButton={onClickEditButton}
      />
    </div>
  );
}
