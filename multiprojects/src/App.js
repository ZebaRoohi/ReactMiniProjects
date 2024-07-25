
import './App.css';
import Chat from './components/chatgemini/Chat';
import CloudinaryImage from './components/CloudinaryImage';
import Excel from './components/excel/Excel';
import GeoLocation from './components/GeoLocation';

function App() {
  return (
    <div className="App">
      {/* <GeoLocation />
      <CloudinaryImage />
      <Chat /> */}
      <Excel />
    </div>
  );
}

export default App;
