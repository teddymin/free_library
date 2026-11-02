import { useEffect, useState } from 'react';
import type {UserActivity} from '../types/user_activity';



const useActivity = (enabled: boolean) => {
    const [activities, setActivities] = useState<UserActivity[]>([]);

    useEffect(() => {
        if (!enabled) return;
        fetch('http://localhost:4000/api/activity', { credentials: "include" })
            .then((res) => (res.ok ? res.json():[]))
            .then((data) => setActivities(data)) // 받은 데이터를 상태에 저장 → 화면이 다시 그려짐
            .catch((err) => console.error(err));
    }, [enabled]);
    return activities;  
};

export default useActivity