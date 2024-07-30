import React, { createContext, useState, useEffect, ReactNode } from 'react'

export interface ThemeContextType {
    toggleDarkMode : () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children} : {children : ReactNode}) =>{
    const [darkMode, setDarkMode] = useState(false);

    useEffect( () => {
        darkMode ? 
        document.documentElement.classList.add('dark') 
        : document.documentElement.classList.remove('dark');
    },[darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    
    return(
        <ThemeContext.Provider value={{toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};
