import React, { Component } from 'react'
import List from './List';
import axios from 'axios';

export default class RenderList extends Component {
  constructor(){
    super()
    this.state = {
      people: []
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
    return (
      <div className="container">
        {this.state.people.map(person => {
          return <List name={person.name} image={person.image}/>
        })}
      </div>
    )
  }
}

