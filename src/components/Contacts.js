import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import icon1 from '../assets/icons/bubbles.svg'
import icon2 from '../assets/icons/map.svg'

function Contacts() {
	return (
		<div className="features">
			<Title text="Contact" type="section__title serv" />
			<p className="subtitle__text serv">
				We have in-depth experience in data science, data visualization, IoT, advanced mathematics, embedded systems, DSP and telecommunication. We are eager to face new challenges – just bring them on!</p>
			<div className="feature-row">
				<div className="half icon-block">
					<img className="feature__icon" src={icon1} alt={'send'} />
				</div>
				<div className="half">
					<h3 className="feature__name">Send Message</h3>
					<p className="feature__text">team@slashdev.team</p>
					<Link to={'mailto:team@slashdev.team'} className="button-outline yellow">Send Message</Link>
				</div>
			</div>
			<div className="feature-row">
				<div className="half">
					<h3 className="feature__name">Address</h3>
					<p className="feature__text">Ukraine, 65007, Odessa region, Odessacity, Primorsky district, Staroportofrankivska street, 107 apartment 21<br />
						Andrey Rogovsky, CEO</p>
					<Link to={'mailto:team@slashdev.team'} className="button-outline yellow">Contact Us</Link>
				</div>
				<div className="half icon-block">
					<img className="feature__icon" src={icon2} alt={'contact'} />
				</div>
			</div>
		</div>
	)
}

export default Contacts