import {Router} from 'express';
import {pool} from '../db';
import type {RowDataPacket} from 'mysql2';

const bookRouter = Router();


bookRouter.get('/:book_id', async (req, res) => {
    const bookId = Number(req.params.book_id);
    if(bookId == 0){
        try{
            const [rows] = await pool.query<RowDataPacket[]>(
                'SELECT * FROM book order by id'
            );
            res.json(rows);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: '책 정보를 불러오지 못했습니다.' });
            }
    }
    else{
        try{
            const [rows] = await pool.query<RowDataPacket[]>(
                'SELECT * FROM book WHERE id = ?',
                [bookId]
            );
            res.json(rows);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: '책 정보를 불러오지 못했습니다.' });
            }
    }
});

export default bookRouter;
