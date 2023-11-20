import React from 'react'
import ReactStars from "react-rating-stars-component";
const RatingStar = ({count,size,value,classes,classessetRating}) => {
  return (
    <div>
      <ReactStars
      edit={false}
count={count}
size={size}
isHalf={true}
value={value}
emptyIcon={<i class="far CiStar"></i>}
halfIcon={<i class="fa fa-star-half-alt"></i>}
fullIcon={<i class="fa fa-star"></i>}
activeColor="#ffd700"
classNames={classes}
// onChange={(v) => {
//   setRating(v);
// }}
>
  </ReactStars>
  </div>
  )
}

export default RatingStar



// 
