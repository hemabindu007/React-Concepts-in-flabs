import { Route, Routes } from "react-router-dom";
import Gsap from "./Gsap";
import CssAnimi from "./CssAnimi";
import FarmerMotion from "./FarmerMotion";
import UserCard from "./UserCard";
import TableData from "./TableData";
import LoggedButton from "./Logger";
import Timer from "./UseEffect";
import InputFocus from "./UseRef";
import CounterRedux from "./Counter";
// import Counter from "./UseCallBack";

const RouterCmp = ({users} : any)=>(
    <Routes>
        <Route path="page/" element={<Gsap/>}/>
        <Route path="page/cssAnimi" element={<CssAnimi/>}/>
        <Route path="page/farmerMotion" element={<FarmerMotion/>}/>
        <Route path="page/users" element={<UserCard users={users}/>}/>
        <Route path="page/tabdata" element={<TableData/>}/>
        <Route path="page/load" element={<LoggedButton/>}/>
        <Route path="page/timer" element={<Timer/>}/>
        <Route path="page/focus" element={<InputFocus/>}/>
        <Route path="page/reduxCount" element={<CounterRedux/>}/>
    </Routes>
)
export default RouterCmp;