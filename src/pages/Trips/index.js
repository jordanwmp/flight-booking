import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import TripCard from "../../components/TripCard";
import Search from "../../components/Search";

import { ApiContext } from "../../context/ApiContext";
import { TripDetailContext } from "../../context/TripProvider";
import Filter from "../../components/Filter";

const Trips = () => {

  const navigate = useNavigate()

  const {
    tripList,
    setTripList,
    origin,
    destination,
    loading,
    setLoading,
    errorMessage,
    setErrorMessage
  } = useContext(ApiContext)

  const { tripSelected, setTripSelected } = useContext(TripDetailContext)

  const handleTripDetail = (trip) => {
    setTripSelected(trip)
    navigate(`/trip-detail`)
  }

  const handleFilterList = (list) => {
    setTripList(list)
  }

  return (
    <>
      <Search />
      <Filter flights={tripList} setFlights={handleFilterList} />
      
      <div className="trip-list">

        {origin && destination && <h1>Дешевые рейсы из {origin} в {destination}</h1>}
        {!origin && !destination && <h1>Дешевые рейсы</h1>}

        {loading && <div className="loading">Загрузка данных. Пожалуйста, подождите....</div>}
        {errorMessage && <div className="errorMessage">Данные не найдены. Попробуйте еще раз.</div>}

        {!loading && !errorMessage && <div className="trip-list-cards">
          {tripList && tripList.map((trip, index) => (
            <TripCard key={index} trip={trip} handleNavigate={() => handleTripDetail(trip)} />
          ))}
        </div>}

      </div>
    </>
  );
}

export default Trips;
