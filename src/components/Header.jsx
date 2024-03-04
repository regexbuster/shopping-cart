import { Link } from 'react-router-dom';

import '../styles/header.css';
import { useContext } from 'react';
import { ShopContext } from './App';

function Header() {
    const { cartItems } = useContext(ShopContext);

    return (
        <div className="header">
            <Link to="/" id="header-name">Shop Name</Link>
            <Link to="/shop" id="header-btn">
                <p>Shop</p>
            </Link>
            <Link to="/cart" id="header-btn">
                <p>{`Cart ${cartItems.length}`}</p>
            </Link>
        </div>
    )
}

export default Header;