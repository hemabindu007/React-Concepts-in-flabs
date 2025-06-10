import  { useEffect, useRef } from 'react';

function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null); 
  const isFocusedRef = useRef(true); 
 const handleClick = () => {
    //add focus
    // if (inputRef.current) {
    //   inputRef.current.focus(); // now TypeScript knows `.focus()` exists
    // }
    // remove focus
    //   if (inputRef.current) {
    //   inputRef.current.blur(); // now TypeScript knows `.focus()` exists
    // }
    if (inputRef.current) {
      if (isFocusedRef.current) {
        inputRef.current.blur(); // remove focus
      } else {
        inputRef.current.focus(); // set focus
      }
      isFocusedRef.current = !isFocusedRef.current; // toggle state
    }
  };
// autofocus
  useEffect(()=>{
if (inputRef.current) {
      inputRef.current.focus(); // now TypeScript knows `.focus()` exists
    }
  },[])

  return (
    <div>
      <input ref={inputRef} type="text" />&nbsp;
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
export default InputFocus;
