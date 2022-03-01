import '../../assets/css/navbar.css';

export const Header = () => {

    const toggleBtnEvent = (e) => {
        const menu = document.querySelector('.navbar_menu');
        const links = document.querySelector('.navbar_links');
        menu.classList.toggle('active');
        links.classList.toggle('active');
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
                <li>센서정보</li>
                <li>스마트팜</li>
                <li>일정표</li>
                <li>후원하기</li>
                <li>방명록</li>
            </ul>

            <ul className="navbar_links">
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
            </ul>

            <a href="#" className="navbar_toggleBtn" onClick={toggleBtnEvent}><i className="fas fa-bars"></i></a>
        </nav>
    )
}
