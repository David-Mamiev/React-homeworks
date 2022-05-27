import { Search } from "./components/Search";
import { useState } from "react";
import ContactItem from "./components/ContactItem";

export default function Contacts() {
  const phoneBook = [
    { id: 1, name: "Andres Garcia", number: "+ 38 (012) 345 67 89" },
    { id: 2, name: "Anna Delvey", number: "+ 38 (012) 345 67 89"},
    { id: 3, name: "Anna Sorokin", number: "+ 38 (012) 345 67 89" },
    { id: 4, name: "Bob Garisson", number: "+ 38 (012) 345 67 89" },
    { id: 5, name: "Jane Doe", number: "+ 38 (012) 345 67 89" },
    { id: 6, name: "John Doe", number: "+ 38 (012) 345 67 89" },
    { id: 7, name: "Robert Person", number: "+ 38 (012) 345 67 89" },
  ];
  const [list, setList] = useState(phoneBook);

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
      <Search />
      <ul className="phone-book">
        { list.map((contact) => 
          <ContactItem key={contact.id} item={contact}/>
        ) }
      </ul>
    </div>
  );
}
