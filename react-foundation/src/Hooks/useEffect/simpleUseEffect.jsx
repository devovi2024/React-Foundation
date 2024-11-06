import react, { useState , useEffect } from 'react';

const SimpleUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);

    })


    return (
        <div>
            <h1>Count :{count} </h1>
            <button onClick={() => setCount(count + 1)}>Next</button>
            <button onClick={() => setCount(prev => prev - 1 )}>Prev</button>
            <button onClick={() => setCount(0)}> Reset</button>

        </div>
    )
}

export default SimpleUseEffect