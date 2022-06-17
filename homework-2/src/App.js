import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.scss';
import { getAll } from './api/todo-service.api';

import { About } from './pages/About';
import { Contacts } from './pages/Contacts';

function App() {
  useEffect(() => {
    getAll().then((all) => console.log(all));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Home Page</h1>
      </div>
      <Routes>
        <Route path="/" component={Contacts} />
        <Route path="/" component={About} />
        {/** */}

      </Routes>
    </Router>
  );
}

export default App;

// const abortController = new AbortController();
// fetch("https://jsonplaceholder.typicode.com/users/", { method: "POST", signal: abortController })
//   .then((res) => res.json());
// abortController.abort();