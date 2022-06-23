import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
//import icon1 from '../assets/img/person/AndriiRogovskyi.png'
import icon2 from '../assets/img/person/TonyaOsipenko.png'
import icon3 from '../assets/img/person/NatalyaKokorina.png'
import icon4 from '../assets/img/person/SergeiSolovyov.png'
import uskills from '../data/uskills'

const iconuri = 'https://skillicons.dev/icons?i='



function Teams() {
	return (
		<div className="features">
			<Title text="Our Leaders" type="section__title serv" />
			<p className="subtitle__text serv">
				Our leadership team offers vast experience with exceptional technology and industry knowledge.
			</p>
			<div className="feature-row">
				<div className="half icon-block">
					<h3 className="feature__name dark">Basic Skills</h3>
					<img src={iconuri + uskills + '&perline=5'} className="skill-icon" alt={'skills'} />
					<Link to={'/post'} className="button-outline yellow">Learn more</Link>
				</div>
				<div className="half">
					<h3 className="feature__name">Full Stack Developer</h3>
					<small className="feature__text small">5+ years</small>
					<p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, incidunt. Tempore, ducimus.</p>
				</div>
			</div>
			<div className="feature-row">
				<div className="half">
					<h3 className="feature__name">Tonya Osipenko</h3>
					<small className="feature__text small">Design & Frontend Lead</small>
					<p className="feature__text">The road to success and the road to failure are almost exactly the same. You create them.</p>
				</div>
				<div className="half icon-block">
					<img className="feature__icon" src={icon2} alt={'contact'} />
				</div>
			</div>
			<div className="feature-row">
				<div className="half icon-block">
					<img className="feature__icon" src={icon3} alt={'send'} />
				</div>
				<div className="half">
					<h3 className="feature__name">Natalya Kokorina</h3>
					<small className="feature__text small">Lawyer</small>
					<p className="feature__text">Leadership is not about a title or a designation. It's about impact, influence and inspiration.</p>
				</div>
			</div>
			<div className="feature-row">
				<div className="half">
					<h3 className="feature__name">Sergey Solovev</h3>
					<small className="feature__text small">Backend Lead</small>
					<p className="feature__text">Impact involves getting results, influence is about spreading the passion you have for your work.</p>
				</div>
				<div className="half icon-block">
					<img className="feature__icon" src={icon4} alt={'contact'} />
				</div>
			</div>
		</div>
	)
}

export default Teams