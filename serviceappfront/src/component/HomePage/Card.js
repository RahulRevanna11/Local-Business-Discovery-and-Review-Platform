import React from 'react'
import "./card.css"
import {Link} from "react-router-dom";
const card = ({name,icon}) => {
  console.log(name);
  return (
    <Link to={"/categories"}>
    <div class="card  ">
    <div class="align">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
    </div>

    <h1>
      {name}
      </h1>
    <p>
      {/* {description} */}
    </p>
</div>
</Link>
  )
}

export default card
