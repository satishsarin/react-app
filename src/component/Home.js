import React, {Component} from 'react';
import Fetch from './http/Fetch';

class Home extends Component{
  render(){
    return(
      <div>
        <div>Fetch user data from API</div>
        <Fetch url="https://jsonplaceholder.typicode.com/users">
          {
            (data) => {
                return data.map((content, index) => {
                  return <li key={index}>{content.name}</li>
                })
            }
          }
        </Fetch>
      </div>
    )
  }
}

export default Home;