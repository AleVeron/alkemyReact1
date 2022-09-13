import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

export default function List () {

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token === null){
            navigate("/")
        }
    },[])

    return(
        <h2>List Component</h2>
    )
}