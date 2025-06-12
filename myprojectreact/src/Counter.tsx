import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterSlice";

function CounterRedux() {
 const count = useSelector((state : any)=>state.counter.value)
 const dispatch = useDispatch()
 return(
    <div style={{padding:'10px',margin:'15%'}}>
        <h1>Count : {count}</h1>
        <div>
            <span>Increase by 1 : &nbsp;</span><button onClick={()=>dispatch(increment())}><b>+</b></button><br />
        </div>
        <div style={{paddingTop:'10px'}}>
            <span>Decrease by 1 : &nbsp;</span><button onClick={()=>dispatch(decrement())}><b>-</b></button><br />
        </div>
         <div style={{paddingTop:'10px'}}>
            <span>Increase by 5 : &nbsp;</span><button onClick={()=>dispatch(incrementByAmount(5))}><b>+5</b></button>
         </div>
    </div>
 )
}
export default CounterRedux;