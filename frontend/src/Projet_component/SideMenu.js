
// SideMenu.js
import React from "react";
import './SideMenu.css';

const SideMenu = ({ loadcategory, category }) => {
  const Links = ["Fruits", "Legumes", "Boissons"];
  return (
    <div className="col-sm-3">
      <ul>
        {Links.map((link, index) => (
          <li key={index} className={category === index ? 'active' : ''} onClick={() => loadcategory(index)}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;