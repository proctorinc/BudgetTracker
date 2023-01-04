import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const user = null;
  // const user = {
  //   id: "63812fc0b5fe500754c113a9",
  //   _id: "63812fc0b5fe500754c113a9",
  //   email: "proctormatt0@gmail.com",
  //   jwtToken:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzODEyZmMwYjVmZTUwMDc1NGMxMTNhOSIsImVtYWlsIjoicHJvY3Rvcm1hdHQwQGdtYWlsLmNvbSJ9LCJpYXQiOjE2Njk1ODc1MDR9.5XpPK0HIW7s8O3ETWJ23pjhCfneFOniRHCh4bINOnsg",
  // };

  const userLogin = ({ username, password }) => {};

  const userLogout = () => {};

  const contextData = {
    isLoading,
    userLogin,
    userLogout,
    user,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
