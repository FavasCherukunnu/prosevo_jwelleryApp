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
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
export function TopNavBar() {

  const [goldRate,setGoldRate] = useState({}) 
  const topNavRef = useRef();
  const topNav  = useSelector(
    (state)=>state.homeTopNav.value
  )
  const isNavShadowOn = topNav.showShadow;

  useEffect(
    ()=>{
      
      const handleTopNavShadow= ()=>{
        const ref = topNavRef.current.style;
        ref.boxShadow = isNavShadowOn===true?'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px, rgba(0, 0, 0, 0.1) 0px 0px 4px 0px':''
      }

      handleTopNavShadow();

    },[isNavShadowOn]
  );
  

  return (
    <div className='topNavBar' ref={topNavRef}>
      <Navbar className="navBarMain" >
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

