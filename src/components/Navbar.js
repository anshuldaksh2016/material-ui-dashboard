
import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
   
    render() {
        return (
            <>
                <nav className="Navbar">
                    <button className="navbar-bars"><FontAwesomeIcon icon={faBars} /></button>
                    <h1 className="navbar-logo">Dashboard</h1>
                    <div className="bell-icon"><FontAwesomeIcon icon={faBell} /></div>
                </nav>

            </>
        )
    }
}

export default Navbar;