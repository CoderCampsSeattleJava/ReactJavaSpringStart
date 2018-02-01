import React, { Component } from 'react';
import axios from "axios";

// const url = 'http://localhost:8080/api/all.json';

// class App extends Component {

//  constructor() {
//    super()
//    this.state = {
//      data: [],
//    }
//  }
//  componentWillMount() {
//    return fetch(url)
//      .then((response) => response.json())
//      .then((json) => {

//        this.setState({
//          data: json
//        })
//        console.log('parsed json', json)
//      })
//    }
//  render() {

//    return (
//      <div>
//        {this.state.data.map( (dynamicData,key)=>
//          <div key={key}>
//            <p>{dynamicData.name}{dynamicData.email}</p>
//            </div>

//          )
//        }

//      </div>
//    )
//  }
// }


const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      {/* <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} /> */}
      <div>
        <div style={{ fontWeight: "bold", color: "blue" }}>
       {"Id: " + props.id + " " + ", Name: " + " " +props.name + " " + ", Email: " + " " + props.email}
    
        </div>
        <div>
          {props.blog}
        </div>
      </div>
    </div>
  );
};

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  state = {
    userName: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(`http://localhost:8080/api/all.json`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        // this.setState({ userName: "" });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Type command"
          required
        />
        <button type="submit">Test</button>
      </form>
    );
  }
}

class App1 extends React.Component {
  state = {
    cards: []
  };

  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />

      </div>
    );
  }
}


export default App1;