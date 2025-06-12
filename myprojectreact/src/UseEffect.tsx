import  { useState, useEffect } from 'react';
import DisplayTheme, { ThemeContext } from './UseContext';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{padding:"20%"}}>
      <p>Timer: {seconds} seconds</p>
       <ThemeContext.Provider value="white">
      <DisplayTheme />
    </ThemeContext.Provider>
    </div>
  );
}

export default Timer;