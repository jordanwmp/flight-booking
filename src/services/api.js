import React, { useState, useEffect } from 'react';

import axios from 'axios';

const API_DATA = {
    baseURL: 'https://test.api.amadeus.com/', //'https://api.amadeus.com/v1/',
    API_KEY: 'fNMq0F7TFjIsc4T1Ac4hyTmILhJG4V0G',
    SECRET: 'AWKy5TH5BQTMatYh'
};

const api = axios.create({
    baseURL: API_DATA.baseURL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

//GET /v1/flight-status?flightNumber={flight_id}&date={date}

const HookAPI = () => {

    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false) 


    const getToken = async () => {
        try {
            const response = await api.post('v1/security/oauth2/token', {
                client_id: API_DATA.API_KEY,
                client_secret: API_DATA.SECRET,
                grant_type: 'client_credentials'
            });
            if (response.status === 200) {
                const newToken = `${response.data.token_type} ${response.data.access_token}`;
                setToken(newToken); 
                
            } else {
                console.log('Erro ao obter o token');
            }
        } catch (error) {
            console.error('Erro ao buscar token:', error);
        }
    };

    const getSearch = async (
        origin = 'London',
        destination = 'Paris',
        depature = new Date(Date.now() + 86400000).toISOString().split('T')[0],
        returnDate = ''
    ) => {
        setLoading(true)
        
        const originCode = await getCityCode(origin);
        const destinationCode = await getCityCode(destination);

        if (!originCode || !destinationCode) {
            setLoading(false)
            setErrorMessage(true)
            return
        }

        const params = {
            originLocationCode: originCode,
            destinationLocationCode: destinationCode,
            departureDate: depature,
            // returnDate,
            adults: 1,
            currencyCode: 'RUB'
        }

        if (returnDate) params['returnDate'] = returnDate

        const response = await api.get('v2/shopping/flight-offers', {
            params: params,
            headers: {
                Authorization: token
            }
        })

        return response

    }

    const getCityCode = async (cityName) => {
        const response = await api.get('v1/reference-data/locations', {
            params: { keyword: cityName, subType: 'AIRPORT,CITY' },
            headers: { Authorization: token }
        });
        
        return response.data.data[0].iataCode;
    };
    
    const getFlight = async (flight_id, date) =>{
        const response = await api.get('v1/flight-status', {
            params: {
                flightNumber: flight_id,
                date: date
            },
            headers: {
                Authorization: token
            }
        })

        return response
    }

    return {
        getToken,
        getSearch,
        getCityCode,
        token,
        loading,
        setLoading,
        errorMessage,
        setErrorMessage,
        getFlight
    }

}

export default HookAPI;