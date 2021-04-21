import { ColorPickerField, ImageField } from 'koda-react-widgets';
import logo from './logo.svg';
import './App.css';

console.log(ColorPickerField, ImageField);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
        <ColorPickerField />
      </header>
    </div>
  );
}

export default App;
