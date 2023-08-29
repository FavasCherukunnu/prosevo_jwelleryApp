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
import { GoldenButton } from './buttons/goldenButton';
import { HoverButton } from './buttons/hoverButton';
export function TopNavBar() {
  return (
    <div className='topNavBar'>
      <Navbar fixed='top' className="navBarMain" >
        <Container>
          {/* <Navbar.Brand href="#home">
            <GiGoldNuggets size={50} />
          </Navbar.Brand> */}
          <Nav className="ms-auto">
            <HoverButton button={<GoldRateComponent />}>
                <div>
                  Gold Rate Displays here
                </div>
            </HoverButton>
            <div style={{ width: '10px' }}></div>
            <HoverButton button={<IconsButton icon={<CiUser size={20} />}/>}>
              <div className='loginCard'>
                <span>You are not loggedin</span>
                <div className='innerDiv'>
                  <GoldenButton>Login</GoldenButton>
                  <GoldenButton>SignUp</GoldenButton>
                </div>
              </div>
            </HoverButton>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

