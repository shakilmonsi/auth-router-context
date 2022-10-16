import React, { createContext, useState } from "react";
import app from "../firebase.init";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    displayName: "asssssssssssssssssssssssss",
  });
  //   const user = { displayName: "Asmnnnnnnnnnnnnnnnnnnnnnnnkash" };
  const authInfo = { user: user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
