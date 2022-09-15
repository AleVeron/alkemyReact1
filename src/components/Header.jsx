import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'

function Header() {

    const [user,setUser]= useState()

    useEffect(() => {
        const token = localStorage.getItem("token")
        setUser(token)
    }, [])

    return (
        <header>

                <ul className='d-flex justify-content-around align-items-center'>
                    {!user ? <li>
                        <Link to="/">Home</Link>
                    </li> : null}

                    <li>
                        <Link to="list">List</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

        </header>
    )
}

export default Header;