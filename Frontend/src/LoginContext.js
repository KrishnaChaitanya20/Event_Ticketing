import React, { createContext, useContext, useState } from 'react';


const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [user,setUser]=useState({});
  const [isOrganizer,setIsOrganizer]=useState(false);
  return (
    <LoginContext.Provider value={{user,setUser,isOrganizer,setIsOrganizer}}>
      {children}
    </LoginContext.Provider>
  );
};