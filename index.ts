// const express = require('express');
import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';

// Read the content inside dotenv
dotenv.config();

const app: Express = express();

app.use(express.json());

app.use('/', (req: Request, res: Response) => {
  res.send('Using TypeScript Like a champ ^_^');
});

const port: number = process.env.PORT as unknown as number || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
