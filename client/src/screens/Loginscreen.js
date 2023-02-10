import React, {useState, useEffect} from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

function Loginscreen() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSucess] = useState()

    async function login() {
        
        const user = {
            email,
            password,
        }
        
        try {
            setLoading(true)
            const result = await axios.post(`/api/users/login?email=${user.email}&password=${user.password}`)
            setLoading(false)

            localStorage.setItem('currentUser', JSON.stringify(result))
            window.location.href="/home"

        } catch(error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }

    }

    return (
        <div>

            {loading && (<Loader/>)}
            {error && (<Error message="Invalid Credentials" />)}

            <div className="row justify-content-center mt-5">
                <div className="col-md-5">

                    <div className="box-shadow">
                        <h1>Login</h1>
                        <input type="text" className="form-control" placeholder="someone@example.com" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

                        <button className="btn btn-primary mt-3" onClick={login}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loginscreen