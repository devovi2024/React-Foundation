import React from 'react';

class ClassComponents extends React.Component {
    render(){
        const {name} = this.props;
        return (
            <div>
                <h4>Its a Class component here </h4>
                <h4>{name}</h4>
            </div>
        )
    }
}


export default ClassComponents;