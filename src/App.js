import logo from './logo.svg';
import './App.css';
import { BasicExample } from './components/button';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'end'}}>
      <BasicExample/>
    </div>
  );
}

export default App;
