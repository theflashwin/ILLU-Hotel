import React from 'react'
import '../css/Navbar.css'

function Navbar() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href='/login'
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-bg-1">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        {user ? (<><li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user.data.name}
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Bookings</a></li>
                                <li><a class="dropdown-item" onClick={logout}>Logout</a></li>
                            </ul>
                        </li></>) : (<><li class="nav-item right-link">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                        <li class="nav-item right-link">
                            <a class="nav-link" href="/login">Login</a>
                        </li></>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;