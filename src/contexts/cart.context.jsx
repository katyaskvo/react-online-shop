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

const removeCartItem = (cartItems, itemToRemove) => {
    if (itemToRemove.quantity > 1 ) {
        return cartItems.map((item) => item.id === itemToRemove.id 
            ? {...item, quantity: item.quantity - 1 }
            : item
    )}

    return cartItems.filter(product => product.id !== itemToRemove.id);
}

const clearCartProduct = (cartItems, productToRemove) => cartItems.filter(product => product.id !== productToRemove.id);


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    itemCount: 0, 
    cartTotal: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const updatedCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setItemCount(updatedCount);
        const updatedTotal = cartItems.reduce((totalAmount, item) => totalAmount + (item.price * item.quantity), 0);
        setCartTotal(updatedTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    }

    const clearItemFromCart = (productToRemove) => {
        setCartItems(clearCartProduct(cartItems, productToRemove));
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart, 
        cartItems, 
        itemCount, 
        cartTotal 
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}