import React from 'react';
import { PropTypes } from 'prop-types';
class Container extends React.Component {
render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
Container.propTypes = {
  children: PropTypes.element
};
export default Container;
---------------------------------
import React from 'react';
import Container from './Container';
import Student from './Student';
class App extends React.Component {
render() {
    return (
      <div>
        <Container>
          <Student name="Mark" age="24" />
          <Student name="Peter" age="25" />
        </Container>
      </div>
    );
  }
}
export default App;
