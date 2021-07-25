import { NavLink } from 'react-router-dom'

const Header = ()=>{
    return (
        <div className="ap-header">
            <h3 className="ap-nav-left">AP Technical Quiz</h3>
            <ul className="ap-nav-right">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/01-css-test">01 CSS - Test</NavLink></li>
                <li><NavLink to="/02-venue-booking-system-javascript-test">02 - Venue Booking System (Javascript Test)</NavLink></li>
                <li><NavLink to="/bookings/today?roomId=A101">03 - Venue Booking System (Front-end Test) </NavLink></li>
            </ul>
        </div>
    )
}

export default Header;