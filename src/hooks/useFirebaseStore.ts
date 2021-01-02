import { useState, useEffect } from "react";
import firebase from "../firebase/index";

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
}

const useFirestore = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        console.log("Snapshot changed");
        const data: User[] = snapshot.docs.map((doc) => {
          const { firstName, lastName } = doc.data();
          return {
            id: doc.id,
            firstName,
            lastName,
          } as User;
        });

        setUsers(data);
      });
  }, []);

  const addUser = (user: User) => {
    firebase.firestore().collection("users").add(user);
  };

  return { users, addUser };
};

export default useFirestore;
