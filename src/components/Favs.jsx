import { useEffect } from "react"
import axios from "axios";

export default function Favs (){

    useEffect(()=>{
        const favs = localStorage.getItem("favs")
        console.log(favs);
    })

    return(
        <div className="favs"> 

        </div>
    )
}