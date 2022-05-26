import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h1>Checkout</h1>
            <div className='checkout-header'>
                <div className='header-title'>
                    <span>Product</span>
                </div>
                <div className='header-title'>
                    <span>Description</span>
                </div>
                <div className='header-title'>
                    <span>Quantity</span>
                </div>
                <div className='header-title'>
                    <span>Price</span>
                </div>
                <div className='header-title'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => (
                <CheckoutItem product={item} key={item.id} />
            ))}
            <div className='total'>
                Total: ${cartTotal}
            </div>
        </div>
    )
}

export default Checkout;