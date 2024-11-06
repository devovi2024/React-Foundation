import React , { useEffect, useState } from 'react';

const MultipleDataFetch = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);



    useEffect (() => {
        const fetchData = async () => {
            const usersURL = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersData = await usersURL.json();
            setUsers(usersData) 


            const postURL = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postData = await postURL.json();
            setPosts(postData)
        }
        fetchData();
    }, []);


    const styles = {
        userCount: {
            color: 'red',
            fontSize: '20px',
            fontWeight: 'bolder',
            borderRadius: '5px',
            padding: '5px',
        }
    }

    return (
        <div>
            <div>
            <h1>Users List </h1>
            <p style={styles.userCount}>({users.length})</p>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
            </div>

            <div>
                <h2>User Posts</h2>
                <i>({posts.length})</i>
                <ul>
                    {
                        posts.map(p => (
                            <li key={p.id}>
                                {p.title}
                            </li>
                        ))
                    }
                </ul>
            </div>


        </div>

        
    )
}


export default MultipleDataFetch;