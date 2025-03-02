import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../assets/img/logo.png';


const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='navBarLogo'>
                <img src={logo} width={80} height={60} />
            </div>
            <div className='navBarItems'>
                <Link to='/' className='navBarItem'>Home</Link>
                <Link to='/about' className='navBarItem'>About</Link>
                <Link to='/projects' className='navBarItem'>Projects</Link>
                <Link to='/contact' className='navBarItem'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;


// const NavBar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className='navBar'>
//             <div className='navBarLogo'>
//                 navinda
//             </div>
//             <button className='navToggle' onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? 'Close' : 'Menu'}
//             </button>
//             <nav className={`navBarItems ${menuOpen ? 'open' : ''}`}>
//                 <Link to='/' className='navBarItem'>Home</Link>
//                 <Link to='/about' className='navBarItem'>About</Link>
//                 <Link to='/projects' className='navBarItem'>Projects</Link>
//                 <Link to='/contact' className='navBarItem'>Contact</Link>
//             </nav>
//         </header>
//     );
// }

// export default NavBar;
