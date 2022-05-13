import './App.scss';
import React from "react";
import CounterComponent from "./components/CounterComponent";
import { StateComponent } from './components/StateComponent';

function App() {
  function notifyFn (msg) {
    console.log(`msg in App.js -- ${msg}`)
  }
  return (
    // <div className='App'>
    //   <CounterComponent 
    //     name={"THIS PROPS NAME"}
    //     notify={notifyFn}
    //     />
    // </div>
    <div>
      <StateComponent 
        name={"YO THIS SHIT"} 
        notify={notifyFn}
      />
    </div>
  );
}

export default App;
