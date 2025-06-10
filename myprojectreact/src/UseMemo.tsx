import { useState, useMemo } from 'react';

function ExpensiveCounter() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 3; i++) {
      total += i;
    }
    return total + count;
  }, [count]); // Only recalculates if 'count' changes

  return (
    <div>
      <p>Expensive value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
export default ExpensiveCounter;
