import React, { useState, useEffect } from 'react';

// Компонент, который получает список рейсов как prop
const Filter = ({ flights, setFlights }) => {

    const [showFilter, setShowFilter] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false);
    const [controlList, setControlList] = useState([]);
    const [scalesFilter, setScalesFilter] = useState(null);
    const [sortOption, setSortOption] = useState('');

    // Функция для конвертации продолжительности полета в минуты
    const convertDurationToMinutes = (duration) => {
        const match = duration.match(/PT(\d+H)?(\d+M)?/);
        const hours = match[1] ? parseInt(match[1].replace('H', '')) : 0;
        const minutes = match[2] ? parseInt(match[2].replace('M', '')) : 0;
        return hours * 60 + minutes;
    };

    // Функция для фильтрации по количеству остановок

    const filterByScale = (flights, scale) => {
        if (scale === null) return flights;
        return flights.filter(flight =>
            flight.itineraries[0].segments.length - 1 === Number(scale)
        );
    };

    // Функция для сортировки по цене и продолжительности

    const sortFlights = (flights, option) => {
        switch (option) {
            case 'priceAsc':
                return flights.slice().sort((a, b) => parseFloat(a.price.grandTotal) - parseFloat(b.price.grandTotal));
            case 'priceDesc':
                return flights.slice().sort((a, b) => parseFloat(b.price.grandTotal) - parseFloat(a.price.grandTotal));
            case 'durationAsc':
                return flights.slice().sort((a, b) =>
                    convertDurationToMinutes(a.itineraries[0].duration) - convertDurationToMinutes(b.itineraries[0].duration)
                );
            case 'durationDesc':
                return flights.slice().sort((a, b) =>
                    convertDurationToMinutes(b.itineraries[0].duration) - convertDurationToMinutes(a.itineraries[0].duration)
                );
            default:
                return flights;
        }
    };

    // Обновить отфильтрованный список по остановкам и отсортировать
    const updateFlights = (scale, option) => {
        let updatedFlights = filterByScale(controlList, scale);
        updatedFlights = sortFlights(updatedFlights, option);
        setFlights(updatedFlights);
    };

    // Обновить начальный контрольный список
    useEffect(() => {
        if (flights && flights.length > 0 && !isUpdated) {
            setControlList(flights);
            setIsUpdated(true);
        }
    }, [flights, isUpdated]);

    useEffect(() => {
        updateFlights(scalesFilter, sortOption);
    }, [scalesFilter, sortOption]);

    // Функция, вызываемая при изменении фильтра по количеству остановок
    const handleScaleChange = (value) => {
        setScalesFilter(value);
    };

    // Функция, вызываемая при изменении опции сортировки
    const handleSortChange = (value) => {
        setSortOption(value);
    };

    return (
        <div className='container-filter'>

            {showFilter && <button className='show-form' onClick={()=> setShowFilter(!showFilter)}>Скрыть фильтр</button>}
            {!showFilter && <button className='show-form'onClick={()=> setShowFilter(!showFilter)} >Показать фильтр</button>}

            {showFilter && <div className='form-filter'>

                <label>
                    Фильтр по количеству остановок:
                    <select onChange={(e) => handleScaleChange(e.target.value)}>
                        <option value="">Все</option>
                        <option value="0">Без остановок</option>
                        <option value="1">1 остановка</option>
                        <option value="2">2 или более остановок</option>
                    </select>
                </label>

                <label>
                    Сортировать по:
                    <select onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="">Никак</option>
                        <option value="priceAsc">Цена (дешевле)</option>
                        <option value="priceDesc">Цена (дороже)</option>
                        <option value="durationAsc">Продолжительность (меньше)</option>
                        <option value="durationDesc">Продолжительность (больше)</option>
                    </select>
                </label>

            </div>}

        </div>
    );
};

export default Filter;
