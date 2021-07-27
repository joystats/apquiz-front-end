import Layout from '../Layout'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

//https://raw.githubusercontent.com/forviz/developer-test/master/02-venue-booking/demo-booking-data.json
import dataBooking from '../../data/demo-booking-data.json'

const Bookings = ()=>{
    const [ rooms, setRooms ] = useState([])

    const useQuery= () => {
        return new URLSearchParams(useLocation().search);
    }
    const roomId = useQuery().get('roomId')

    const getBookingsForWeek = (roomId, weekNo) => {
        return dataBooking.filter((item)=>{
            return roomId === item.roomId && (weekNo === moment(item.startTime).week() || 
            weekNo === moment(item.endTime).week())
        })
    } 

    const checkBookingForWeek = (dateCheck)=>{
        console.log(moment(dateCheck).week())
        const bookedWeek = getBookingsForWeek(roomId, moment(dateCheck).week())
        setRooms(bookedWeek)
    }

    const listRooms = ()=>{
        console.log(rooms)
        if(rooms.length === 0){
            return "ไม่มีรายการจอง"
        }else{
            return rooms.map((item, index)=>{
                return <li key={index}>{item.roomId} = {item.startTime} - {item.endTime}</li>
            })
        }
    }

    return (
        <Layout>
            <h4>03 - Venue Booking System (Front-end Test) </h4>
            <br/>
            <h4>เช็ครายการจอง ห้อง { roomId }</h4>
            <table>
                <thead>
                    <tr>
                        <th>Week</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        Week 36	September 2, 2019	September 8, 2019
                        </td>
                        <td>
                            <button onClick={()=>checkBookingForWeek('2021-09-02')}>check</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Week 37	September 9, 2019	September 15, 2019
                        </td>
                        <td>
                            <button onClick={()=>checkBookingForWeek('2021-09-09')}>check</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Week 38	September 16, 2019	September 22, 2019
                        </td>
                        <td>
                            <button onClick={()=>checkBookingForWeek('2021-09-16')}>check</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Week 39	September 23, 2019	September 29, 2019
                        </td>
                        <td>
                            <button onClick={()=>checkBookingForWeek('2021-09-23')}>check</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Week 40	September 30, 2019	October 6, 2019
                        </td>
                        <td>
                            <button onClick={()=>checkBookingForWeek('2021-09-30')}>check</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Week 41	October 7, 2019	October 13, 2019
                        </td>
                        <td>
                            <button onClick={()=>checkBookingForWeek('2021-10-07')}>check</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <h4>สถานะการจอง</h4>
            <ol>
                {listRooms()}
            </ol>
        </Layout>
    )
}

export default Bookings;