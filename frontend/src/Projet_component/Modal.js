import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../cartSlice';

  const Modal = ({ item }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const handleAddToCart = () => {
    dispatch(addItem({ ...item, quantity: count }));

    // Close the modal by triggering the close button
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
  };

  return (
    <div className="modal fade" id={`modal-${item.ref}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{item.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeButtonRef}></button>
          </div>
          <div className="modal-body">
            <div className='row'>
              <div className='col-sm-4'>
                <img src={item.image} className="card-img-top" alt={item.name} />
              </div>
              <div className='col-sm'>
                <p className='lead'>Plage</p>
                <h3 className='price'>€{item.price}</h3>
                <div className='btn-group' role='group' aria-label='Basic example'>
                  <button
                    type="button"
                    className='btn btn-secondary'
                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                  >
                    -
                  </button>
                  <span className='btn btn-light qty'>{count}</span>
                  <button
                    type="button"
                    className='btn btn-secondary'
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
