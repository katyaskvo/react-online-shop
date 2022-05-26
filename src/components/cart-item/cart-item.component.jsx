import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <h4 className='name'>
                    {name}
                </h4>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem;