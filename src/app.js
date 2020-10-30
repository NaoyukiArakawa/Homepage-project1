const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 3000;

// Define paths for Express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handelebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup partials directory
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

app.get('', (req, res) => {
  res.render('index', {
    name: 'Naoyuki Arakawa',
    currentYear: new Date().getFullYear(),
  });
});

app.listen(port, () => {
  console.log(`Server is up now on ${port}`);
});
