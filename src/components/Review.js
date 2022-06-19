import React from 'react'

function Review(props) {
  return(
    <div className={props.align}>
      <img className="review__image" src={props.image} alt={props.name} />
      <div className="review__block">
        <h3 className="review__name">{props.name}</h3>
        <blockquote>
          <cite className="review__position">{props.position}</cite>
          <p className="review__text">{props.text}</p>
        </blockquote>
      </div>
    </div>
  )
}

export default Review