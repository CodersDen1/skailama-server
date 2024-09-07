require('dotenv').config();
import express from 'express';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true 
  }));



app.get('/', (req, res) => {
  res.send('Hello, TypeScript with akki server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});