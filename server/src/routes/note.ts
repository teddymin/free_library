import {Router} from "express";
import {pool} from "../db";
import type {RowDataPacket} from "mysql2";
import {requireAuth} from "../middleware/required_auth";

const noteRouter = Router();

noteRouter.get("/get/:book_id", requireAuth, async (req, res) => {
    const bookId = Number(req.params.book_id);
    const userId = res.locals.userId as number;
    try{
        let [rows] = await pool.query<RowDataPacket[]>(
            'SELECT * FROM user_activity WHERE book_id = ? AND user_id = ?',
            [bookId, userId]
        );
        if(rows.length === 0){
            const [insertResult] = await pool.query(
                'INSERT INTO user_activity (user_id, book_id, note) VALUES (?, ?, ?)',
                [userId, bookId, '']
            );        
            const [rows] = await pool.query<RowDataPacket[]>(
                'SELECT * FROM user_activity WHERE book_id = ? AND user_id = ?',
                [bookId, userId]
            );
        }
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: '사용자 활동 내역을 불러오지 못했습니다.' });
    }});


noteRouter.post("/update/:book_id", requireAuth, async (req, res) => {
    const bookId = Number(req.params.book_id);
    const userId = res.locals.userId as number;
    const { note } = req.body;
    try{
        const [updateResult] = await pool.query(
            'UPDATE user_activity SET note = ? WHERE book_id = ? AND user_id = ?',[note, bookId, userId]
        );
        res.json({ message: '메모가 성공적으로 업데이트되었습니다.' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: '메모 업데이트에 실패했습니다.' });
    }
});

export default noteRouter;
