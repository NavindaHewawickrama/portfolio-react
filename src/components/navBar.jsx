import React from 'react';
import './navBar.css';


const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='navBarLogo'>
                navinda
            </div>
            <div className='navBarItems'>
                <div className='navBarItem'>
                    Home
                </div>
                <div className='navBarItem'>
                    About
                </div>
                <div className='navBarItem'>
                    Projects
                </div>
                <div className='navBarItem'>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default NavBar;