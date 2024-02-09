import React from 'react'
import './usercard.css'
import EditModal from '../editmodal/EditModal';

const UserCard = ({data,keys}) => {
  return (
    <>
    <div key= {keys} className="card">
        <img className='profileImage' src="/images/1.jpg" alt="Profile" />
        <div className="userContent">
            <h1>{data.id}</h1>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
            {/* <Button variant="primary">Edit</Button> */}
            <EditModal data = {data}/>
        </div>
    </div>
    </>
  )
}

export default UserCard
