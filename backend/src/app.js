import express from 'express';
import authRoutes from './modules/auth/auth.routes.js';
import dotenv from 'dotenv';

const app = express();

app.use(express.json()); // 👈 SEM ISSO, req.body = undefined

app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
});

export default app;