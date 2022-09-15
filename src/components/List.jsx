import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import Swal from '@sweetalert/with-react'


export default function List() {


    const urlMovie ="https://image.tmdb.org/t/p/w500/"
    const navigate = useNavigate()

    const [movies, setMovies] = useState([])
    console.log(movies);

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            navigate("/");
        }
        getMovies()
    }, [setMovies])

    async function getMovies() {
        await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=da105d94ec008192c58e8fcad8b05171&language=es-MX")
            .then(res => setMovies(res.data.results))
            .catch(error => {
                Swal(<h1>Error in the api, try later</h1>)
            })
    }
    

    return (

        <div className="row d-flex justify-content-center align-items-center m-4">
            {movies.map((movie, index) => (

                <div key={movie.id} className="card mb-3 col-10 col-sm-12 col-md-5 col-xl-3 rounded-5 m-4" 
                style={{
                   backgroundImage: `url("${urlMovie+movie.poster_path}")`,
                   backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
               }}>
               <div className="card-img-top imgCard" alt={movie.title} />
               <div className="card-body d-flex justify-content-around align-items-center cardB rounded-5">
                   <div className="d-flex flex-column">
                       <h5 className="card-title">{movie.title.substring(0, 30)}</h5>
                       <p>{movie.overview.substring(0, 100)+"..."}</p>
                   </div>
                   <Link key={movie.id} to={`/detail?movieId=${movie.id}`}>
                       <button className="btn btn-danger">Detail</button>
                   </Link>
               </div>
           </div> 
            ))}
        </div>



    )
}

