import react from 'react'


const ClickEvent = () =>{
    const handleClick = () => {
        alert('Clicked')
    }
    return (
        <div>
            <button onClick={handleClick}>Click Now</button>
        </div>
    )
}

export default ClickEvent