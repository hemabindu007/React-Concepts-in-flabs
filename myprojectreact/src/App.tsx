
// import { useState } from 'react';
import './App.css'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import UserCard from './UserCard';
import TableData from './TableData';
import LoggedButton from './Logger';
import Timer from './UseEffect';
import DisplayTheme, { ThemeContext } from './UseContext';
import InputFocus from './UseRef';
import ExpensiveCounter from './UseMemo';
import Counter from './UseCallBack';
import TodoApp from './Todo';


function App() {
  // const [show, setShow] = useState(false);
     const boxRef = useRef(null);
    const [show, setShow] = useState(false);
    const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
];
  useEffect(() => {
    gsap.to(boxRef.current, { x: 100, duration: 1 });
  }, []);
  return (
    <>
      <div ref={boxRef} style={{ width: 100, height: 100, background: 'orange' }} >
      <h5>Hello GSAP</h5>
  </div>
  <div>
     <button onClick={() => setShow(!show)}>Toggle</button>
      <h1 className={`box ${show ? "show" : ""} `} >Hello CSS Animations</h1>
  </div>
   <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: 120, height: 100, background: "mediumseagreen", textAlign: "center",paddingTop:"20px" }}
    >
      Hello Motion!
    </motion.div>
      <div>
      {users.map(user => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
    <div>
      <TableData></TableData>
    </div>
    <div>
      <LoggedButton></LoggedButton>
    </div>
    <div>
      <Timer></Timer>
    </div>
    <div>
      <ThemeContext.Provider value="darklight">
      <DisplayTheme />
    </ThemeContext.Provider>
    </div>
    <div>
      <InputFocus></InputFocus>
    </div>
    <div>
      <ExpensiveCounter></ExpensiveCounter>
    </div>
     <div>
    <Counter />
    </div>
      <div>
        <TodoApp></TodoApp>
      </div>
    </>

  )
}

export default App
