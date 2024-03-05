import { createContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { md5 } from 'hash-wasm';
import { v5 as uuidv5 } from 'uuid';

import Home from './Home';
import Shop from './Shop';
import Item from './Item';
import Cart from './Cart';
import Error from './Error';

export const ShopContext = createContext({
    products: [],
    cartItems: [],
    cartSize: 0,
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
                // if product space is bigger need hash table b/c over possible overlap
                md5(item.title.trim())
                .then((hash)=>{
                    item.hash = hash;
                })
                item.uuid = uuidv5(item.title, "7e099821-9a9d-4c64-a072-a316145bc1d2")
            })
            setProducts(res)
        })
        .catch((err) => console.error(err))
    }, [])

    const [cartSize, setCartSize] = useState(0);

    const addToCart = (newItem) => {
        let found = false;
        cartItems.forEach((item) => {
            if(item.hash == newItem.hash){
                item.count += 1;
                found = true;
            }
        })

        if(!found){
            newItem.count = 1;
            setCartItems([...cartItems, newItem])
        }

        setCartSize(cartSize + 1);
    };

  return(
    <ShopContext.Provider value={{products, cartItems, cartSize, addToCart}}>
        <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}

export default App;