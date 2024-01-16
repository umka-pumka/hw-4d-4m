import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header className="header">
           <div className="contaner header-container">
            <h1>Shop</h1>
            <nav>
                <Link to={'/'}>home</Link>
                <Link to={'/cart'}>cart</Link>
            </nav>
           </div>
        </header>
    );
}

export default Header;
