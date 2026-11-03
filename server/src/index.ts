import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import user_book_list_router from './routes/user_book_list';
import authRouter from './routes/auth';
import bookRouter from './routes/book';

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
app.use('/api/activity', user_book_list_router);
app.use('/api/books', bookRouter);

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});