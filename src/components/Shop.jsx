import { useContext, useEffect } from "react";
import Header from "./Header";
import { ShopContext } from "./App";
import ItemCube from "./ItemCube";

function Shop() {
    const { products, loading } = useContext(ShopContext);

    useEffect(() => {
        console.log(ShopContext.products)
        console.log(loading)
    }, [products, loading])

    return (
        <>
            {loading && <p>Loading...</p>}
            {products && 
                <>
                    <Header />
                    <ItemCube image={products[0].image} title={products[0].title}/>
                </>
            }    
        </>
    );
}

export default Shop;