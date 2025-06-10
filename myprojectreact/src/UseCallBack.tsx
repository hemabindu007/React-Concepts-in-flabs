import  { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);

  return (
    <div>

      <p>Count: {count}</p>&nbsp;
            <button onClick={increment}>Increment</button>
    </div>
  );
}
export default Counter;