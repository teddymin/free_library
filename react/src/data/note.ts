import { useEffect, useState } from "react";
import type { UserActivity } from "../types/user_activity";


const useNote= (book_id: number) => {
    const [note, setNote] = useState<UserActivity[]>([]);
    useEffect(() => {
      fetch(`http://localhost:4000/api/note/get/${book_id}`, { credentials: "include" })
          .then((res) => (res.ok ? res.json():[]))
          .then((data) => setNote(data)) 
          .catch((err) => console.error(err));
    }, []);
  
    return note;
};

const updateNote = async (book_id: number, note: string) => {
    try {
        const response = await fetch(`http://localhost:4000/api/note/update/${book_id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ note }),
        });
        if (!response.ok) {
            throw new Error("메모 업데이트에 실패했습니다.");
        }
    } catch (error) {
        console.error(error);
    }
};
export {useNote, updateNote};