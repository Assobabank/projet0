import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Projet_component/Navbar';
import Cart from './view/Cart';
import Home from './view/Home';
import Form from './view/Form';
import Thank from './view/Thank';
import './App.css';

const App = () => {
  const [Fruits, setFruits] = useState([]);
  const [Legumes, setLegumes] = useState([]);
  const [Boissons, setBoissons] = useState([]);
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const loadcategory = (i) => {
    setCategory(i);
  };

  const list = [Fruits, Legumes, Boissons];

  const filterResults = (input) => {
    let fullList = list.flat();
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(results);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/fruits`)
      .then(response => {
        setFruits(response.data);
      })
      .catch(error => {
        console.error('Error fetching fruits:', error);
      });
  
    axios.get(`${process.env.REACT_APP_API_URL}/api/legumes`)
      .then(response => {
        setLegumes(response.data);
      })
      .catch(error => {
        console.error('Error fetching legumes:', error);
      });
  
    axios.get(`${process.env.REACT_APP_API_URL}/api/boissons`)
      .then(response => {
        setBoissons(response.data);
      })
      .catch(error => {
        console.error('Error fetching boissons:', error);
      });
  }, []);
  

  return (
    <Router>
      <Navbar filter={filterResults} setFiltering={setFiltering} />
      <Routes>
        <Route path="/" element={
          <Home 
            loadcategory={loadcategory}
            category={category}
            list={list}
            filtered={filtered}
            isFiltering={isFiltering}
          />
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thank" element={<Thank />} /> 
      </Routes>
    </Router>
  );
};

export default App;
