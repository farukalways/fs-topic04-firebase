import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../context/context";
import { auth } from "./../firebase/firebase.init";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
      }
    });

    return () => {
      unsubscrib();
    };
  }, []);

  const authInfo = { userCreate, signInUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
