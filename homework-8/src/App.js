import './App.css';
import { Shapes } from "./components/Shapes/Shapes";
import { Fuck } from "./components/IDontK";
import { List } from "./components/List";

function App() {
  return (
    <div className="App">
      <div className='app-block'>
        <Shapes />
        <Fuck />
        <List />
      </div>
    </div>
  );
}

export default App;
