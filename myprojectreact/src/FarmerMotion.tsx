import { motion } from "framer-motion";
function FarmerMotion() {
    return(
         <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: 120, height: 100, background: "mediumseagreen", textAlign: "center",margin : "7%", padding:"10%" }}>
      Hello Motion!
    </motion.div>
    )
}
export default FarmerMotion