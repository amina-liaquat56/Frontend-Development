import React from 'react';
class Conditional extends React.Component {
    render() {
        let x = prompt("enter a number")
        if(x%2==0){
            return ( <h2>{x} is even</h2> )
        }
        else{
            return ( <h2>{x} is odd</h2> )
        }     
    }
}
export default Conditional;
