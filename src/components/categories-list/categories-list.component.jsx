import {CategoriesContainer} from './categories-list.styles.jsx';
import CategoryItem from '../category-item/category-item.component';

const CategoriesList = ({categories}) => {
    return (
        <CategoriesContainer>
			{categories.map((category) => {
				return <CategoryItem key={category.id} category={category} />;
			})}
		</CategoriesContainer>
    )
}

export default CategoriesList;