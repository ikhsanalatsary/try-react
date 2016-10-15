import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello Mr./Mrs. {name}</h1>
        <p>Dari {message}</p>
      </div>
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
    let data = {};
    var nameRef = this.refs.name;
    var messageRef = this.refs.message;
    var name = nameRef.value;
    var message = messageRef.value;

    if (name.length > 0 || message.length > 0) {
      // console.log(this.props.onNewName);
      nameRef.value = '';
      messageRef.value = '';
      data.name = name;
      data.message= message;
    }

    this.props.onNewName(data);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <textarea ref="message" rows="8" cols="40"></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
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
      <div>
        <Hello name={name} message={message}/>

        <h3>greeter form</h3>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
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
