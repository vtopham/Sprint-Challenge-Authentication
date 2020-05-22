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
        if(token) {
        authenticatedAxios.get(`/api/jokes`)
            .then(response => {
                console.log(response)
                setJokes(response.data)
            })
            .catch(err => {
                        console.log(err)
                        
                    })
        } 
    },[])


    const getJokes = event => {
        event.preventDefault();
        if(token) {
            authenticatedAxios.get(`/api/jokes`)
                .then(response => {
                    console.log(response)
                    setJokes(response.data)
                })
                .catch(err => {
                            console.log(err)
                            
                        })
        } else {
            alert("You must log in to do that")
        }
    }
    
    if(!token) {return <h1>Log In First!</h1>} else {
        return (
            <>
                <h1>This is the jokes page</h1>
                <button onClick = {getJokes}>Get Jokes</button>
                {jokes.map(obj => {
                    return <JokeCard key = {obj.id} joke = {obj.joke}/>
                })}
                
                
            </>
        )
    }
}

export default Jokes;