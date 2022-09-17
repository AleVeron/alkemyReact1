import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Results from './Results';


export default function Seeker() {

    const navigate = useNavigate()
    const [result, setResult] = useState()
    console.log(result);

    const handleChange = (e) => {
        const key = e.target.value.trim().toLowerCase()
        setResult(key)

        if (key.length !== 0 && key.length > 4) {
            navigate(`/results?keyword=${key}`)
        } else {
            navigate("/list")
        }
    }

    return (

        <div>
            <input onKeyUp={handleChange} className="form-control" type="text" name="key" placeholder="Search Here" />
        </div>


    )
}