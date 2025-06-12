import { useState } from "react";

function CssAnimi() {
    const [show, setShow] = useState(false);
    return(
    <div style={{ margin : "7%", padding:"10%"}}>
       <button onClick={() => setShow(prev => !prev)}>Toggle</button>
       {show && <h1 className="box show">Hello CSS Animations</h1>}
    </div>
    )
}
export default CssAnimi