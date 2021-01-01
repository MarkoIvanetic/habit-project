import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
// import TodoList from "./TodoList";

function App() {
  console.log(firebase);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <TodoList></TodoList> */}
      </header>
    </div>
  );
}

export default App;
