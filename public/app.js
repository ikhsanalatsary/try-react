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
    var nameRef = this.refs.name;
    var name = nameRef.value;

    if (typeof name === 'string' && name.length > 0) {
      nameRef.value = '';
      console.log(this.props.onNewName);
      this.props.onNewName(name);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button type="submit">Set Name</button>
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
      name: this.props.name
    }
    console.log(this);
  }

  handleNewName(name) {
    this.setState({
      name
    });
  }

  render() {
    var name = this.state.name;
    var message = this.props.message;
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
