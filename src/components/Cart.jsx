import { useContext } from "react";

import Header from "./Header";
import { ShopContext } from "./App";
import '../styles/cart.css'

function Cart() {
    const {cartItems} = useContext(ShopContext);

    let sum = 0;

    return (
        <>
            <Header />
            <div className="cart-container">
                { cartItems.length == 0 &&
                    <p>Nothing is in your cart.</p>
                }
                { cartItems.length > 0 &&
                    <>
                        {
                            cartItems.map((item) => {
                                sum += (Number(item.count) * Number(item.price));
                                return (
                                    <div key={`${item.uuid}`} className="cart-item">
                                        <strong>{item.title}</strong>
                                        <p>{`${item.count} x $${item.price}`}</p>
                                    </div>
                                )
                            })
                        }
                        <div className="list-total">
                            <strong>Total:  </strong>
                            <p>{`$${sum}`}</p>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default Cart;