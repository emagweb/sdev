import React from 'react'
import Title from './Title'
import icon1 from '../assets/icons/computer.svg'
import icon2 from '../assets/icons/calendar.svg'
import icon3 from '../assets/icons/command.svg'

function Offers() {
	return (
		<div className="features">
			<Title text="Team cloud" type="section__title serv" />
			<p className="subtitle__text serv">
				We offer Team as a Service. With our flexibility, ability to learn in a fast-paced environment and to drive challenging projects from the beginning to the end - the Client can take as much skill and expertise as they need and pay as they go.</p>
			<div className="feature-row">
				<div className="half icon-block">
					<img className="feature__icon" src={icon1} alt={'Analysis and advice'} />
				</div>
				<div className="half">
					<h3 className="feature__name">Analysis and advice</h3>
				</div>
			</div>
			<div className="feature-row">
				<div className="half">
					<h3 className="feature__name">Plan and design</h3>
				</div>
				<div className="half icon-block">
					<img className="feature__icon" src={icon2} alt={'Plan and design'} />
				</div>
			</div>
			<div className="feature-row">
				<div className="half icon-block">
					<img className="feature__icon" src={icon3} alt={'Highly performant code'} />
				</div>
				<div className="half">
					<h3 className="feature__name">Highly performant code</h3>
				</div>
			</div>
		</div>
	)
}

export default Offers