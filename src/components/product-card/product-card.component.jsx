import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

    return (
        <div className='product-card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <div className='footer'>
                <span className="name">{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to Cart</Button>
        </div>
    )

}

export default ProductCard;