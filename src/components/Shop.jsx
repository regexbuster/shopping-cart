import { useContext, useEffect } from "react";
import Header from "./Header";
import { ShopContext } from "./App";
import ItemCube from "./ItemCube";

import '../styles/shop.css';

function Shop() {
    const { products } = useContext(ShopContext);

    return (
        <>
            <Header />
            { products &&
                <div className="items">
                    {
                        products.map((item) => {
                            return <ItemCube image={item.image} title={item.title}/>;
                        })
                    }
                </div>
            }
        </>
    );
}

export default Shop;