import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavBar } from './components/navbar';
import { NewsCarousol } from './components/carousol/newsCarousol';
import { Carousel } from './components/carousol/Carousel';

function App() {
  const slides = [
    { url: "https://asia.omsystem.com/content/000107506.jpg", title: "beach" },
    { url: "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg", title: "boat" },
  ];

  return (
    <div className="landingPage">
      <TopNavBar />
      <div style={{marginTop:'60px'}}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
