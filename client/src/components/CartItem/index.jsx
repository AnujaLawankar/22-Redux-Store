import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const CartItem = ({ item, removeFromCart, updateCartQuantity }) => {
  const handleRemoveFromCart = () => {
    removeFromCart(item._id);
    idbPromise('cart', 'delete', { ...item });
  };

  const handleChangeQuantity = (e) => {
    const value = e.target.value;
    if (value === '0') {
      removeFromCart(item._id);
      idbPromise('cart', 'delete', { ...item });
    } else {
      updateCartQuantity(item._id, parseInt(value));
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={handleChangeQuantity}
          />
          <span role="img" aria-label="trash" onClick={handleRemoveFromCart}>
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
    updateCartQuantity: (productId, quantity) =>
      dispatch(updateCartQuantity(productId, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
