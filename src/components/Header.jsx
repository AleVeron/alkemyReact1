import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {

    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        setUser(token)
    }, [])

    const logOut = ()=>{
        localStorage.removeItem("token")
        navigate("/")
        window.location.reload(false);
    }

    return (
        <header>
            {!user ?

                <ul className='d-flex justify-content-around align-items-center'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="list">List</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                :

                <ul className='d-flex justify-content-around align-items-center'>

                    <li>
                        <Link to="list">List</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
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