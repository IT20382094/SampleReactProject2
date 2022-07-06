import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Greet name="Bruce">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark">
        <button>Action</button>
      </Greet>
      <Greet name="Diana"/>

      <Welcome name="ABC"/>
      <Welcome name="DEF"/>
      <Welcome name="GHI"/>
      <Hello/>

      <Message/>

      <Counter/>

      <FunctionClick/>

      <ClassClick/>

      <EventBind/>
    </div>
  );
}

export default App;
