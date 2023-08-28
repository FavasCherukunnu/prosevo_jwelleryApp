import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavBar } from './components/navbar';
import { NewsCarousol } from './components/carousol/newsCarousol';
import { Carousel } from './components/carousol/Carousel';
import { Slider } from './components/partnersDiv/PartnersDiv';

function App() {
  const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
  ]
  
  return (
    <div className="landingPage">
      <TopNavBar />
      <div style={{marginTop:'60px',height:'70vh'}}>
        <Carousel title='Trending News'/>
      </div>
      <Slider  heading="Example Slider" slides={slideData}/>
    </div>
  );
}

export default App;
