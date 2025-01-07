import React, { useContext } from 'react'
import { useNavigate, } from 'react-router-dom'
import { TripDetailContext } from '../../context/TripProvider'
import { ApiContext } from '../../context/ApiContext'
import { durationTrip, formatDateToTime, formatDate } from '../../helpers/timerFormatter'

const TripDetail = () => {

    const navigate = useNavigate()
    const { tripSelected, setTripSelected } = useContext(TripDetailContext)
    const { origin, destination } = useContext(ApiContext)

    return (
        <div className='card-trip-detail'>
            <div className='card-trip-content'>
                <div className='origin-destination'>
                    {origin && destination && <p>Рейс из {origin} в {destination}</p>}
                    {(!origin || !destination) && <p>Рейс выбран</p>}
                </div>
                <div className='tickets'>
                    <p>Дата последнего оформления билета: {formatDate(tripSelected.lastTicketingDateTime)}</p>
                </div>
                <div className='price'>
                    <p>Цена: {tripSelected.price.currency} {tripSelected.price.total}</p>
                </div>
                <div className='flight-duration'>
                    <p>Продолжительность рейса: {durationTrip(tripSelected.itineraries[0].duration)}</p>
                </div>
                <div className='itineraries'>
                    <p>Маршруты:</p>
                    {
                        tripSelected.itineraries.map((itinerary, index) => (
                            itinerary.segments.map((segment, segmentIndex) => (
                                <div className="trip-details" key={`${index}-${segmentIndex}`}>
                                    <p>От: {segment.departure.iataCode} До {segment.arrival.iataCode}. Время: {formatDateToTime(segment.departure.at)} - {formatDateToTime(segment.arrival.at)}</p>
                                    <p>Продолжительность: {durationTrip(itinerary.duration)}.  {itinerary.segments.length > 1 ? `${itinerary.segments.length - 1} пересадок` : 'Прямой рейс'}</p>
                                </div>
                            ))
                        ))
                    }

                </div>
            </div>
            <div className='btn-container'>
                <button onClick={() => navigate('/')} className='back-button'>Назад</button>
                <button onClick={() => navigate('/flight-booking')} className='buy-button'>Купить</button>
            </div>
        </div>
    )
}

export default TripDetail
