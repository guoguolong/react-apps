// @ts-ignore
import { ColorPickerField, ImageField } from 'koda-react-widgets';
import logo from './logo.svg';
import './App.css';

console.log(ColorPickerField, ImageField);

function App() {
  return (
    <div className="App">
        <ImageField />
        <ColorPickerField />
    </div>
  );
}

export default App;
