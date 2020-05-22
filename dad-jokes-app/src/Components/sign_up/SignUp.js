import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'


const StyledDiv = styled.div`



`

const SignUp = () => {

    const [formState, setFormState] = useState({username: "", password: ""});

    const updateFormState = event => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        axios.post(`http://localhost:3300/api/auth/register`, formState)
            .then(response => {
                alert(`${response.data.message} Please log in!`)
                setFormState({username: "", password: ""})
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <StyledDiv>
            <h1>Welcome! Please sign up.</h1>
            <form onSubmit = {submitForm}>
                <div className = 'input-container'>
                    <label htmlFor = "username" name = "username" >Username: </label>
                    <input name = "username" onChange = {updateFormState} value = {formState.username}/>
                </div>
                <div className = 'input-container'>
                    <label htmlFor = "password" name = "password">Password: </label>
                    <input type = "password" name = "password" onChange = {updateFormState} value = {formState.password}/>
                </div>
                <button>Submit</button>
            </form>
        </StyledDiv>
    )
}

export default SignUp;