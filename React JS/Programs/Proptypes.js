import React from 'react';
import { PropTypes } from 'prop-types';
class Student extends React.Component {
  
  render() {
    return (
      <div>
        <p>Student Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
export default Student;
