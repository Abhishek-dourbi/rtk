import React, { useEffect } from 'react'
import { fetchUsers } from './userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const UserView = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <div>
        <h2>
            List of Users -
        </h2>
        {
          user.loading && <h2>Loading...</h2>
        }
        {
          !user.loading && user.error ? <h2>Error: {user.error}</h2> : null
        }
        {
          !user.loading && user.users.length > 0 ? (
            <ul>
              {
                user.users.map(user => <li key={user.id}>{user.name}</li>)
              }
            </ul>
          ) : null
        }
    </div>
  )
}

export default UserView;