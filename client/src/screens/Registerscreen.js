import React, {useState, useEffect} from "react";

function Registerscreen() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setCPassword] = useState('')

    function register() {
        
        if(password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword,
            }
            console.log(user)
        }
        else {
            alert('Error: Passwords do not match')
        }

    }

    return (
        <div>
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