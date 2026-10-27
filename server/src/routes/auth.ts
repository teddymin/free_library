import { Router } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import type { RowDataPacket } from 'mysql2';
import { pool } from '../db';

const router = Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google', async (req, res) => {
  try {
    const { credential } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID!,
    });
    const p = ticket.getPayload();
    if (!p?.sub || !p.email) {
      return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
    }

    await pool.query(
      `INSERT INTO users (google_sub, email, name, picture) VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE email = VALUES(email), name = VALUES(name), picture = VALUES(picture)`,
      [p.sub, p.email, p.name ?? null, p.picture ?? null]
    );
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT id, email, name, picture FROM users WHERE google_sub = ?',
      [p.sub]
    );
    const user = rows[0];
    if (!user) return res.status(500).json({ message: '사용자 조회 실패' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
    res.cookie('token', token, {
      httpOnly: true,   // JS에서 못 읽게 (XSS 방어)
      sameSite: 'lax',
      secure: false,    // 배포(HTTPS) 시 true
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: '구글 로그인에 실패했습니다.' });
  }
});

router.get('/me', async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET!) as { userId: number };
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT id, email, name, picture FROM users WHERE id = ?',
      [decoded.userId]
    );
    if (!rows[0]) return res.status(401).json({ message: '로그인이 필요합니다.' });
    res.json(rows[0]);
  } catch {
    res.status(401).json({ message: '로그인이 필요합니다.' });
  }
});

router.post('/logout', (_req, res) => {
  res.clearCookie('token');
  res.json({ ok: true });
});

export default router;