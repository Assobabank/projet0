import React from "react";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ filter, setFiltering }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar bg-body-tertiary bg-secondary">
      <div className="container">
        <div>
          <span className="text-danger fs-1">MP</span><small className="fw-bold fs-2">lace</small>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => {
              setFiltering(e.target.value.length > 0);
              filter(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="menu-right">
        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} className="fa-2x color" /></Link>
        {totalQuantity > 0 && <span className="badge rounded-pill text-bg-success" id="sign">{totalQuantity}</span>}
      </div>
    </nav>
  );
};

export default Navbar;
