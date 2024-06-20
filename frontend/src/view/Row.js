import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../cartSlice';

const Row = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.ref));
  };

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity({ itemId: item.ref, quantity: newQuantity }));
  };

  return (
    <tr>
      <td>
        <img width="70" height="70" src={item.image} alt={item.name} />
      </td>
      <td>{item.ref}</td>
      <td>€{item.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleQuantityChange(item.quantity > 1 ? item.quantity - 1 : 1)}
          >
            -
          </button>
          <span className="btn btn-light">{item.quantity}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td>€{item.price * item.quantity}</td>
      <td>
        <button type="button" className="btn btn-danger remove" onClick={handleRemove}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Row;
