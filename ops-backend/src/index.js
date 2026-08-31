// File: src/index.js
import express from 'express';
import cors from 'cors';
import requestLogger from './middleware/requestLogger.js';
import jwt from 'jsonwebtoken';
// const jwt = require('jsonwebtoken'); //CJS - Old approach
// import { productRoute } from './routes/productRoutes.js';
import prodRoute from './routes/productRoutes.js';    
import {userRoute} from './routes/userRoute.js'         //alias
import connectDB from './config/db.js';

const app = express();

//Connect to Mongo Database
connectDB();

//Middleware - to intercept the request
//Every incoming request passes through a middleware
//Sequence matters
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }

        callback(new Error('Origin is not allowed by CORS'));
    },
    credentials: true 
}));

// 1. Add middleware BEFORE your route definitions
app.use(express.json());                           // For parsing application/json
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded (HTML forms)

app.use(requestLogger);

app.use((tom, joseph, abcPvtLtd) => {
  // 1. Perform your logic here (e.g., logging, validation, authentication)
  console.log("Second Middleware executed!");

  // 2. Call abcPvtLtd means next() to move to the route handler
  abcPvtLtd(); 
}) 

app.use(userRoute);
app.use(prodRoute);  // Redirect a request to productRoutes.js file
//This single stmt is able to handle all CRUD for product

//Implement custRoute


app.get('/', (req, res) => {                        //root route
    res.send("Hello");
    console.log("Get request got a hit.....iiiiiiiiiii")
});


//Code will reach here  if next() is mentioned in the productRoutes.js file
//Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
app.get('/product', (req, res)=>{                   //product route
    res.send("I am from index.js handling product route")
    //res.send("I am from index.js handling product route") ////Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
});

app.get('/users', (req, res) => {
    res.json([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        }]);
})

// 1. Route to CREATE a cookie
app.get('/create-cookie', (req, res) => {
    // Syntax: res.cookie(name, value, [options])
    res.cookie('my-cookie-1', 'active_12345', {
        maxAge: 24 * 60 * 60 * 1000, // Expires in 24 hours (in milliseconds)
        httpOnly: true,              // Prevents client-side JS from accessing the cookie
        secure: false,               // Set to true if using HTTPS
        sameSite: 'lax'              // Protects against CSRF attacks
    });

    res.cookie('my-cookie-2', 'hsghcghcghgcgecgecghvhvcgh', {
        maxAge: 24 * 60 * 60 * 1000, // Expires in 24 hours (in milliseconds)
        httpOnly: true,              // Prevents client-side JS from accessing the cookie
        secure: false,               // Set to true if using HTTPS
        sameSite: 'lax'              // Protects against CSRF attacks
    });
    
    res.send('Cookie has been successfully created!');
});

// app.get - Data retrieval
// DOB - Calculate age from DOB //app.get()
// Need details of productId=786 // app.get()
// app.post - Data insertion

//user registraion app.post()
//login app.post() - No need to insert any data; login(username, password) here password data is confidential.

const JWT_SECRET="your_super_secret_long_random_string_here"

app.post('/login', (req, res)=>{
    console.log(req.body);
    if(req.body.username=="admin" && req.body.password=="admin") {
        console.log("Login operation completed");
        // res.send("Login is successful");
        // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client


        const userPayload = {            
            username: req.body.username,
            role: 'admin'
        };

        // Sign the token with payload, secret, and an expiration time (e.g., 1 hour)
        const accessToken = jwt.sign(userPayload, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            message: 'Authentication successful!',
            token: accessToken
        });
    }
    else{
        console.log("Login operation failed");
        // res.status(400).send("Login is failed");
        res.status(400).json({message:"Login is failed"});
    }
})

app.listen(5000, () => {
    console.log("Application is running on 5000")
});