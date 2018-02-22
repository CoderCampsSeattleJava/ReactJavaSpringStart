const express = require('express');
const login = require('./routes/LoginRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.urlencoded ({ extended: true }));
app.use( bodyParser.json());

Router1.use(( req, res, next ) => {
    res.header("Access-Control-Allow-Origin", " * ");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
    next();
});

const router = express.Router();

// Test Route
router.get('/', ( req, res ) => {
    res.json({ message: "Welcome to our upload module apis" });
});

// Route To Handle User Registration
router.post('/register', login.register );
router.post('/login', login.login );
app.use('/api', router );
app.listen( 3000 );