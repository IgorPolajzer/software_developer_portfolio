import './App.css';
import Topic from './components/Topic';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Topic/>
      <Topic/>
      <Topic/>
    </div>
  );
}

export default App;
