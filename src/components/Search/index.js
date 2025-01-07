import { useContext, useState } from "react";
import { ApiContext } from "../../context/ApiContext";

const Search = () => {

    const [formError, setFormError] = useState(false)

    const {
        setTripList,
        getSearch,
        setOrigin,
        setDestination,
        loading,
        setLoading,
        errorMessage,
        setErrorMessage
    } = useContext(ApiContext)

    const [formData, setFormData] = useState({ from: '', to: '', departureDate: '', returnDate: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(false)
        const { from, to, departureDate, returnDate } = formData

        if (!from || !to || !departureDate) {
            setFormError(true)
            return
        }

        setLoading(true)
        setErrorMessage(false)

        setOrigin(from)
        setDestination(to)

        await getSearch(from, to, departureDate)
            .then((response) => {
        
                if (response.status === 200 && response.data.data.length !== 0) {
                    setTripList(response.data.data)
                } else {
                    console.log('No data found')
                }
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                setErrorMessage(true)
                console.log('error on get data ', err)
            })
    };


    return (
        <div className="search">
            <h1>Поиск по самым дешевым поездкам</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="from" placeholder="Откуда" value={formData.from} onChange={handleChange} />
                <input type="text" name="to" placeholder="Куда" value={formData.to} onChange={handleChange} />
                <input type="date" name="departureDate" placeholder="Дата отправления" value={formData.departureDate} onChange={handleChange} />
                <input type="date" name="returnDate" placeholder="Дата возвращения" value={formData.returnDate} onChange={handleChange} />
                <button type="submit">Поиск</button>
            </form>
            {formError && <div className="error">Место отправления, место назначения и дата отправления обязательны.</div>}
        </div>
    );
}

export default Search;
