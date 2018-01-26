import React, { Component } from 'react';

const url = 'http://localhost:8080/api/all.json';

class App extends Component {

 constructor() {
   super()
   this.state = {
     data: [],
   }
 }
 componentWillMount() {
   return fetch(url)
     .then((response) => response.json())
     .then((json) => {
     
       this.setState({
         data: json
       })
       console.log('parsed json', json)
     })
   }
 render() {

   return (
     <div>
       {this.state.data.map( (dynamicData,key)=>
         <div key={key}>
           <a href={'mailto: ' + dynamicData.email}>{dynamicData.name}</a>
           </div>

         )
       }

     </div>
   )
 }
}

export default App;