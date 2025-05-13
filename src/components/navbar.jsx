import './navbar.css';
import l from '../assets/logo.png';

export default function Navbar() {
    return (
        <div className="nav-main">
            <div className="nav-in-1">
                <svg viewBox="9 5 180 40" preserveAspectRatio="none">
                    <path d="M 0 10 L 140 10 L 160 30 L 200 30" />
                </svg>
            </div>
            <div className="nav-mid">
                <div className="nav-mid-1">
                    <img src={l} alt="logo" />
                </div>
                <div className="nav-mid-2">
                    <a href="">HOME</a>
                    <a href="">ABOUT US</a>
                    <a href="">SERVICES</a>
                    <a href="">CONTACT US</a>
                </div>
            </div>
            <div className="nav-in-2">
                <svg viewBox="0 5 200 40" preserveAspectRatio="none">
                    <path d="M 0 30 L 40 30 L 60 10 L 200 10" />
                </svg>
            </div>
        </div>
    );
}
