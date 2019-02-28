import React, {Component} from 'react';
import $ from 'jquery';

class Fetch extends Component{
  constructor(){
    super();
    this.state = {
      result: []
    };
  }
  
  componentDidMount(){
    $.ajax({
      url:this.props.url,
      success: (data) => {
        this.setState({result: data})
      },
      error: (error) => {
        console.log("here u have error", error)
      }
    })
  }

  render(){
    let result = this.state.result
    return(
      <ul>
        {
         this.props.children(result) 
        }
      </ul>
    )
  }
}

export default Fetch;