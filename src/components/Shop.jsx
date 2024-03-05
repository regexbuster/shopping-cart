import { useContext } from "react";
import { Link } from 'react-router-dom';


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
                                <Link key={item.uuid} to={`/item/${item.hash}`}>
                                    <ItemCube image={item.image} title={item.title}/>
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