import React,{useState,useEffect} from 'react'
import axios from './axios' //when you have export default we can use any name while importing


function Row({title,fetchUrl}) {
    const [Movies, setMovies] = useState([])
    
    // this snippet runs every time the row load or everytime something changes
    useEffect(()=>{

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request); //Inspect the page and see hoe the object looks in console
            
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    },[])  //if [] the snippet only runs once but if[movies] runs everytime the movies changes

    return (
        <div>
            {/* title */}
            <h2>{title}</h2>
            {/* container->posters */}
            
        </div>
    )
}

export default Row
