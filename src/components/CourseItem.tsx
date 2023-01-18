import React, { FC } from 'react';
import { IUser } from '../models/IUser';
 
interface UserItemProbs {
    user: IUser
} 

const CourseItem : FC<UserItemProbs> = ({user}) => {
  return(<div>
    {user.username}
  </div>);
};
 

export default CourseItem;