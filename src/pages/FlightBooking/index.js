import React, { useContext, useState } from 'react';
import { TripDetailContext } from '../../context/TripProvider';
import { durationTrip, formatDateToTime, formatDate } from '../../helpers/timerFormatter'
import { useNavigate } from 'react-router-dom';

const FlightBooking = () => {

    const navigate = useNavigate()

    const { tripSelected, setTripSelected } = useContext(TripDetailContext);

    const [itineraries] = useState(tripSelected.itineraries);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const handleBooking = (itinerary) => {
        if (!name || !email || !date) {
            setError('Все поля обязательны для заполнения');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Пожалуйста, введите действующий адрес электронной почты');
            return;
        }

        console.log('Бронирование выполнено для:', {
            itinerary,
            name,
            email,
            date,
        });

        setError('');
        alert('Рейс успешно забронирован!');
    };

    return (
        <div className='flight-booking'>
            <h1>Забронируйте рейс</h1>
            <form className='flight-booking-form' onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        placeholder='Ваше имя'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder='youremail@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Дата:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button
                    className='form-btn'
                    type="submit"
                    onClick={() => handleBooking(itineraries[0])}
                >
                    Забронировать
                </button>
            </form>

            {itineraries.map((itinerary, index) => (
                <div key={index} className='itinerary'>
                    <h3>Маршрут {index + 1} (Продолжительность: {durationTrip(itinerary.duration)})</h3>
                    {itinerary.segments.map((segment, segIndex) => (
                        <div key={segIndex} className='itinerary-item'>
                            <p>
                                Отправление: {segment.departure.iataCode}, Терминал: {segment.departure.terminal} -{' '}
                                {formatDate(segment.departure.at)}
                            </p>
                            <p>
                                Прибытие: {segment.arrival.iataCode}, Терминал: {segment.arrival.terminal} -{' '}
                                {formatDate(segment.arrival.at)}
                            </p>
                            <p>
                                Авиакомпания: {segment.carrierCode}, Номер рейса: {segment.number}
                            </p>
                            <p>
                                Продолжительность сегмента: {segment.duration}, Остановки: {segment.numberOfStops}
                            </p>
                            <p>Самолет: {segment.aircraft.code}</p>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={()=>navigate('/trip-detail')} className='back-btn'>Назад</button>
        </div>
    );
};

export default FlightBooking;
