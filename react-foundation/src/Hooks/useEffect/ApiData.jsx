import React, { useEffect, useState } from "react"




const DataFetching =() =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false);      
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}



export default DataFetching