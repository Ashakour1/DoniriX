import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    if (confirm("Are you sure you want to") === true) {
      localStorage.removeItem("userData");
      localStorage.removeItem("expiresIn");
      setUser(null);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const expireTime = localStorage.getItem("expiresIn");

    if (storedUser && expireTime) {
      const currentTime = new Date().getTime();

      if (currentTime < parseInt(expireTime)) {
        setUser(JSON.parse(storedUser));
      } else {
        logOut();
      }
    }
  }, []);

  const login = (userData, expiresIn) => {
    const expireTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem("expiresIn", expireTime.toString());
    localStorage.setItem("userData", JSON.stringify(userData));

    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
