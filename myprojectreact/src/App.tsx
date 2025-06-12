import './App.css'
// import UserCard from './UserCard';
// import TableData from './TableData';
// import LoggedButton from './Logger';
// import Timer from './UseEffect';
// import DisplayTheme, { ThemeContext } from './UseContext';
// import InputFocus from './UseRef';
// import ExpensiveCounter from './UseMemo';
// import Counter from './UseCallBack';
import RouterCmp from './RoutesCmp';
import Home from './Home';
// import TodoApp from './Todo';


function App() {
    const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
];

  return (
    <>
    <Home/>
<RouterCmp users={users}></RouterCmp>
    </>

  )
}

export default App
