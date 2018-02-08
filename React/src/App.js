import React, { Component } from 'react';
import axios from "axios";
import Register from './containers/Register';
// import Login from './containers/Login';

// const url = 'http://localhost:8080/api/post.json';

// class App extends Component {
// render () {
//   return (
//     // <div className="Register">
//     // <Register />
  
//     <div className="Login">
//     <Login />
//     </div>
//   //  </div>
//   );
// }
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
//       <div>
//         {this.state.data.map( (dynamicData,key)=>
//           <div key={key}>
//             <p>{dynamicData.name}{dynamicData.email}</p>           </div>

//          )
//         }

//       </div>
//     )
//   }
// }


const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      {/* <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} /> */}
      <div>
        <div style={{ fontWeight: "bold", color: "blue" }}>
       {"Id: " + props.id + " " + ", Name: " + " " + props.name + " " + ", Email: " + " " + props.email}
    
        </div>
        <div>
          {props.href + " One more item (href)"}
        </div>
      </div>
    </div>
  );
};

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
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
      .get(`http://localhost:8080/api/users?id=${this.state.id}`)
      .then(resp => {
      
        if(resp.data.id !== undefined) {
          this.props.onSubmit(resp.data);
        } else {console.log("ha ha")}
        // this.setState({ userName: "" });
      });
      
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.id}
          onChange={event => this.setState({ id: event.target.value })}
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


export default Register;