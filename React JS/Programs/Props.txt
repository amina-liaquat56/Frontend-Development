import React from 'react';
import Child from '../child/child';
class Parent extends React.Component {
    render() {
        let user = { name: 'sachin', age: 35 }
        return (
            <div>
                This is Parent Component
                <Child name={user.name} age={user.age} />
            </div>
        );
    }
}
export default Parent;
-------------------
import React from 'react';
class Child extends React.Component {
    render() {
        return (
            <div>
                <h2>This is child component</h2>
                <h2>{this.props.name}--{this.props.age}</h2>
            </div>
        );
    }
}
export default Child;
