import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Trips from '../pages/Trips'
import TripDetail from "../pages/TripDetail" 
import FlightBooking from "../pages/FlightBooking"

const RoutesApp = () =>{
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={Trips}/>
                <Route path="/trip-detail" Component={TripDetail} />
                <Route path="/flight-booking" Component={FlightBooking} />
            </Routes>
        </Router>
    )
}

export default RoutesApp