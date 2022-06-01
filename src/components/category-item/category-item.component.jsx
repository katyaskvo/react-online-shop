
import { CategoryContainer } from './category-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({category}) => {
   const {title, imageUrl, route} = category;

   const navigate = useNavigate();
   const onNavigateHandler = () => navigate(route);

    return (
        <CategoryContainer onClick={onNavigateHandler}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </CategoryContainer>
    )
}

export default CategoryItem;