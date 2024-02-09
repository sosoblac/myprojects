import React, { useEffect, useState } from 'react'
import UserCard from '../../components/usercard/UserCard'
import './userlist.css'
import { BounceLoader} from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataAsync } from '../../states/fetchdata/fetchData'

const UserList = () => {
    const userData = useSelector((state)=>state.fetchdata.data)
    const isLoading = useSelector((state)=>state.fetchdata.loading)
    const error = useSelector((state)=>state.fetchdata.error)
    const dispatch = useDispatch()
    // const [userData, SetUserData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(()=>{
    //     fetchData()
    // },[])
    useEffect(()=>{
        dispatch(fetchDataAsync())
    },[dispatch])

    // const fetchData = async ()=>{
    //     try {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    //         setTimeout(()=>{setIsLoading(false)},2000)
    //         SetUserData(res.data)
    //         // console.log(res.data)

    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }
    console.log(error)
  return (
    <>
    <div className="UserListContainer">
        <h1>User List</h1>
        {isLoading && 
        <div className="loader">
        <BounceLoader color="#36d7b7" size = {60} />
        </div> 
        }
        
        <section className='userList'>
            <div className="UserCards">
                {userData?.map(data=>(
                    <UserCard key = {data.id} data = {data}/>
                ))}
            </div>
            

        </section>
    </div>
    </>
  )
}

export default UserList
