import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id == id)
    return (
        <div>
            {
                selectedUser.map(user => <div className='Details' key={user.id}>
                    <div className='image'>
                        <img src={user.image} alt="profil" />
                    </div>
                    <div className='detail'>
                        Full Name:{`${user.firstName} ${user.lastName}`} <br/>
                        Age: {user.age}<br/>
                        Gender: {user.gender}<br/>
                        Email: {user.email}<br/>
                        Phone number: {user.phone}<br/>
                        Weight: {user.weight}<br/>
                        Height:{user.height}<br/>
                        Birth Date: {user.birthDate}<br/>
                        Blood Group: {user.bloodGroup}<br/>
                        Eye Color: {user.eyeColor}<br/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
