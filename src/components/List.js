import React from 'react'

export default function List(props) {
  return (
    <div className="info-card">
      <h1 className="name">{props.name}</h1> 
      <img src={props.image} className="image"></img>   
    </div>
  )
}

