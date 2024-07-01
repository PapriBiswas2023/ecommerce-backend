import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();