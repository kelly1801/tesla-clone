import React,{useState} from 'react'
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  

  const cars = useSelector(selectCars)
  alert(cars)
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

<CustomMenu onClick={() => setMenuOpen(true)}/>
        </List>
    {
      menuOpen &&
       <BurguerNav >
    
    <CloseBtn onClick={() => setMenuOpen(false)}/>


       <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Solar Roof</a></li>
        <li><a href='#'>Solar Panels</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
       <li><a href='#'>Charging</a></li>
        <li><a href='#'>Find Us</a></li>
        <li><a href='#'>Support</a></li>
        <li><a href='#'>Investor Relations</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Account</a></li>
        <li><a href='#'>More</a></li>
      

    </BurguerNav >
    }

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
z-index: 1;

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

const BurguerNav = styled.ul`
background-color: white;
position: fixed;
top: 0;
bottom: 0;
right: 0;
width: 20rem;
padding: 1.5rem 2rem;
z-index: 2;
transition: all 2s ease;

li:hover{
  background-color:  #f2f2f2;
}
`
const CloseBtn = styled(CloseIcon)`
position: absolute;
right: 1rem;
top: 10px;
cursor: pointer;
`