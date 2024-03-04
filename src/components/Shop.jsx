import { useContext } from "react";
import { Link } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';

import { ShopContext } from "./App";
import Header from "./Header";
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
                                return (
                                    <Link key={uuidv1()} to={`/shop/${item.title}`}>
                                        <ItemCube image={item.image} title={item.title}/>;
                                    </Link>
                                )
                            })
                        }
                    </div>
            }
        </>
    );
}

export default Shop;