import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Assuming a fixed shipping cost for simplicity. Update this as per your logic.
  const shipping = items.length > 0 ? 5.00 : 0.00; 
  const total = subtotal + shipping;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table/>
          </div>
          <div className="col-sm-3 order-summary bg-light p-3">
            <ul className="list-group">
              <li className="list-group-item bg-light">
                <strong>Order Summary</strong>
              </li>
              <li className="list-group-item" style={{ backgroundColor: "lightgray" }}>
                <ul className="list-group flex">
                  <li className="text-left">
                    Subtotal
                  </li>
                  <li className="text-right">
                    €{subtotal.toFixed(2)}
                  </li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">
                    Shipping
                  </li>
                  <li className="text-right">
                    €{shipping.toFixed(2)}
                  </li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small className="text-primary"> >> Add Coupon Code</small>
                  </li>
                </ul>
              </li>
              <li className="list-group-item" style={{ backgroundColor: "lightgray" }}>
                <ul className="list-group flex">
                  <li className="text-left">
                    Total
                  </li>
                  <li className="text-right">
                    €{total.toFixed(2)}
                  </li>
                </ul>
              </li>
            </ul>
            
            <div className="d-grid gap-2">
              <Link to='/form' >
                <button
                  type="button"
                  className="btn btn-lg btn-success checkout"
                  disabled={subtotal === 0}
                  style={{ width: "100%" }}
                >
                  Checkout
                </button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
