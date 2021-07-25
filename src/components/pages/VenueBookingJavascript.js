import Layout from '../Layout'
import moment from 'moment'
import { useRef, useState } from 'react'

//https://raw.githubusercontent.com/forviz/developer-test/master/02-venue-booking/demo-booking-data.json
import dataBooking from '../../data/demo-booking-data.json'

const VenueBookingJavascript = ()=>{
    const roomRef = useRef()
    const startTimeRef = useRef()
    const endTimeRef = useRef()
    const [ checkResult, setCheckResult] = useState('')

    const checkAvailability = (roomId, startTime, endTime) => {
        const isAvailable = dataBooking.some((item)=>{
            /* use moment */
            return roomId === item.roomId && (moment(startTime).isBetween(item.startTime, item.endTime, undefined, '[]') ||
            moment(endTime).isBetween(item.startTime, item.endTime, undefined, '[]'))

            /* use pure javascript */
            /*var startTimeBooked = new Date(item.startTime)
            var endTimeBooked = new Date(item.endTime)
            var startTimeCheck = new Date(startTime)
            var endTimeCheck = new Date(endTime)

            return roomId === item.roomId && ((startTimeCheck >= startTimeBooked && startTimeCheck <= endTimeBooked) 
            || (endTimeCheck >= startTimeBooked && endTimeCheck <= endTimeBooked))*/
        })
        return !isAvailable
    }

    const getBookingsForWeek = (roomId, weekNo) => {
        return dataBooking.filter((item)=>{
            return roomId === item.roomId && (weekNo === moment(item.startTime).isoWeek() || 
            weekNo === moment(item.endTime).isoWeek())
        })
    } 
     
    const checkRoom = ()=>{
        const isAvailable = checkAvailability(roomRef.current.value, startTimeRef.current.value, endTimeRef.current.value)
        console.log(isAvailable)
        if(isAvailable){
            setCheckResult('สถานะห้องว่าง') 
        }else{
            setCheckResult('สถานะห้องไม่ว่าง')
        }
    }

    const checkBookingForWeek = (roomId, when)=>{
        let weekNo;
        if(when === 'this week'){
            weekNo = moment('2019-09-28').isoWeek()
        }else{
            weekNo = moment(moment('2019-09-28').add(1,'weeks').startOf('isoWeek')).isoWeek()
        }
        const bookedWeek = getBookingsForWeek(roomId, weekNo)
        console.log(bookedWeek)
    }
    
    return (
        <Layout>
            <h4>02 Venue Booking System - Javascript Test</h4>
           <div>
               <input className="input" type="text" ref={roomRef} defaultValue="A101" placeholder="Room"/><br/>
               <input className="input" type="text" ref={startTimeRef} defaultValue="2019-09-28 18:01:00" placeholder="Start date"/><br/>
               <input className="input" type="text" ref={endTimeRef} defaultValue="2019-09-28 18:31:00" placeholder="End date"/><br/>
               <button onClick={()=>checkRoom()}>เช็คห้องว่างหรือไม่?</button> <span className="result">{ checkResult }</span>
            </div>
            <br/>
            <div>
                <h3>ดูรายการจอง</h3>
                <button className="button" onClick={()=>checkBookingForWeek('A101', 'this week')}>A101, this week</button>
                <button className="button" onClick={()=>checkBookingForWeek('A101', 'next week')}>A101, next week</button>
                <br/>
                <button className="button" onClick={()=>checkBookingForWeek('A102', 'this week')}>A102, this week</button>
                <button className="button" onClick={()=>checkBookingForWeek('A102', 'next week')}>A102, next week</button>
            </div>
        </Layout>
    )
}

export default VenueBookingJavascript;