import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {IconContext} from 'react-icons';
import {Nav} from "react-bootstrap";
import UserService from "../../../services/UserService";
import Logo from "../../header/Logo";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <Logo
                            image={"/images/logo/1.png"}
                        />
                    </Link>
                    <Nav>
                        <li className="nav-item">
                            <Link to={'/admin-dashboard'} className={'nav-link text-white'}> Dashboard </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/news-list'} className={'nav-link text-white'}> News </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/coins-list'} className={'nav-link text-white'}> Coins </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link text-white'} onClick={UserService.logout}> Logout </Link>
                        </li>

                    </Nav>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
