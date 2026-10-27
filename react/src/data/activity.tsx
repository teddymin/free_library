import { useEffect, useState } from 'react';
import type {UserActivity} from '../types/user_activity';


const getActivity = () => {
    const [activities, setActivities] = useState<UserActivity[]>([]);

    // 3. 화면이 처음 나타날 때 한 번만 서버에 요청을 보냄
    useEffect(() => {
        fetch('http://localhost:4000/api/activity', { credentials: "include" })
            .then((res) => res.json())
            .then((data) => setActivities(data)) // 받은 데이터를 상태에 저장 → 화면이 다시 그려짐
            .catch((err) => console.error(err));
    }, []);
    return activities;  
}

export default getActivity