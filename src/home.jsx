import React from 'react';
import './home.css';
import { Tab } from 'react-bootstrap';
import imageOne from './assets/img/AM2_0259.jpg'
import modeIcon from './assets/icons/night-day.svg'



const Home = () => {

    return (
        <div className='body'>
            {/* black left side */}
            <div className='leftColumn'>
                <div className='logo'>
                    navinda
                </div>
                <div className='imageOne'>
                    <img
                        alt='profile-image'
                        src={imageOne}
                        width="250vw"
                        height="350vh"
                    />
                </div>
                <div className='name'>
                    <p>NAVINDA <br /> &nbsp; HEWAWICKRAMA</p>
                </div>
                <div className='leftText1'>
                    Hello ! I am an undergraduate at the University of Ruhuna and an Associate Software Engineer.
                </div>

                <div className='modeIcon'>
                    <img src={modeIcon} alt="dark-light-mode-icon" />
                    {/* turn the color red of the above icon */}
                </div>
            </div>


            {/* red right side */}
            <div className='rightColumn'>

                <div className='toggleSwitch'>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                        <p>Theme</p>
                    </label>
                </div>

                <div className='alias'>
                    <p>Alias</p>
                    <p>Hermes</p>
                </div>
            </div>
        </div>
    )

}

export default Home;