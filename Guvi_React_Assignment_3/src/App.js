import './App.css';
import CounterComponent from './CounterComponent';
function App(props) 
  {
  console.log(props);
  return(
    <div className="App">
      <CounterComponent componentname={"class"}/>
     </div>
  );
  }

export default App;