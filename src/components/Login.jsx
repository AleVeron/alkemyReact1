import axios from 'axios'
import Swal from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import List from './List';


function Login() {

    const navigate = useNavigate()

    const [user, setUser] = useState()

    const [loading, setLoading] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token")
        setUser(token)
    }, [])

    const submitHandle = (e) => {
        e.preventDefault();

        setLoading(true);
        /* Email Verification */

        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === "" || password === "") {
            Swal("Please complete the form");
            setLoading(false)
            return
        }
        if (email !== "" && !regexEmail.test(email)) {
            console.log("Write one email direction true");
            setLoading(false)
            return
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            Swal("Invalid user/email")
            setLoading(false)
            return
        }

        /* Send data to alkemy´s api */

        axios
            .post('http://challenge-react.alkemy.org', { email, password, referrerPolicy: "unsafe_url" })
            .then(res => {
                const token = res.data.token;
                localStorage.setItem("token", token)
                Swal({
                    title: "Login succesfull",
                    timer: 5000
                })
                setLoading(false)
                navigate("/list")
            }).finally(() => {
                window.location.reload(false);
            })
    }


    /*Loader*/

    if (loading) {
        return (
            <div className="loading d-flex justify-content-center align-items-center">
                <img
                    src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
                    alt="loading"
                ></img>
            </div>
        );
    }

    return (
        <>

            {!user ? <form className="container d-flex flex-column align-items-center justify-content-center" onSubmit={submitHandle}>

                <h1>Form to Login</h1>

                <p>Please enter the data in the view</p>

                <label htmlFor="email">
                    <span>Email</span>
                    <br />
                    <input placeholder=' challenge@alkemy.org' type="email" name="email"></input>
                </label>

                <label htmlFor="password">
                    <span>Password</span>
                    <br />
                    <input placeholder=' react' type="password" name="password"></input>
                </label>

                <button className="btn btn-light mt-4 col-1" type="submit">Log In</button>

            </form> : <List />}



        </>

    )
}

export default Login;