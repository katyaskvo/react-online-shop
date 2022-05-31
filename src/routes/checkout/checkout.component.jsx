import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import { 
    CheckoutContainer, 
    CheckoutHeader, 
    HeaderTitle,
    Total,
} from './checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <h1>Checkout</h1>
            <CheckoutHeader>
                <HeaderTitle>
                    <span>Product</span>
                </HeaderTitle>
                <HeaderTitle>
                    <span>Description</span>
                </HeaderTitle>
                <HeaderTitle>
                    <span>Quantity</span>
                </HeaderTitle>
                <HeaderTitle>
                    <span>Price</span>
                </HeaderTitle>
                <HeaderTitle>
                    <span>Remove</span>
                </HeaderTitle>
            </CheckoutHeader>
            {cartItems.map((item) => (
                <CheckoutItem product={item} key={item.id} />
            ))}
            <Total>
                Total: ${cartTotal}
            </Total>
        </CheckoutContainer>
    )
}

export default Checkout;