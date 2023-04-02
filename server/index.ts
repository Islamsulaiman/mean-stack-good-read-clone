import express, { Express } from 'express';
import * as dotenv from 'dotenv';
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

dotenv.config();

// Connect to mongoose
const mongoUrl : string = process.env.MONGO_URL as string;
mongoose.connect(mongoUrl)
  .then(() => console.log('Database is connected'))
  .catch(() => console.log('Database connection failed'));

// Read the content inside dotenv

// creating express server
const app: Express = express();

app.use(express.json());

const PORT: number = process.env.PORT as unknown as number;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${PORT}`);
});
