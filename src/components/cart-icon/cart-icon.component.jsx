import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>

    </div>
);

//11111 const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
// })
//22222 const mapStateToProps = (state) => ({
//     itemCount: selectCartItemsCount(state)
// })
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);