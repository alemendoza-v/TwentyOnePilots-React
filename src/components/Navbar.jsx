import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../css/nav.css";

const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <img src="/top_logo.jpg"></img>
            <img src="/title.png" className='title'></img>
            <img src="/top.png" className='title'></img>
            <nav ref={navRef}>
                <ul className='nav-list'>
                    <li className='nav-item'><a href="#">Home</a></li>
                    <li className='nav-item'><a href="/#">Lyrics</a></li>
                </ul>
                <button className="nav-button nav-close-button" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-button" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
};

export default NavBar;