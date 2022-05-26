import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './checkout-item.styles.scss';

const CheckoutItem = ({product}) => {
    const {name, imageUrl, quantity, price} = product;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product);
    const clearItemHandler = () => clearItemFromCart(product);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            
                <span className='name'>{name}</span>
                <span className='quantity-container'>
                    <div className='arrow' onClick={removeItemHandler}>
                        &#10094;
                    </div>
                    <div className='quantity'>{quantity}</div>
                    <div className='arrow' onClick={addItemHandler}>
                        &#10095;
                    </div>
                </span>
                <span className='price'>{price}</span>
                <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
            
        </div>
    )
}

export default CheckoutItem;