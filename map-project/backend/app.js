const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const markerRoutes = require('./routes/markerRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/markers', markerRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port \${port}`);
});
