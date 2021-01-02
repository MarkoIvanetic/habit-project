import React, { useMemo, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import useFirestore from "./hooks/useFirebaseStore";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { users, addUser } = useFirestore();

  useMemo(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="App">
      {users?.map((user) => {
        return <p key={user.id}>{`${user.firstName} ${user.lastName}`}</p>;
      })}

      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addUser({ firstName, lastName });
        }}
      >
        Add user
      </button>
    </div>
  );
}

export default App;
