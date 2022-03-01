import '../../assets/css/navbar.css';
import {NavLink} from "react-router-dom";

export const Header = () => {

    const toggleBtnEvent = (e) => {
        const menu = document.querySelector('.navbar_menu');
        const links = document.querySelector('.navbar_links');
        menu.classList.toggle('on');
        links.classList.toggle('on');
        e.preventDefault();
    }

    return (
        <nav className="navbar">
            <a href="/" style={{textDecoration: "none"}}>
                <div className="navbar_logo">
                    <i className="fas fa-video"></i> 매일돌봄
                </div>
            </a>

            <ul className="navbar_menu">
                <li><NavLink to="/info-sensor" >센서정보</NavLink></li>
                <li><NavLink to="/smartFarm" >스마트팜</NavLink></li>
                <li><NavLink to="/schedules" >일정표</NavLink></li>
                <li><NavLink to="/donate" >후원하기</NavLink></li>
                <li><NavLink to="/visitors" >방명록</NavLink></li>
            </ul>

            <ul className="navbar_links">
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
            </ul>

            <a href="#" className="navbar_toggleBtn" onClick={toggleBtnEvent}><i className="fas fa-bars"></i></a>
        </nav>
    )
}
