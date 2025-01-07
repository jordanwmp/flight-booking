/**
 * THE AMADEUR API DOES NOT PROVIDER A WAY TO
 * GET A SPECIFIC TRIP, BECAUSE THIS THIS FILE IS
 * USED TO SEND A FLIGHT SELECT BY THE USER
 * TO THE DETAIL TRIP PAGE
 */

import { createContext, useState } from "react";

const TripDetailContext = createContext()

const TripDetailProvidder = ({ children }) => {
    const [tripSelected, setTripSelected] = useState(null)
    return (
        <TripDetailContext.Provider value={{tripSelected, setTripSelected}}>
            {children}
        </TripDetailContext.Provider>
    )
}

export {
    TripDetailContext,
    TripDetailProvidder
}