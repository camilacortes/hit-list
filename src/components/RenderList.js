import React, { Component } from 'react'
import List from './List';
import axios from 'axios';

export default class RenderList extends Component {
  constructor(){
    super()
    this.state = {
      people: {}
    }
  }

componentDidMount(){
  axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
    .then(response => {
      const data = response.data;
      this.setState({people : data})
    })
}


  render() {
    console.log(this.state.people)

    return (
      <div>
       
        <List/>
        <ul>
      </ul>
        Render list comp
      </div>
    )
  }
}

