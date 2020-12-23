import React, { createContext, useEffect, useState } from "react";
import LocalStorageService from "../services/LocalStorageService";
export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [role, setRole] = useState("Public");

  useEffect(() => {
    if (LocalStorageService.getToken()) {
      (function () {
        setRole("USER");
      })();
    } else {
      return;
    }
    return;
  }, []);

  function retrieveUserInfo() {
    if (LocalStorageService.getToken()) {
      (function () {
        setRole("USER");
      })();
    } else {
      return;
    }
    return;
  }

  return (
    <UserContext.Provider
      value={{
        role,
        setRole,
        retrieveUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
