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

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

app.get('/', (req, res) => {
    res.render('user', { User });
});

// route handler for the form
app.post('/createUser', (req, res) => {
    const { name, age, email } = req.body;
    const user = new User(name, age, email);
    const { name: userName, age: userAge, email: userEmail } = user;
    res.render('userInfo', { userName, userAge, userEmail });
});

// Start the server
var port = 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});