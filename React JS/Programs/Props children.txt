import React from 'react';
import Greet from '../greet/greet';
class Content extends React.Component {
    render() {
        return (
            <div>
                <Greet>
                    <p>I am child-1</p>
                    <p>I am child-2</p>
                </Greet>
                <Greet>
                    <p>I am child-1</p>
                    <p>I am child-2</p>
                </Greet>
            </div>
        );
    }
}
export default Content;
-----------------------------
import React from 'react';
class Greet extends React.Component {
    render() {
        return (
            <h2>
                This is Greet Component
                {this.props.children}
            </h2>

        );
    }
}
export default Greet;
