import express from 'express';
import authRoutes from './modules/auth/auth.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

// ✅ CORS - ANTES de tudo
app.use(cors({                                    // ← ADICIONAR
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json()); // 👈 SEM ISSO, req.body = undefined

// rota de saúde (obrigatória)
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/auth', authRoutes);

export default app;