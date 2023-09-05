import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import {GoldRateComponent} from './goldRates/goldRate';
import { GiGoldNuggets } from 'react-icons/gi';
import { CiUser } from 'react-icons/ci';
import { IconsButton } from './buttons/IconsButton';
import { Link } from 'react-router-dom';
import { GoldenButton } from './buttons/goldenButton';
import { HoverButton } from './buttons/hoverButton';
import { HoverComponent } from './goldRates/hoverComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { goldRateApi, goldRateToken } from '../constants/api';
export function TopNavBar() {

  const [goldRate,setGoldRate] = useState({}) 

  

  return (
    <div className='topNavBar'>
      <Navbar fixed='top' className="navBarMain" >
        <Container>
          
          <Nav className="ms-auto">
            <HoverButton isPinnable button={<GoldRateComponent prevRate={goldRate.prev_carrot22} currRate={goldRate.carrot22} />}>
                <HoverComponent/>
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

