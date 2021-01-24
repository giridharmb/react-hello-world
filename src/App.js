//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import GreetWithProps from './components/GreetWithProps'
import Welcome from './components/Welcome'
import WelcomeWithProps from './components/WelcomeWithProps'
import Hello from './components/Hello'
import Message from './components/Message'
import HelloWithoutJSX from './components/HelloWithoutJSX'
import GreetDS from './components/GreetWithDestructuring'
import GreetDSFunc from './components/GreetDestructionInFunctionBody'
import WelcomeDestructuringClass from './components/WelcomeDestructuringClass'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import DataList from './components/DataList'

function App() {
  return (
    <div className="App">
      <Greet />
      <GreetWithProps name="Diana" age="55">
        <p>This is a child</p>
      </GreetWithProps>
      <GreetWithProps name="Bruce" age="34">
        <button>Exec</button>
      </GreetWithProps>
      <Welcome />
      <WelcomeWithProps name="Joe Biden" />
      <Hello />
      <HelloWithoutJSX />
      <Message />
      <GreetDS name="Wayne" age="55" />
      <GreetDSFunc name="Jack" age="15" />
      <WelcomeDestructuringClass name="Giri" age="40" />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <br/>
      <UserGreeting />
      <br/>
      <DataList />
      <br/>
    </div>
  );
}

export default App;
