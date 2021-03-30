import './App.css';
import Leftboard from './components/Leftboard';
import CenterSpace from './components/CenterSpace'
import Rightboard from './components/Rightboard'

function App() {
  return (
    <div className="App">
      <Leftboard/>
      <CenterSpace/>
      <Rightboard/>
    </div>
  );
}

export default App;
