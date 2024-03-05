import { ShopContext } from "./App";
import Header from "./Header";
import '../styles/item.css';

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
    const {products, addToCart} = useContext(ShopContext);
    const {name} = useParams();

    const [curProduct, setCurProduct] = useState(null);

    useEffect(() =>{
        products.map((item) => {
            if(item.hash === name.trim()){
                setCurProduct(item);
            }
        })
    }, [name, products])

    function itemAddToCart(){
        addToCart(name)
    }

    return (
        <>
            <Header />
            {!curProduct &&
                <p>Loading...</p>
            }
            {curProduct &&
                <div className="specific-item">
                    <div className="item-info">
                        <img src={curProduct.image}/>
                        <div className="item-details">
                            <h1>{curProduct.title}</h1>
                            <p>{curProduct.description}</p>
                        </div>
                    </div>
                    <div className="pricing">
                        <h1>Price</h1>
                        <p>{`$${curProduct.price}`}</p>
                        <button type="button" onClick={itemAddToCart}>Add to Cart</button>
                    </div>
                </div>
            }            
        </>
    );
}

export default Item;