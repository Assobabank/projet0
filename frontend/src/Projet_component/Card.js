import React from 'react';
import './Card.css';
import Modal from './Modal';

const Card = ({ item }) => {
  return (
    <div className="col-sm-4">
      <div className="card pil">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4 className="title">{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p className="card-text">€{item.price}</p>
            </div>
          </div>
          <button className="btn btn-danger btn-sm right" data-bs-toggle="modal" data-bs-target={`#modal-${item.ref}`}>
            View Product
          </button>
        </div>
      </div>
      <Modal item={item} />
    </div>
  );
};

export default Card;
