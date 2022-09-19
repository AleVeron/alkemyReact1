import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Seeker from './Seeker';

function Header() {

    const [user, setUser] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        const token = localStorage.getItem("token")
        setUser(token)
    }, [])

    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/")
        window.location.reload(false);
    }


    return (
        <header>

            {!user ?

                <ul className='d-flex justify-content-around align-items-center'>
                    <li>
                        <Link to="/">Welcome</Link>
                    </li>

                </ul>

                :

                <ul className='d-flex flex-column flex-sm-row justify-content-around align-items-center gap-3'>

                    <li>
                        <Link to="list">List</Link>
                    </li>

                    <li>
                        <Link to="favs">Favs</Link>
                    </li>

                    <li>
                        <Seeker />
                    </li>

                    <li>
                        <button className='btn btn-danger' onClick={logOut}>Logout</button>
                    </li>

                </ul>

            }
        </header>
    )
}

export default Header;