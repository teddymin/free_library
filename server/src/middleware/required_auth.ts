import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId } = jwt.verify(
      req.cookies.token,
      process.env.JWT_SECRET!
    ) as { userId: number };
    res.locals.userId = userId; // 다음 핸들러에서 꺼내 쓰도록 저장
    next();                     // 통과시켜서 다음 단계로 진행
  } catch {
    res.status(401).json({ message: '로그인이 필요합니다.' });
  }
}
