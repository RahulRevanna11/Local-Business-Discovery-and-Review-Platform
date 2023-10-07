import React from 'react'
import "./card.css"
const card = (props) => {
  return (
    
    <div class="card  ">
    <div class="align">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
    </div>

    <h1>{props.title}</h1>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?
    </p>
</div>
  )
}

export default card
