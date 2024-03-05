import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ShopContext } from './App';
import '../styles/header.css';

function Header() {
    const { cartItems } = useContext(ShopContext);

    const totalItems = (cart) => {
        let sum = 0;
        cart.forEach((item) => {
            sum += item.count;
        })
        return sum;
    }

    return (
        <div className="header">
            <Link to="/" id="header-name">Shop Name</Link>
            <Link to="/shop" id="header-btn">
                <p>Shop</p>
            </Link>
            <Link to="/cart" id="header-btn">
                <p>{`Cart ${totalItems(cartItems)}`}</p>
            </Link>
        </div>
    )
}

export default Header;