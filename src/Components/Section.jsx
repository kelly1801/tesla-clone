import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description, image, leftButton, rightButton}) {
  
   
    return (
    
    <Wrap bgImage={image}>
        
        <Fade bottom> 
        <ItemText>
      
            <h1>{title}</h1>
            <p>{description}</p>
            
        </ItemText>
        </Fade>

        <Fade bottom> 
<Buttons>
         <ButtonGroup>

         <LeftButton>
    {leftButton}
    </LeftButton>
    {rightButton && <RightButton>
  {rightButton}
    </RightButton> }
    

        </ButtonGroup> 

        <DownArrow src="./images/down-arrow.svg" />
        </Buttons>
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
backgrounnd-repeat:no-repeat;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url('/images/${props.bgImage}')`};


`

const ItemText = styled.div`

padding-top: 15vh;
text-align: center;

`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 2rem;
@media (max-width: 768px) {
    flex-direction: column;

}

` 
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
padding: 5px 2rem;
width: 100vw;
width: 18rem;
height: 3rem;
color: #fff;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
text-transform: uppercase;
cursor: pointer;
margin: 10px;
@media (max-width: 768px) {
    width: 90vw;
    
  
}


`
const RightButton = styled(LeftButton)`
background-color: rgba(244, 244, 244, 0.65);
color: rgba(23, 26, 32, 0.8);

`
const DownArrow = styled.img`

height: 2rem;
animation: animateDown infinite 1s;
`

const Buttons = styled.div`

display: flex;
flex-direction: column;



`