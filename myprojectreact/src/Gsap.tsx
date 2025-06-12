import { useEffect, useRef } from "react";
import gsap from "gsap";
function Gsap() {
      const boxRef = useRef(null);
      useEffect(() => {
    gsap.to(boxRef.current, { x: 100, duration: 1 });
  }, []);
    return(
              <div ref={boxRef} style={{ width: 100, height: 100, background: 'orange',alignItems:"center" , margin : "10%", padding:"10%"}} >
          <h5>GSAP</h5>
      </div>
    )
}

export default Gsap;
