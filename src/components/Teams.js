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
			<div className="feature-row">
				{
					vakancies.map(item => (
						<div className="feature">
							<div className="flex-row">
								<div className="flex-icon"><img src={item.main} alt={'skills'} className="flex-icon" /><strong>{item.years}+ years</strong></div>
								<p><strong>${item.salary}/hour</strong></p>
							</div>
							<h3 className="dark">Expert In</h3>
							<img src={item.skillset} className="skill-icon" alt={'skills'} />

							<h3 className="dark">{item.position}</h3>
							<p className="dark m-20">{item.desc}</p>
							<Link to={'/post'} className="button-outline yellow">Learn more</Link>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Teams