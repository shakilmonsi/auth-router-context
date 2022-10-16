import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    displayName: "asssssssssssssssssssssssss",
  });
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   google add ..............
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  // why are we doing this ?
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("auth state changed", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //   const user = { displayName: "Asmnnnnnnnnnnnnnnnnnnnnnnnkash" };
  const authInfo = { user, createUser, signIn, logOut, signInWithGoogle };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
