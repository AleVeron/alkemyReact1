import {Navigate, useNavigate} from 'react-router-dom'

export default function List () {

    const navigates = useNavigate()
    const token = localStorage.getItem("token")

    if(token === null){
        navigates('/')
    }

    return(
        <h2>List Component</h2>
    )
}