// File: src/index.js
import express from 'express';
import cors from 'cors';
import requestLogger from './middleware/requestLogger.js';

const app = express();

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
    }
}));

app.use(requestLogger);

app.use((tom, joseph, abcPvtLtd) => {
  // 1. Perform your logic here (e.g., logging, validation, authentication)
  console.log("Second Middleware executed!");

  // 2. Call abcPvtLtd means next() to move to the route handler
  abcPvtLtd(); 
}) 

app.get('/', (req, res) => {
    res.send("Hello");
    console.log("Get request got a hit.....iiiiiiiiiii")
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


app.listen(5000, () => {
    console.log("Application is running on 5000")
});