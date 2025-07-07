const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb+srv://arunkumar012006:arunkumar2006@cluster0.r7ztzjc.mongodb.net/shopdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Connection error:', err));

// ✅ Product schema
const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  image: String,
  images: [String],
  description: String,
  discount: Number,
  benefits: [String]
});



// ✅ Routes
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});


app.post('/admin/add', async (req, res) => {
  const { name, price, image, images, description, discount, benefits } = req.body;

  const product = new Product({
    name,
    price,
    image,
    images,         // array of image URLs
    description,
    discount,       // percentage
    benefits        // array of strings
  });

  await product.save();
  res.json({ message: 'Product added' });
});


app.post('/admin/delete/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
