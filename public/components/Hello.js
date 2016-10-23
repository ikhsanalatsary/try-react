import React from 'react';
import { Col, PageHeader } from 'react-bootstrap';

export default class Hello extends React.Component {
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
