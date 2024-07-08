const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/html');

app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

// Use apiRoute
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`You are now connected to the API server. Listening now on port ${PORT}. Welcome!`);
  });
