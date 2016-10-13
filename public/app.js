import React from 'react';
import ReactDOM from 'react-dom';

// const Greeter = React.createClass({
//   render() {
//     return <h1>Greeter World</h1>
//   }
// });

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    // initialize
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      name: this.props.name
    }
    console.log(this);
  }
  onButtonClick(e) {
    e.preventDefault();
    console.log(this.refs.name.value);
    // alert(this.refs.name.value);
    var nameRef = this.refs.name;
    var name = nameRef.value;

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name
      });
      nameRef.value = '';
    }
  }

  render() {
    console.log(this);
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button type="submit">Set Name</button>
        </form>
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
