import express from 'express';
import authRoutes from './modules/auth/auth.routes.js';

const app = express();

app.use(express.json()); // 👈 SEM ISSO, req.body = undefined

app.use('/auth', authRoutes);

export default app;