import React from 'react';
import { connect } from 'react-redux';
import { getSampleEmployees } from '../actions/sample';

interface IProps {
  getSampleEmployees: () => {};
}

class SampleEmployeesContainer extends React.Component<IProps>{
  componentDidMount() {
    this.props.getSampleEmployees();
  }
  render() {
    return this.props.children;
  }
}

export default connect(null, { getSampleEmployees })(SampleEmployeesContainer);

