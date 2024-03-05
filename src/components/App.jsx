import { createContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { v1 as uuidv1 } from 'uuid';
import { md5 } from 'hash-wasm';

import Home from './Home';
import Shop from './Shop';
import Item from './Item';
import Cart from './Cart';
import Error from './Error';

export const ShopContext = createContext({
    products: [],
    cartItems: [],
    addToCart: () => {},
})

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />
        },
        {
            path: "shop",
            element: <Shop />
        },
        {
            path: "item/:name",
            element: <Item />
        },
        {
            path: "cart",
            element: <Cart />
        }
    ])

    const [cartItems, setCartItems] = useState([])
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode:"cors"}) //fetch data from API
        .then((res) => {
            if (!res.ok){
                throw new Error("server error");
            }
            
            return res.json()
        })
        .then((res) => {
            res.map((item) => {
                item.uuid = uuidv1();
                // if product space is bigger need hash table b/c over possible overlap
                md5(item.title.trim())
                .then((hash)=>{
                    item.hash = hash;
                })
            })
            setProducts(res)
        })
        .catch((err) => console.error(err))
    }, [])

    const addToCart = (newItem) => {
        setCartItems([...cartItems, newItem])
    };

  return(
    <ShopContext.Provider value={{products, cartItems, addToCart}}>
        <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}

export default App;