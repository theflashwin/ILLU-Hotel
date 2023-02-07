import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import Loader from "../components/Loader";

function Bookingscreen({match}) {

    const {roomid} = useParams();

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [room, setRoom] = useState()
 
    useEffect(() => { 

        console.log(loading)

        async function fetch() {
            try {
                setLoading(true)
                console.log(roomid)
                const data = (await axios.post(`/api/rooms/getroombyid?roomid=${roomid}`)).data
                setRoom(data)
                setLoading(false) 
            } catch(error) {
                console.log(error)
                setLoading(false)
                setError(true)
            }
        }

        if(loading==true) {
            fetch();
        }


    })
 
    return (
        <div className="m-5">
            
        {loading ? (<h1><Loader/></h1>) : error ? (<h1>Error</h1>) : (<div>

            <div className="row justify-content-center mt-5 box-shadow">
                <div className="col-md-5">
                    <h1>{room.name}</h1>
                    <img src={room.imageurls[0]} className="bigimg"/>
                </div>

                <div className="col-md-5">
                    <div style={{textAlign: 'right'}}>
                    <h1>Booking Details</h1>
                    <hr></hr>
                    <p><strong>Name: </strong> </p>
                    <p><strong>From: </strong> </p>
                    <p><strong>To: </strong> </p>
                    <p><strong>Max Count: </strong> </p>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <h1>Payment Info</h1>
                        <hr />
                        <p><strong>Total days: </strong> </p>
                        <p><strong>Cost per day: </strong> {room.costperday} </p>
                        <p><strong>Total Amount: </strong> </p>
                    </div>

                    <div style={{float: 'right'}}>
                        <button className="btn btn-primary">Pay Now</button>
                    </div>
                </div>

            </div>

        </div>)}

        </div>
    )
}

export default Bookingscreen