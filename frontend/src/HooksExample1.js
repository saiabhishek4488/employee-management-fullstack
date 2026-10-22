import { useRef, useState } from "react";

function HooksExample1() {

    const [seconds, setSeconds] = useState(0);
    const inputRef = useRef(null);

    const startTimer = () => {

        if (inputRef.current !== null)
            return;

        inputRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {

        clearInterval(inputRef.current);
        inputRef.current = null;
    };

    return (
        <div>

            {seconds}

            <button
                type="button"
                onClick={startTimer}
            >
                start
            </button>

            <button
                type="button"
                onClick={stopTimer}
            >
                stop
            </button>

        </div>
    );
}

export default HooksExample1;