import { useEffect, useState } from 'react';
import type {UserActivity} from '../types/user_activity';

function ActivityList() {
  // 2. 서버에서 받아온 데이터를 담아두는 상태 (처음엔 빈 배열)
  const [activities, setActivities] = useState<UserActivity[]>([]);

  // 3. 화면이 처음 나타날 때 한 번만 서버에 요청을 보냄
  useEffect(() => {
    fetch('http://localhost:4000/api/activity', { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setActivities(data)) // 받은 데이터를 상태에 저장 → 화면이 다시 그려짐
      .catch((err) => console.error(err));
  }, []);

  // 4. 상태에 담긴 데이터를 목록으로 화면에 그림
  return (
    <ul>
      {activities.map((a) => (  
        <li key={a.id}>
          사용자 {a.user_id} / 책 {a.book_id} / {a.last_page}쪽까지 읽음
          {a.note_link && (
            <>
              {' '}
              <a href={a.note_link}>노트 보기</a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ActivityList;
