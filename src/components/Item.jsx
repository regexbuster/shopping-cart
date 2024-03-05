import { ShopContext } from "./App";
import Header from "./Header";
import '../styles/item.css';

import { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

function Item() {
    const {products, addToCart} = useContext(ShopContext);
    const {name} = useParams();

    const [curProduct, setCurProduct] = useState(null);

    console.log(curProduct)

    useEffect(() =>{
        products.map((item) => {
            //console.log(products, item.hash, name, item.hash == name)
            if(item.hash === name.trim()){
                setCurProduct(item);
            }
        })
    }, [name, products])

    //if the uuid of the item doesn't exist then send them to error page
    // if (curProduct == null && products.length > 0){
    //     return <Navigate to="/error" replace={true}/>
    // }

    function itemAddToCart(){
        addToCart(name)
    }

    return (
        <>
            <Header />
            <div className="item-holder">
                <div className="specific-item">
                    <div className="item-info">
                        {/* <image src={0}/> */}
                        <div className="item-details">

                        </div>
                    </div>
                    <div className="pricing">
                        <h3>Price</h3>
                        <p>{0}</p>
                        <button type="button" onClick={itemAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;