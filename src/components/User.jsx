import React from 'react'

export default function User(props) {
    return (
        <div className='User'>
            <img src={props.image} alt="profile" />
            <div>
                <div className='Nomc'>{props.nomc}</div>
                <button onClick={props.details}>Detail User</button>
                <button onClick={props.taches}>Liste des taches</button>
            </div>
        </div>
    )
}