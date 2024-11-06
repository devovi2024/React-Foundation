// কখনো কখনো আমাদের জটিল ডাটা স্ট্রাকচার যেমন অবজেক্ট বা অ্যারে স্টেটে রাখতে হতে পারে। এ ক্ষেত্রে, useState ব্যবহার করে আমরা সহজেই এসব ডাটা পরিচালনা করতে পারি।

import react, { useState } from 'react';



const UserProfile = () => {
    // const [user, setUser] = useState({
    //     name: 'ovi',
    //     email: 'ovi@gmail.com',
    //     age: 24,
    //     location: 'Pune'
    // });

    const [user, setUser] = useState({
        name: '',
        email: '',
        age: '',
        location: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        alert(`Name: ${user.name}\nEmail: ${user.email}\nAge: ${user.age}\nLocation: ${user.location}`)
        setUser({
            name: '',
            email: '',
            age: '',
            location: ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" name="age" value={user.age} onChange={handleChange} />
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" name="location" value={user.location} onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default UserProfile