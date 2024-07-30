import { useContext } from "react"
import { ThemeContext, ThemeContextType } from "./ThemeContext"

export default function useTheme(){
    const context = useContext(ThemeContext);
    if(context === undefined)
        throw new Error('Component should be wrapped within ThemeProvider');
    
    return context;
};