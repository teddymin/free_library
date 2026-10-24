import { Router } from 'express';
import { pool } from '../db';

const router = Router();

// 사용자 활동 내역 전체 목록
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * from user_activity order by id'
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '사용자 활동 내역을 불러오지 못했습니다.' });
  }
});

export default router;