import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd ) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((item) => item.id === productToAdd.id 
            ? {...item, quantity: item.quantity + 1 }
            : item
        );
    }
    
    return [...cartItems, {...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemCount: 0, 
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const updatedCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setItemCount(updatedCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, itemCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}