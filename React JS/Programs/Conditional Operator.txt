import React from 'react';
class Conditional extends React.Component {
    render() {
        let x = 4;
        return (
            <h1>{x % 2 == 0 ? `${x} is Even` : `${x} is odd`}</h1>
        )
    }
}
export default Conditional;
