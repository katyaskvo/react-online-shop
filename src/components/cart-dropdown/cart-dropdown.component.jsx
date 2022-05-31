import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout');
        closeCart();
    }

    const closeCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartDropdownContainer>
            <div className='cart-items'>
            { cartItems && cartItems.length 
                ? cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
                : <span>Shopping Cart is Empty</span>}
            </div>
           <Button onClick={navigateToCheckout}>Go to Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown