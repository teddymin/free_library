import getActivity from "../data/activity"
function ActivityList() {

const activities = getActivity( true);
  // 4. 상태에 담긴 데이터를 목록으로 화면에 그림
  return (
    <ul>
      {activities.map((a) => (  
        <li key={a.id}>
          사용자 {a.user_id} / 책 {a.book_id}
          {a.note !== null && a.note.length > 0 ? ` / 메모: ${a.note}` : ""}
        </li>
      ))}
    </ul>
  );
}

export default ActivityList;
