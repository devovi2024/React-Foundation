// ডেটা টাইপ চেক করার জন্য আমরা prop-types লাইব্রেরি ব্যবহার করতে পারি,

import React from 'react';
import PropTypes from 'prop-types'

const ChildComponent = (props) =>{
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}


// Defining PropTypes
ChildComponent.protoTypes = {
    name: PropTypes.string.isRequired,
}


// Data Here 
const ParentComponent = () =>{
    const userName = "Arfan Ovi";
    return (
        <div>
            <ChildComponent name={userName}></ChildComponent>
        </div>
    )
}

export default ParentComponent;