import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.jsx';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { 
	NavigationContainer, 
	LogoContainer, 
	NavLinksContainer ,
	NavLink,
} from './navigation.styles';

const Navigation = () => {
	const { loggedInUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo className="logo" />
				</LogoContainer>
				<NavLinksContainer>
					<NavLink to="/shop">
						Shop
					</NavLink>
					{
						loggedInUser 
						? <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink> 
						: <NavLink to="/authentication">Sign In</NavLink>
					}
					<CartIcon />
				</NavLinksContainer>
		
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
