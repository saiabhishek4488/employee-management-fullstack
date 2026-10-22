
import { useState } from "react";

function ConditionalRendering() {
    const [status, setStatus] = useState('pending');
    const [count, setCount] = useState(14);

    switch (status) {
        case 'pending':
            return (
                <div>
                    <h1>The case is still pending</h1>
                    <button onClick={() => setStatus('completed')}>
                        Complete Case
                    </button>
                    <h2>The count is {count}</h2>
                    <button onClick={() => setCount(count + 1)}>
                        Increase Count
                    </button>
                    <h2>Hello, good morning one and all</h2>
                    {status ? <p>Hello</p> : <p>Go away</p>}
                    <h2>Good morning, Abhishek</h2>
                </div>
            );

        case 'completed':
            return (
                <div>
                    <h1>The case is completed</h1>
                    <button onClick={() => setStatus('pending')}>
                        Reopen Case
                    </button>
                    <h2>The count is {count}</h2>
                    <button onClick={() => setCount(count + 1)}>
                        Increase Count
                    </button>
                    <h2>Hello, good morning one and all</h2>
                    {status ? <p>Hello</p> : <p>Go away</p>}
                    <h2>Good morning, Abhishek</h2>
                </div>
            );

        default:
            return <h1>Unknown status</h1>;
    }
}

export default ConditionalRendering;