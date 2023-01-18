import React, { FC } from 'react';
import { authApi } from '../services/authService';
import CourseItem from './CourseItem';
 

const MainForm : FC = () => {
    const {data: users} = authApi.useFetchAllUsersQuery(5)

    return(<div>    
        {
        users && users.map(user => 
            <CourseItem key={user.username} user={user} />
        )}
    </div>);
};
 
export default MainForm;