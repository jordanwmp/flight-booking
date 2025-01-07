import { durationTrip, formatDateToTime, formatDepatureReturnDate } from "../../helpers/timerFormatter";

const TripCard = ({ trip, handleNavigate }) => {
    return (
        <div className="trip-card">

            {trip.itineraries && trip.itineraries.map((itinerary, index) => (
                itinerary.segments.map((segment, segmentIndex) => (
                    <div className="trip-details" key={`${index}-${segmentIndex}`}>
                        <div className="trip-info">
                            <span className="time">{formatDateToTime(segment.departure.at)} - {formatDateToTime(segment.arrival.at)}</span>
                            <span className="location">{segment.departure.iataCode} - {segment.arrival.iataCode}</span>
                        </div>
                        <div className="trip-info">
                            <span className="time">{durationTrip(itinerary.duration)}</span>
                            <span className="location">{itinerary.segments.length > 1 ? `${itinerary.segments.length - 1} пересадок` : 'Прямой рейс'}</span>
                        </div>
                    </div>
                ))
            ))}

            <div className="flight-details">
                <div className="flight-summary">
                    <span className="flight-price">{trip.price.currency} {trip.price.base}</span>
                </div>
                <button className="see-offer" onClick={handleNavigate}>Детали</button>
            </div>
            <div className="trip-date">
                <span className="date-info">{formatDepatureReturnDate(trip.itineraries[0].segments[0].departure.at, trip.itineraries[0].duration)}</span>
            </div>
        </div>
    );

}

export default TripCard
