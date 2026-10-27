import getActivity from "../data/activity"
function ActivityList() {

const activities = getActivity();

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
