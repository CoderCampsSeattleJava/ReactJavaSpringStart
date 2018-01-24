const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: [] };
  }
  componentDidMount() {
    client({
      method: 'GET', path: '/ api / user'
    }).done(response => {
      this.setState({ user: response.entity._embedded.user })

    });
  }
  render() {
    return (
      <UserList user={this.state.user} />
    )
  }
}
