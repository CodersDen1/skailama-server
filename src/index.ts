import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const allowedOrigins = [process.env.CORS_ORIGIN, 'https://skailama-client-et43t.ondigitalocean.app']; 

const corsOptions = {
  origin: function (origin: string | undefined, callback: (error: Error | null, result: boolean | undefined) => void) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'), false);
      }
    },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!'});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
