import React, { useEffect, useState} from 'react'
import axios from 'axios'
import JokeCard from './JokeCard'



const Jokes = () => {

    const token = localStorage.getItem('token')
    const authenticatedAxios = axios.create({
        baseURL: 'http://localhost:3300',
        headers: {Authorization: token}
    })

    const [jokes, setJokes] = useState([]);
    

    useEffect( _ => {
        authenticatedAxios.get(`/api/jokes`)
            .then(response => {
                console.log(response)
                setJokes(response.data)
            })
            .catch(err => {
                        console.log(err)
                    })
    },[])



    

    return (
        <>
            <h1>This is the jokes page</h1>
            {jokes.map(obj => {
                return <JokeCard joke = {obj.joke}/>
            })}
            {/* {jokes.length>0? <p>{jokes[0].joke}</p> : null} */}
            
        </>
    )
}

export default Jokes;