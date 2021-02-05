import React, { useState, useCallback, useEffect } from "react";
import { getUser, loginUser } from "../../api/userApi";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getCurrentUser = useCallback(async () => {
    const userData = await getUser();

    if (userData && !userData.error) {
      setUser(userData.data.user);
    }
  }, []);

  const logUserIn = async (userDetails) => {
    const user = await loginUser(userDetails);
    setUser(user.data);
    return user;
  };

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser, getCurrentUser, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
