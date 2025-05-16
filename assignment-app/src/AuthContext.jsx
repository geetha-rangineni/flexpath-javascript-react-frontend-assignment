// import React from 'react';
// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
// src/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const validUsers = [
  { username: 'admin', password: 'admin123' },
  { username: 'demo', password: 'demo123' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const found = validUsers.find(
      u => u.username === username && u.password === password
    );
    if (found) {
      setUser({ username: found.username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
