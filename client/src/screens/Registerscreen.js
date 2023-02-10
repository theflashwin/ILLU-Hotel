import React, {useState, useEffect} from "react";
import axios from "axios"
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

function Registerscreen() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setCPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    async function register() {
        
        if(password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword,
            }
            
            try {
                setLoading(true)
                const result = await axios.post(`/api/users/register?name=${user.name}&email=${user.email}&password=${user.password}`, user).data
                setLoading(false)
                setSuccess(true)

                setName('')
                setEmail('')
                setPassword('')
                setCPassword('')

            } catch(error) {
                console.log(error)
                setLoading(false)
                setError(true)
            }

        }
        else {
            alert('Error: Passwords do not match')
        }

    }

    return (
        <div>

            {loading && (<Loader/>)}
            {error && (<Error/>)}
            {success && (<Success message="You were registered successfully!" />)}

            <div className="row justify-content-center mt-5">
                <div className="col-md-5">

                    <div className="box-shadow">
                        <h1>Register</h1>
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                        <input type="text" className="form-control" placeholder="someone@example.com" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                        <input type="text" className="form-control" placeholder="Confirm password" value={cpassword} onChange={(e) => {setCPassword(e.target.value)}}></input>

                        <button className="btn btn-primary mt-3" onClick={register}>Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Registerscreen