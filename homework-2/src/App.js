import './App.scss';
import { Constans } from './ConstantsModule/Constans';
import './ToDoModule/ToDo';
import { ToDo } from './ToDoModule/ToDo';

function App() {
  
  return (
    <>
        <ToDo />
        <Constans title="HELLO BITCH"/>
    </>
  );
}

export default App;
