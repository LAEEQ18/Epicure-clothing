import React from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import {signOutStart} from '../../redux/user/user.actions';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
 import {HeaderContainer , OptionsContainer , LogoContainer, OptionDiv,OptionLink} from './header.styled';

//import './header.styles.scss';

const Header = ({currentUser , hidden , signOutStart}) => (
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
                <OptionLink as = 'div'  onClick ={signOutStart }>
                     SIGN OUT </OptionLink> )
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

const mapStateToProps = createStructuredSelector ({
    currentUser :selectCurrentUser,
    hidden : selectCartHidden 
});

// const mapStateProps = ({user : {currentUser}, cart :{hidden}}) => ({
//     currentUser,
//     hidden
// }) 
//before using selectors

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header) ;