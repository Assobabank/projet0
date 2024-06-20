import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row';
import { Link } from 'react-router-dom';

const Table = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <>
    
    <table className="table">
      <thead>
        <tr>
          <th width="200">Product</th>
          <th width="80">Reference</th>
          <th width="150">Price</th>
          <th width="150">Quantity</th>
          <th width="200">Total</th>
          <th width="50">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Row key={item.ref} item={item} />
        ))}
      </tbody>
    </table>
    <Link to="/">
    <button className='btn btn-danger'>
        Return to the homepage
    </button>
    </Link>
    
    </>
  );

};

export default Table;
