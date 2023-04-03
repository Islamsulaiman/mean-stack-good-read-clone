import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

// Read the content inside dotenv
dotenv.config();

// Connect to mongoose
const mongoUrl : string = process.env.MONGO_URL as string;
mongoose.connect(mongoUrl)
  .then(() => console.log('Database is connected'))
  .catch(() => console.log('Database connection failed'));

// creating express server
const app: Express = express();

app.use(express.json());

const PORT: number = process.env.PORT as unknown as number;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${PORT}`);
});
