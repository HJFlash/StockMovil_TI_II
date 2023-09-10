import logo from './logo.svg';
import './App.css';
import Inicio from './components/Inicio';
import { StockFooter } from './components/StockFooter';

function App() {
  return (
    <div className="">
      <header className="App-fondo w-full">
        <Inicio/>
      </header>
      <footer>
        <StockFooter/>
      </footer>
    </div>
  );
}

export default App;
