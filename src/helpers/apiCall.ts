import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/redux';
import { setNotes } from '../redux/slices/notes';
import { setUsers } from '../redux/slices/users';

const apiCall = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetch("http://192.168.100.145:3001/posts")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                dispatch(setNotes(res));
            })
            .catch((error) => console.error(error));
    
        fetch("http://192.168.100.145:3001/users")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                dispatch(setUsers(res));
            })
            .catch((error) => console.log(error));
    }, []);
}

export default apiCall;