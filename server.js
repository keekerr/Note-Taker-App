const express = require('express');
const app = express();

const PORT = 3001;

const apiRoutes = require('public\assets\apiRoutes');
const htmlRoutes = require('public\assets\htmlRoutes');

app.use(express.static('public'));

// Source:https://www.geeksforgeeks.org/express-js-express-urlencoded-function/
app.use(express.urlencoded({extended: true}));

app.use(express.json());

// Added code to specify root directory 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log ('API server now on port ${PORT}. Success!');
});
