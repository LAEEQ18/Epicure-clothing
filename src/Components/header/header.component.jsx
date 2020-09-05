import React from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
 import {HeaderContainer , OptionsContainer , LogoContainer, OptionDiv,OptionLink} from './header.styled';

//import './header.styles.scss';

const Header = ({currentUser , hidden}) => (
    <HeaderContainer>
        <LogoContainer to = '/'>
            <Logo className = 'logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to ='/shop'>
                SHOP
            </OptionLink>
            <OptionLink  to ='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionDiv   onClick ={() => auth.signOut() }> SIGN OUT </OptionDiv> )
                : (
                <OptionLink to ='/signin'> SIGN IN </OptionLink> )
            }


            <CartIcon/>

        </OptionsContainer>
        {
                hidden ? null :
            <CartDropdown/> 
           
        }
    </HeaderContainer>
);

const mapStateProps = createStructuredSelector ({
    currentUser :selectCurrentUser,
    hidden : selectCartHidden 
});

// const mapStateProps = ({user : {currentUser}, cart :{hidden}}) => ({
//     currentUser,
//     hidden
// }) 
//before using selectors


export default connect(mapStateProps)(Header) ;