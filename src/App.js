import logo from './logo.svg';
import './App.css';
import SimplePaper from './components/TitlebarBelowImageList';
import DrawerAppBar from './components/DrawerAppBar'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    genre: {
      main: '#b0a727'
    }
  }
});

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
