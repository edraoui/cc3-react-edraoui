import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import User from './User';


export default function ListUser() {
    const navigate = useNavigate()
    const { data } = useSelector(state => state.user)
    return (
        <div className='ListUser'>
            {data.length !== 0 && data.users.map(user => <User key={user.id} image={user.image} nomc={`${user.firstName} ${user.lastName}`} details={(e) => navigate(`/DetailUser/${user.id}`)} taches={e => navigate(`/ListPosts/${user.id}`)} />)}
        </div>
    )
}
