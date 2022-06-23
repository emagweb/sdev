import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import vakancies from '../data/Vakancies'




function Teams() {
	return (
		<div className="features">
			<Title text="Our Leaders" type="section__title serv" />
			<p className="subtitle__text serv">
				Our leadership team offers vast experience with exceptional technology and industry knowledge.
			</p>
			{
				vakancies.map(item => (
					<div className="feature-row" style={{ marginBottom: 24 }}>
						<div className="half icon-block">
							<h3 className="feature__name dark">Expert In</h3>
							<img src={item.skillset} className="skill-icon" alt={'skills'} />
						</div>
						<div className="half">
							<img src={item.main} alt={'skills'} style={{ padding: 20, backgroundColor: '#fff', borderRadius: '50%' }} />
							<h3 className="feature__name">{item.position}</h3>
							<small className="feature__text small">{item.years}+ years / ${item.salary}/hour</small>
							<p className="feature__text">{item.desc}</p>
							<Link to={'/post'} className="button-outline yellow">Learn more</Link>
						</div>
					</div>
				))
			}

		</div>
	)
}

export default Teams