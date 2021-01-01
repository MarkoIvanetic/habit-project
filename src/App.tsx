import React, { useContext } from "react";
import { FirebaseContext } from "./firebase/index";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  // console.log(firebase);
  const firebaseContext = useContext(FirebaseContext);
  console.log(firebaseContext);

  return <h1>test</h1>;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       {/* <TodoList></TodoList> */}
  //     </header>
  //   </div>
  // );
}

export default App;
