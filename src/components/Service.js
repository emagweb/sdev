import React from 'react'
import { Link } from 'react-router-dom'

function Service(props) {
	return (
		<div className="service-block">
			<img className="service__icon" src={props.icon} alt={props.name} />
			<h3 className="service__name">{props.name}</h3>
			<p className="service__text">{props.text}</p>
			<Link to={props.name} className="button-outline">Learn more</Link>
		</div>
	)
}

export default Service