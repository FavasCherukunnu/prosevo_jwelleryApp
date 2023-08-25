import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import GoldRateComponent from './goldRate';
import { GiGoldNuggets } from 'react-icons/gi';
import { CiUser } from 'react-icons/ci';
import { IconsButton } from './buttons/IconsButton';
import { Link } from 'react-router-dom';
export function TopNavBar() {
  return (
    <div className='topNavBar'>
      <Navbar className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="#home">
            <GiGoldNuggets size={50} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <GoldRateComponent />
            <div style={{width:'10px'}}></div>
            <IconsButton icon={<CiUser size={20}/>}/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

