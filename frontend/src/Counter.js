import { useState } from "react";

function Counter() {
    const [counter,setCounter]=useState(0);
    const [student,setStudent]=useState({
        stno:1,
        stname:'avinash'
    });

    const handleClickInc = () => {
        setCounter(counter+1);

    };
    const handleClickDec = () => {
        setCounter(counter-1);

    };
    const changename= () => {
        setStudent({stname: 'kari'});
    };
    return(
        <div>
            <h1> this is counter function</h1>
            <label>Rotis:</label> {counter}
            <button type="button" onClick={handleClickInc}>+</button>
            <button type="button" onClick={handleClickDec}>-</button>
            <p>{student.stname}</p>
            <button type="button" onclick={changename}>change Name</button>
        </div>
    );
}
export default Counter;