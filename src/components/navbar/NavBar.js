import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {
  return (
    <>
    <div className="navContainer">
        <div className="logo">
            <Link className='link' to='/'>
            <h2>MY PROJECTS</h2>
            </Link>
        </div>
        <div className="pages">
            <ul className="pagelist">
                <Link className='link' to='/portfolio'>
                    <li>
                        Portfolio
                    </li>
                </Link>
                <Link className='link' to='/userlist'>
                    <li>
                        Userlist
                    </li>
                </Link>
                <Link className='link' to='/counter'>
                    <li>
                        Counter
                    </li>
                </Link>
                <Link className='link' to='/productlist'>
                    <li>
                        Product List
                    </li>
                </Link>
                <Link className='link' to='/productlist-practice'>
                    <li>
                        Product2
                    </li>
                </Link>
                <Link className='link' to='/volleyballcounter'>
                    <li>
                        VolleyballScore
                    </li>
                </Link>
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar
