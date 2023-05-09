<<<<<<< Updated upstream
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [tokenGlobal, setTokenGlobal] = useState("");

=======
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { userGetSubmissiveUsers, userCreate } from "../api/routesAPI";
import { userGetUsersMe } from "../api/routesAPI";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([{}]);
  const [userList, setUserList] = useState([{}]);
  const [usersGlobal, setUsersGlobal] = useState([{}]);
  const [viewProfile, setViewProfile] = useState(false);
  const [userTarget, setUserTarget] = useState({});
  const [modalPlanner, setModalPlanner] = useState(false);
  const [modalSubject, setModalSubject] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadUserMe();
      loadUsers();
    }
  }, []);

  const loadUserMe = async () => {
    var user;
    try {
      const response = await axios.get(userGetUsersMe, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      user = response;
    } catch (error) {
      console.error(error);
    }
    setUser(user.data);
  };

  const loadUserList = async () => {
    try {
      const response = await axios.get(userGetSubmissiveUsers, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUserList(response.data.list);
      console.log(response)
    } catch (error) {
      console.error(error);
      // to do modal error
    }
    
  };
>>>>>>> Stashed changes

  const loadUsers = async () => {
    console.log("Aquiiiiii")
    try {
      const response = await axios.get(userCreate, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsersGlobal(response.data.list);
      console.log(response)
      
    } catch (error) {
      console.error(error);
      // to do modal error
    }
    
  };


  return (
<<<<<<< Updated upstream
    <UserContext.Provider value={{ tokenGlobal, setTokenGlobal }}>
=======
    <UserContext.Provider
      value={{
        user,
        loadUserMe,
        userList,
        loadUserList,
        viewProfile,
        setViewProfile,
        userTarget,
        setUserTarget,
        modalPlanner,
        setModalPlanner,
        modalSubject,
        setModalSubject,
        modalPassword,
        setModalPassword,
        loadUsers,
        usersGlobal, 
        setUsersGlobal
      }}
    >
>>>>>>> Stashed changes
      {children}
    </UserContext.Provider>
  );
};
