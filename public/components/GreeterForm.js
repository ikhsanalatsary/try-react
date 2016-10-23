import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap';

export default class GreeterForm extends React.Component {
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
      // console.log(this.props.onNewData);
      nameRef.value = '';
      data.name = name;
    }

    if ( message.length > 0) {
      messageRef.value = '';
      data.message= message;
    }

    this.props.onNewData(data);
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
            <FormControl componentClass="textarea" ref="message" placeholder="Message" />
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
