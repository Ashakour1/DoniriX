import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#005B96",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "You have been successfully logged out.",
          icon: "success",
        });
        localStorage.removeItem("userData");
        localStorage.removeItem("expiresIn");
        setUser(null);
      } else {
        return;
      }
    });
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
