import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import './App.scss';
import ToDoList from "./pages/ToDoModule/components/ToDoList"
import Contacts from "./pages/ContactsModule/Contacts"
import NotFound from "./pages/NotFound";


function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1 className="app-title">Home Page</h1>
          <nav className="apps">
            <Link to="todos" className="main-app">
              <h6 className="main-app__title">To Do List</h6>
              <p className="main-app__description">
                Хотите научиться правильно распределять своё время? Это приложение для вас! Создайте список
                дел и выполняйте всё поочерёдно. Удобный и простой интерфейс с историей всех поставленых задач!
              </p>
            </Link>
            <Link to="contacts" className="main-app">
              <h6 className="main-app__title">Contacts Book</h6>
              <p className="main-app__description">
                Телефонная книга всех ваших контактов поможет вам быстро найти нужный номер.
              </p>
            </Link>
          </nav>
        </Route>
        <Route path="/todos" component={ToDoList} />
        <Route path="/contacts" component={Contacts}>
          <Route path=":id" component={DetailedCard}></Route>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterComponent;
