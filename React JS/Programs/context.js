UserContext.js
--------------
import { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'Guest' });
    const setLoggedinUser = (name) => {
        setUser({ name })
    }
    return <UserContext.Provider value={{ user, setLoggedinUser }}>
        {children}
    </UserContext.Provider>
}

ThemeContext.js
---------------
import { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) => {
            return prev === 'light' ? 'dark' : 'light';
        })
    }
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}

-Wrap the component with Context Providers
	 <ThemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>

-Consume the data from Context (DashBoard.js)

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";
const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, setLoggedinUser } = useContext(UserContext);
  return <div style={{ padding: 20, background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <h2>Welcome, {user.name}</h2>
            <h2>Current Theme : {theme}</h2>
            <button onClick={() => setLoggedinUser("John Doe")}>Login as John Doe</button>
            <br /><br />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
};
export default Dashboard;
