import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Router from './routes/user_activity';
import authRouter from './routes/auth';

const app = express();
const PORT = 4000;

app.use(cors({
  origin: 'http://localhost:5173',  // 프론트 주소를 정확히 지정
  credentials: true,                // 쿠키 허용
}));
app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/activity', Router);

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});