import { createContext, useContext, useState } from "react";

export const contactContext = createContext();

export function useContactContext(){
    return useContext(contactContext);
}

export function ContactProvider({defaultContact = '', children}){
    const [contact, setContact] = useState(defaultContact);

    function specialLogicForContact(){
        //setContact
    }
    const contextValue = {myValue=124, oke="2141"}
    return (
        <contactContext.Provider value={contextValue}>
            {children}
        </contactContext.Provider>
    );
}