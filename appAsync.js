// Gustavo Olgiati
// 1216388953
// September 10, 2023

// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// We use 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('async');
});

app.get('/simulateAsync', (req, res) => {
    setTimeout(() => {
      res.json({ message: "Asynchronous operation completed!" });
    }, 2000);
});

// Start the server on port 4000
// Note we are advertising the service on port 4000, and not 3000 this time
var port = 4000;

// Note
// the quotes are replaced by back ticks ` next to the key caps 1
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
