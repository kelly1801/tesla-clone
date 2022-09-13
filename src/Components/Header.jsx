import React from 'react'
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';



function Header() {
  return (
    <Container>

<figure>
  <img src="./images/logo.svg" alt='tesla logo' />
</figure>
<Menu>
      <List>
        <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Solar Roof</a></li>
        <li><a href='#'>Solar Panels</a></li>
        </List>
        </Menu>

       
        <List>
<li><a href="#">Shop</a></li>
<li><a href="#">Account</a></li>
<li><a href="#">Menu</a></li>

<CustomMenu />
        </List>
    
    

    </Container>
    
  )
}

export default Header


const Container = styled.div`
min-height: 4rem;
position: fixed;
display: flex;
align-items: center;
padding: 0 1.2rem;
justify-content: space-between;
width: 100%;

`
const Menu = styled.div`

display: flex;
align-items: center;
justify-content: center;
margin-left: 8rem;
text-align: center;
@media(max-width: 768px) {
  display: none;
}

`
const List = styled.ul`

display: flex;
justify-content:center;
align-items:center;
`
const CustomMenu = styled(MenuIcon)`

cursor: pointer;
`