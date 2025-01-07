import React, { createContext, useState, useEffect } from 'react'
import HookAPI from '../services/api'

const ApiContext = createContext()

const ApiProvider = ({ children }) => {

    const [tripList, setTripList] = useState(null)
    const [origin, setOrigin] = useState(null)
    const [destination, setDestination] = useState(null)

    const {
        token,
        getToken, 
        getSearch, 
        getCityCode,
        loading, 
        setLoading,
        errorMessage, 
        setErrorMessage,
        getFlight
    } = HookAPI()

    const loadTrips = async () => {
        
        await getSearch()
            .then((response) => {
                if (response.status === 200) {
                    
                    setLoading(false)
                    setTripList(response.data.data)
                } else {
                    setLoading(false)
                    setErrorMessage(true)
                }
            })
            .catch((err) => {
                console.log('error on get data ', err)
            })
    }

    useEffect(() => {

        const fetchData = async () => { 
            await getToken(); 
            // await loadTrips(); 
        }; 
        fetchData();

    }, []);

    useEffect(()=>{
        const fetchData = async () => { 
            // await getToken(); 
            await loadTrips(); 
        }; 
        fetchData();
    }, [token])

    return (
        <ApiContext.Provider value={{
            tripList,
            setTripList,
            origin,
            setOrigin,
            destination,
            setDestination,
            getSearch,
            getCityCode,
            loading,
            setLoading,
            errorMessage,
            setErrorMessage,
            getFlight
        }}>
            {children}
        </ApiContext.Provider>
    )
}

export {
    ApiContext,
    ApiProvider
}