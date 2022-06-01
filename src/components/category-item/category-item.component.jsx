
import { CategoryContainer } from './category-item.styles.jsx';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
   const {title, imageUrl} = category;
    return (
        <CategoryContainer>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Link to={`/shop/${title}`} className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Link>
        </CategoryContainer>
    )
}

export default CategoryItem;