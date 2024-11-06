
import react, { useState } from 'react';

const itemList = () =>{
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('')

    const addItem = () =>{
        if(inputValue) {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    }


    return (
        <div style={{textAlign: 'center', padding: '10px', margin: '10px', border: '1px solid black'}}>
            <h1>Item List... </h1>
            <input 
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter an item'
            />
            <button onClick={addItem}>Add Items</button>

            <ul>
                {
                    items.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}


export default itemList