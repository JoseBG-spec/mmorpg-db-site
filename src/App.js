import logo from './logo.svg';
import './App.css';
import SimplePaper from './components/TitlebarBelowImageList';
import DrawerAppBar from './components/DrawerAppBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DrawerAppBar/>
        
      </header>
    </div>
  );
}

export default App;
