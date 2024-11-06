import React from 'react';
import PropTypes from 'prop-types'

// String Props 
const Greeting = ({name}) => {
    return (
        <div>
            <h2>Welcome,{name}</h2>
        </div>
    )
};

// Number Props 
const userId = ({id}) => {
    return (
        <div>
            <p>User Id: {id}</p>
        </div>
    )
};



// Boolean Props 
const UserStatus = ({isLoggedIn}) =>{
    return (
        <div>
            <p>{isLoggedIn ? "Welcome back !" : "Please log in."}</p>
        </div>
    )
};



// Array Props 
const ItemList = ({items}) => {
    return (
        <ul>
            {items.map((item, index) =>{
                <li key={index}>{item}</li>
            })}
        </ul>
    )
}


// Object Props 


const UserProfile = (user) =>{
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h2>Location: {user.location}</h2>
        </div>
    )
}



// Function Props 
const Button = ({label, onclick}) => {
    return <button onClick={onclick}>{label}</button>
}


// Children Props 
const Card  = ({children}) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}






// Props Types 

const Product = ({name, price}) =>{
    return (
        <div>
            <h2>Product: {name}</h2> 
            <h2>Price: {price}</h2>
        </div>
    )
}


Product.propTypes ={
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};




// Spread Props 
const Info = ({title, description}) =>{
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}



// Show All 
const ShowAll = () =>{
    const user = {
        name: 'Ovi',
        email: 'ovi@gmail.com'
    }
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const props = {
        title: 'Title',
        description: 'Description'
    }
    return (
        <div>
            <Greeting name="Ovi"></Greeting>
            <userId id={123}></userId>
            <UserStatus isLoggedIn={true}></UserStatus>
            <ItemList items={items}></ItemList>
            <UserProfile user={user}></UserProfile>
            <Button label="Click Me" onclick={() => alert('Button Clicked')}></Button>
            <Card>
                <h2>This is a card</h2>
            </Card>
            <Product name="Product 1" price={10}></Product>
            <Info {...props}></Info>
        </div>
    )
}


export default ShowAll;