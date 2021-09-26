import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="Top">
                <nav>
                    <ul>
                        <NavLink activeClassName="active" exact to="/">Home</NavLink>
                        <NavLink activeClassName="active" exact to="/about">About</NavLink>
                        <NavLink activeClassName="active" exact to="/contact">Contact Us</NavLink>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
