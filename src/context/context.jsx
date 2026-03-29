import { createContext, useState, useEffect } from "react";
import { dummyPackages, dummyCountries } from "@/assets/dummy";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [packages, setPackages] = useState([]);
        const [countries, setCountries] = useState([]);

    useEffect(() => {
        setPackages(dummyPackages);
        setCountries(dummyCountries);
    }, [])

    const value = {
        packages,
        countries,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}