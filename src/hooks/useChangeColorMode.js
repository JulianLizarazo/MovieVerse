import { useEffect, useState } from "react";



export const useChangeColorMode = () => {
    const [theme, setTheme] = useState('dark');

    const changeThemeMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        
    }

    useEffect(() => {
        changeThemeMode();
    }, []);

    return{
        theme,
        changeThemeMode,
    }
}