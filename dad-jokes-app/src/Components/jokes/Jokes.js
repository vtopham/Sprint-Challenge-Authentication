import React, { useEffect, useState} from 'react'
import axios from 'axios'



const Jokes = () => {

    const token = localStorage.getItem('token')
    const authenticatedAxios = axios.create({
        baseURL: 'http://localhost:3300',
        headers: {Authorization: token}
    })

    const [jokes, setJokes] = useState([])
    

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

    // if(!token) {
    //     return(
    //         <>
    //         <h1>Please Log In.</h1>
    //         </>
    //     )
    // }
    

    

    return (
        <>
            <h1>This is the jokes page</h1>
            
        </>
    )
}

export default Jokes;