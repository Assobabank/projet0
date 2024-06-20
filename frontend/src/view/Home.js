// Home.js
import React from "react";
import SideMenu from "../Projet_component/SideMenu";
import List from '../Projet_component/List';

const Home = ({ loadcategory, category, filtered, list, isFiltering }) => {
  return (
    <div className="container">
      <br />
      <div className="row ">
        <SideMenu loadcategory={loadcategory} category={category} />
        <div className="col-sm">
          <div className="row">
            <List data={isFiltering ? filtered : list[category]} category={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;