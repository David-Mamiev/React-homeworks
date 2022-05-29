import { useEffect, useLayoutEffect, useState } from 'react';
import './App.scss';
import { Constans } from './ConstantsModule/Constans';
import './ToDoModule/ToDo';
import { ToDo } from './ToDoModule/ToDo';

function App() {
  const [list, setList] = useState([{id: 1, title: "REACT", completed: false}]);
  useLayoutEffect(() => {
    
  }, [])

  return (
    <>
        {/* <ToDo /> */}
        {/* <Constans title="HELLO BITCH"/> */}
        <div>
          <ul>
            {list.map((listItem) => <li key={listItem.id}>{listItem.title}</li>)}
          </ul>
        </div>
    </>
  );
}

export default App;
