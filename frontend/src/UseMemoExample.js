import { useMemo, useState, useCallback } from "react";

function UseMemoExample() {

    const [count, setCount] = useState(0);

    // useMemo
    const result = useMemo(() => {
        return count * count;
    }, [count]);

    // useCallback
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>

            <h2>Count value: {count}</h2>

            <button type="button" onClick={increment}>
                Increment
            </button>

            <h2>Square is {result}</h2>

        </div>
    );
}

export default UseMemoExample;