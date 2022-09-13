import axios from 'axios'
import Swal from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()

    const submitHandle = (e) => {
        e.preventDefault();

        /* Email Verification */

        const email = e.target.email.value;
        const password = e.target.password.value
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === "" || password === ""){
            Swal("please complete the form");
            return
        }
        if (email !== "" && !regexEmail.test(email)){
            console.log("Write one email direction true");
            return
        }

        if(email !== "challenge@alkemy.org" || password !== "react"){
            Swal("Invalid user/email")
            return
        }

        /* Send data to alkemy´s api */

        axios
            .post('http://challenge-react.alkemy.org', {email,password})
            .then(res => {
                Swal("Logged in succesfull")
                console.log(res.data);
                const token = res.data.token;
                localStorage.setItem("token", token)
                navigate("/list")
            })
            

    }

    return (

        <form className="container d-flex flex-column align-items-center" onSubmit={submitHandle}>

            <h1>Form to Login</h1>

            <label htmlFor="email">
                <span>Email</span>
                <br />
                <input type="email" name="email"></input>
            </label>

            <label htmlFor="password">
                <span>Password</span>
                <br />
                <input type="password" name="password"></input>
            </label>

            <button className="mt-4 col-1" type="submit">Log In</button>

        </form>

    )
}

export default Login;