import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavBar } from './components/navbar';
import { NewsCarousol } from './components/carousol/newsCarousol';
import { Carousel } from './components/carousol/Carousel';
import { Slider } from './components/partnersDiv/PartnersDiv';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { hideShadow, showShadow } from './redux/homeTopNav/homeTopNavSlice';

function App() {

  const dispatch = useDispatch();
  //scroll navBarEffer
  useEffect(
    () => {

      const handleScroll = ()=>{
        
        if(window.scrollY>8){
          dispatch(showShadow())
        }else if(window.screenY<8){
          dispatch(hideShadow())
        }

      }

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);

    }, []
  )

  return (
    <div className="landingPage">
      <TopNavBar />
      <div style={{ height: '70vh' }}>
        <Carousel />
      </div>
      <Slider />
    </div>
  );
}

export default App;
