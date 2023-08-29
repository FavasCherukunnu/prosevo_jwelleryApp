import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavBar } from './components/navbar';
import { NewsCarousol } from './components/carousol/newsCarousol';
import { Carousel } from './components/carousol/Carousel';
import { Slider } from './components/partnersDiv/PartnersDiv';

function App() {
  
  
  return (
    <div className="landingPage">
      <TopNavBar />
      <div style={{marginTop:'60px',height:'70vh'}}>
        <Carousel/>
      </div>
      <Slider />
    </div>
  );
}

export default App;
