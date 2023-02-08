import React, {useState, useEffect} from "react";

function Loginscreen() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    function login() {
        
        const user = {
            email,
            password,
        }
        console.log(user)

    }

    return (
        <div>
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