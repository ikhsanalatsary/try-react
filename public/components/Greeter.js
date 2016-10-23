import React from 'react';
import { Col } from 'react-bootstrap';
import Hello from 'Hello';
import GreeterForm from 'GreeterForm';

export default class Greeter extends React.Component {
  constructor(props) {
    super(props);
    // initialize
    this.handleNewData = this.handleNewData.bind(this);
    this.state = {
      name: this.props.name,
      message: this.props.message
    }
    console.log(this);
  }

  handleNewData(data) {
    console.log(data);
    this.setState(data);
  }

  render() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <Col md={12}>
        <Hello name={name} message={message}/>
        <br/>
        <GreeterForm onNewData={this.handleNewData}/>
      </Col>
    );
  }
}

Greeter.propTypes = {
  name: React.PropTypes.string.isRequired
}

Greeter.defaultProps = {
  name: 'React',
  message: 'This is from default props'
}
