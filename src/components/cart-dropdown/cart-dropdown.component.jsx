import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            { cartItems 
                ? cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
                : <span>Shopping Cart is Empty</span>}
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown