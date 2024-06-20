const express = require('express'); // Importe le framework Express
const mongoose = require('mongoose'); // Importe Mongoose pour interagir avec MongoDB
const cors = require('cors'); // Importe CORS pour permettre les requêtes depuis d'autres domaines
const bodyParser = require('body-parser'); // Importe body-parser pour parser les corps des requêtes

const app = express(); // Crée une instance d'application Express
const PORT = 4000; // Définit le port sur lequel le serveur va écouter

// Middleware
app.use(bodyParser.json()); // Middleware pour parser les requêtes JSON
app.use(cors()); // Middleware pour permettre les requêtes CORS

// Connexion à la base de données MongoDB
const uri = 'mongodb+srv://assobajeansamuelloic:9D0EDgF07jQXMq3r@cluster1.nka9aqj.mongodb.net/box?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

// Schéma et modèle Mongoose pour les produits
const productSchema = new mongoose.Schema({
  ref: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model('Product', productSchema, 'products');

// Router Express
const router = express.Router();

// Route pour les legumes
router.get('/legumes', async (req, res) => {
  try {
    const legumes = await Product.find({ category: 'Legumes' });
    res.json(legumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
});

router.get('/boissons', async (req, res) => {
  try {
    const boissons = await Product.find({ category: 'Boissons' });
    res.json(boissons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/fruits', async (req, res) => {
  try {
    const fruits = await Product.find({ category: 'Fruits' });
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
});

// Route POST pour créer une nouvelle legumes
router.post('/legumes', async (req, res) => {
  console.log('Received POST request to /legumes');
  console.log('Request body:', req.body);

  try {
    const product = new Product({
      ref: req.body.ref,
      category: req.body.category,
      name: req.body.name,
      price: req.body.price,
      unit: req.body.unit,
      image: req.body.image
    });

    const newProduct = await product.save();
    console.log('Product saved successfully:', newProduct);
    res.status(201).json({ response: "Product added successfully" });
  } catch (error) {
    console.error('Error adding new product:', error);
    res.status(400).json({ error: `Error adding new product: ${error.message}` });
  }
});

// Utilisation du routeur
app.use('/api', router);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
