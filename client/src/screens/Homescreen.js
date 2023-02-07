import React, { useState, useEffect } from 'react'
import axios from "axios";
import Room from '../components/Room';
import Loader from '../components/Loader';

function Homescreen() {

    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    useEffect(() => {
        async function fetch() {
            try {
                setLoading(true)
                const data = (await axios.get('/api/rooms/getallrooms')).data
                setRooms(data)
                setLoading(false)
            } catch (error) {
                setError(true)
                console.log(error)
                setLoading(false)
            }
        }

        fetch()

    }, [])

    return (
        <div className='container'>

            <div class="row justify-content-center mt-5">
                {loading ? (<h1><Loader/></h1>) : error ? (<h1>Oopsie</h1>) : (rooms.map(room => {

                    return <div class="com-md-9 mt-2">
                        <Room room={room}/>
                    </div>

                }))}
            </div>

        </div>
    )
}

export default Homescreen