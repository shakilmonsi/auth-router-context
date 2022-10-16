import React, { useContext } from "react";
import { AuthContext } from "./UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log("context", user);
  return (
    <div>
      <h2>home</h2>
      {user?.email && <span>User welcome,{user.email}</span>}
    </div>
  );
};

export default Home;
