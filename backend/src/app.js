import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// rota base da API
app.get('/api', (req, res) => {
  res.json({ status: 'API online' });
});

// health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
