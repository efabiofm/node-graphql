import express from 'express';
import dbConnect from './database';

const app = express();

dbConnect();

app.listen(3000, () => console.info('Server running on http://localhost:3000'));
