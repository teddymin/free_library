import express from 'express';
import cors from 'cors';
import Router from './routes/user_activity';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/activity', Router);

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});