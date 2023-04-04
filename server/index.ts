import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { indexRouter } from './routes';

// Read the content inside dotenv
dotenv.config();
const MONGO_URL = 'mongodb://127.0.0.1:27017/goodbooks';
const PORT = 3000;

// Connect to mongoose
// mongoUrl : string = process.env.MONGO_URL as string;
mongoose.connect(MONGO_URL)
  .then(() => console.log('Database is connected'))
  .catch(() => console.log('Database connection failed'));

// creating express server
const app: Express = express();

app.use(express.json());

// main rote
app.use(indexRouter);

// const PORT: number = process.env.PORT as unknown as number;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${PORT}`);
});
