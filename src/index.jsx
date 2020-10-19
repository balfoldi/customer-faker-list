import React from "react";
import ReactDOM from "react-dom";
import Clients from './components/Client'
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <div className='d-flex flex-wrap justify-content-around mb-3'>
        <Clients />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
