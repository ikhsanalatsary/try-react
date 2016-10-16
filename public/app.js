import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  PageHeader
} from 'react-bootstrap';

class Hello extends React.Component {
  render() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <Col md={6} mdOffset={3}>
        <PageHeader>Hello {name}</PageHeader>
        <p>Dari {message}</p>
      </Col>
    );
  }
}

class GreeterForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(ReactDOM.findDOMNode(this.refs.name).value);
    let data = {};
    var nameRef = ReactDOM.findDOMNode(this.refs.name);
    var messageRef = ReactDOM.findDOMNode(this.refs.message);
    var name = nameRef.value;
    var message = messageRef.value;

    if (name.length > 0) {
      // console.log(this.props.onNewName);
      nameRef.value = '';
      data.name = name;
    }

    if ( message.length > 0) {
      messageRef.value = '';
      data.message= message;
    }

    this.props.onNewName(data);
  }

  render() {
    return (
      <Col md={6} mdOffset={3}>
      <h3>Greeter Form</h3>
      <Form horizontal onSubmit={this.onFormSubmit}>
        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" name="name" ref="name" placeholder="Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalTextarea">
          <Col componentClass={ControlLabel} sm={2}>
            Textarea
          </Col>
          <Col sm={10}>
            <FormControl componentClass="textarea" ref="message" placeholder="textarea" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
      </Col>
    );
  }
}

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    // initialize
    this.handleNewName = this.handleNewName.bind(this);
    this.state = {
      name: this.props.name,
      message: this.props.message
    }
    console.log(this);
  }

  handleNewName(data) {
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
        <GreeterForm onNewName={this.handleNewName}/>
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

const firstName = 'Ikhsan';

ReactDOM.render(<Greeter name={firstName}/>, document.getElementById('app'));
