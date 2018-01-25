import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (url, query) => (Comp) =>

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: {},
      isLoading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      }) 
      .then(data => this.setState({id: data.id, isLoading: false }))
      .then(error => this.setState({error, isLoading: false}));
  }
  render() {
    const App = ({ data, isLoading, error}) => {
      const id = data.id || [];
    }
    if (error) {
      return <div>{error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading ...</div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React From Seatle Coder Camps</h1>
        </header>
        <div>
        {id.map(id =>
          <div key={id.objectID}>
            <a href={id.url}>{id.title}</a>
          </div>
        )}
      </div>
      </div>
    );
  }
}

export default App;
