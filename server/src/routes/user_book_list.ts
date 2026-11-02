import type { RowDataPacket } from 'mysql2';
import { pool } from '../db';
import { Router } from 'express';
import { requireAuth } from '../middleware/required_auth';

const user_book_list_router = Router();

user_book_list_router.get('/', requireAuth, async (_req, res) => {
  try {
    const userId = res.locals.userId as number;
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM user_activity WHERE user_id = ? order by id',
      [userId]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '사용자 활동 내역을 불러오지 못했습니다.' });
  }
});
export default user_book_list_router;