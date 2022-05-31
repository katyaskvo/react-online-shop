import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    `;

export const LogoContainer = styled(Link)`
    height: 89px;
    width: 100px;
    padding: 25px 25px 25px 0;
`

export const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    box-sizing: border-box;
` 