import React from 'react';




// আমরা কোনো প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠাতে চাই, তখন প্রপস ব্যবহার করি।

const ParentComponent =() =>{
    const userName = "Ovi";
    return(
        <div>
            <ChildComponent name={userName}></ChildComponent>
        </div>
    )
}

const ChildComponent =(props) =>{
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}

export default ParentComponent;