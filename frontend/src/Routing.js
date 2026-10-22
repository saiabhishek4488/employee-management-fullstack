import { BrowserRouter, Route,  Routes } from "react-router-dom";
import InsertStudent from "./InsertStudent";
import UpdateStudent from "./UpdateStudent";
import GetStudent from "./GetStudent";
import Navbar from "./Navbar";

export default function Routing() {
    return(
        <div>
            <BrowserRouter>
             <Navbar/>
            <Routes>
                
                <Route path="/" element={<InsertStudent />}></Route>
                <Route path="/get" element={<GetStudent />}></Route>
                <Route path="/edit/:empno" element={<UpdateStudent />}></Route>


               
            </Routes>
            </BrowserRouter>
        </div>
    )

}