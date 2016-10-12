import React from 'react';
import ReactDOM from 'react-dom';

// const Hello = React.createClass({
//   render() {
//     return <h1>Hello World</h1>
//   }
// });

class Hello extends React.Component {
  render() {
    console.log(this);
    return <h1>Hello {this.props.name}</h1>
  }
}

Hello.propTypes = {
  name: React.PropTypes.string.isRequired
}

Hello.defaultProps = {
  name: 'React'
}

ReactDOM.render(<Hello/>, document.getElementById('app'));
