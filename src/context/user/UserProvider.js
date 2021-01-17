import React, { useState, useCallback, useEffect } from "react";
import { getUser } from "../../api/userApi";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const getCurrentUser = useCallback(async () => {
    const userData = await getUser();

    console.log(userData);
    if (!userData.error) {
      setUser(userData.data.user);
    }
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser, getCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
