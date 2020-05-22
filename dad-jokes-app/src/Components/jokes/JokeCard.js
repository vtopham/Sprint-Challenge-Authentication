import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
`

`
const JokeCard = ({joke}) => {
    
    return(
        <StyledDiv>
            <p>{joke}</p>
        </StyledDiv>
    )
}

export default JokeCard;