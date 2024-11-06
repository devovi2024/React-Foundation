// Basic State Management (মৌলিক স্টেট ম্যানেজমেন্ট)
// useState হুক হলো একটি React হুক যা ফাংশনাল কম্পোনেন্টে স্টেট ব্যবস্থাপনার জন্য ব্যবহৃত হয়। এটি একটি স্টেট ভ্যারিয়েবল এবং সেটার আপডেট করার জন্য একটি ফাংশন প্রদান করে।


import react, { useState } from 'react';

const Counter = () =>{
    const [count, setCount] = useState(0);
    return (
        <div>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    )
} 

export default Counter;