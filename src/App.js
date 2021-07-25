import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import CssTest from './components/pages/CssTest'
import VenueBookingJavascript from './components/pages/VenueBookingJavascript'
import Bookings from './components/pages/Bookings'
import NotFound from './components/pages/NotFound'

import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/01-css-test" exact component={CssTest}/>
        <Route path="/02-venue-booking-system-javascript-test" exact component={VenueBookingJavascript}/>
        <Route path="/bookings/today" component={Bookings}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
