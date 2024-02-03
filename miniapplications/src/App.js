
import './App.css';
import AlertMessage from './components/AlertBox';
import Backgroundcolor from './components/BackgroundChanger';
import DigitalClock from './components/DigitalClock';
import Gallery from './components/Gallery';
import Timer from './components/Timer';
import WordLetterCounter from './components/WordCounter';
import UserFeed from './components/userFeed/UserFeed';

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <UserFeed />
      <Gallery />
      <AlertMessage />
      <Timer />
      <Backgroundcolor />
      <WordLetterCounter />
    </div>
  );
}

export default App;
