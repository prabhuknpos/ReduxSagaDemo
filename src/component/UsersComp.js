import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { userAction } from '../redux/actions/userAction';
import CardComp from './CardComp';


const UsersComp = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users);

    const loading = useSelector(state => state.users.loading);

    const error = useSelector(state => state.users.error);


    useEffect(() => {
     dispatch(userAction());
    })

  return (
   <>
    {users.loading && <p>Loading ...</p>}
    {users.length === 0 && !loading && <p>No users Available!!</p>}
    {error && !loading && <p>{error}</p>}
    {
        users.length > 0 && users.map((user) => (
            <CardComp key={user.id} user={user}></CardComp>
        ))
    }
   </>
  )
}

export default UsersComp