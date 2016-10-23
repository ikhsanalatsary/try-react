import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from 'Greeter';

const firstName = 'Ikhsan';

ReactDOM.render(<Greeter name={firstName}/>, document.getElementById('app'));
