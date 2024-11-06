import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count : 0
        }
    };

    incrementCOunt = () =>{
        this.setState({
            count : this.state.count + 1
        })
    };

    decrementCount = () =>{
        this.setState({
            count : this.state.count - 1
        })
    };

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.incrementCOunt} >Increase</button>
                <button onClick={this.decrementCount}>Decrease</button>
            </div>
        )
    }

}


export default Counter;