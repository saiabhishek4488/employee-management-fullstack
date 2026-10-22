import { useRef, useState } from "react";

function HooksExample() {

    const [seconds, setSeconds] = useState(0);
    const inputRef = useRef(null);

    return (
        <div>
            <input type="text" ref={inputRef}></input>

            <button
                type="button"
                onClick={() => { inputRef.current.focus() }}
            >
                click
            </button>

            {seconds}

            <button
                type="button"
                onClick={() => { setSeconds(seconds + 1) }}
            >
                increment
            </button>
        </div>
    );
}

export default HooksExample;