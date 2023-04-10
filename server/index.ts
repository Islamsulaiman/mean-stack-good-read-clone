import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { indexRouter } from './routes';

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
app.use(cookieParser());
app.use(express.static('server/uploadedImages'));

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(indexRouter);

const PORT: number = process.env.PORT as unknown as number;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${PORT}`);
});
