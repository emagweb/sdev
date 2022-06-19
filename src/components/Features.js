import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import icon1 from '../assets/icons/atom.svg'
import icon2 from '../assets/icons/internet.svg'
import icon3 from '../assets/icons/helix.svg'

function Features() {
	return (
		<div className="features">
			<Title text="Features" type="section__title serv" />
			<p className="subtitle__text serv">
				We have in-depth experience in data science, data visualization, IoT, advanced mathematics, embedded systems, DSP and telecommunication. We are eager to face new challenges – just bring them on!</p>
			<div className="feature-row">
				<div className="half icon-block">
					<img className="feature__icon" src={icon1} alt={'IoT'} />
				</div>
				<div className="half">
					<h3 className="feature__name">IoT</h3>
					<p className="feature__text">We are here since the beginning. Breathing life into predictive maintenance, Industry 4.0 and NB-IoT. From low level connectivity to the real, high level applications</p>
					<Link to={'/'} className="button-outline yellow">Learn more</Link>
				</div>
			</div>
			<div className="feature-row">
				<div className="half">
					<h3 className="feature__name">Algorithms</h3>
					<p className="feature__text">From telecommunication to finance, we solve real world problems by developing and applying mathematical models</p>
					<Link to={'/'} className="button-outline yellow">Learn more</Link>
				</div>
				<div className="half icon-block">
					<img className="feature__icon" src={icon2} alt={'Algorithms'} />
				</div>
			</div>
			<div className="feature-row">
				<div className="half icon-block">
					<img className="feature__icon" src={icon3} alt={'Highly performant code'} />
				</div>
				<div className="half">
					<h3 className="feature__name">Highly performant code</h3>
					<p className="feature__text">Regardless of resources, unlimited in cloud or constrained by MCU, we code for optimal utilization of computing power</p>
					<Link to={'/'} className="button-outline yellow">Learn more</Link>
				</div>
			</div>
		</div>
	)
}

export default Features