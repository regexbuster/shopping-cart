import { createContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Error from './Error';

export const ShopContext = createContext({
    products: [],
    cartItems: [],
    addToCart: () => {},
    loading: true,
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
            path: "cart",
            element: <Cart />
        }
    ])

    const [cartItems, setCartItems] = useState([])
    
    let products = null;
    let loading = true;

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode:"cors"})
        .then((res) => {
            if (res.status >= 400){
                throw new Error("server error");
            }
            return res.json();
        })
        .then((res) => {
            products = res;
            console.log(res);
        })
        .catch((err) => console.error(err))
        .finally(() => {
            loading = false
        })
    }, [])

    const addToCart = (newItem) => {
        setCartItems([...cartItems, newItem])
    };

  return(
    <ShopContext.Provider value={{products, cartItems, addToCart, loading}}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}

export default App;