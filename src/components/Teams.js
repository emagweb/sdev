import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import vakancies from '../data/vakancies'


function Teams() {

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const [start, setStart] = useState(-1)
	const max = vakancies.length
	const count = 6

	return (
		<div className="features">
			<Title text="Your Future Tech Team" type="section__title serv" />
			<p className="subtitle__text serv">
				The Best Remote Developers In The Ukraine
			</p>
			<div className="feature-row">
				{
					vakancies.map((item, index) => start < index && index < start + count + 1 ? (
						<div className="feature" key={index}>
							<div>
								<h3 className="feature-title">{item.position}</h3>
								<div className="flex-row">
									<img className="flex-pic" src={item.main} alt={'skills'} />
									<div className="flex-right">
										<p className="bg-yellow">{item.years}+ years</p>
										<p className="salary">${item.salary}/hour</p>
									</div>
								</div>
								<div className="skills-icons">
									<h3 className="dark">Expert In</h3>
									<p className="skillsets"><img src={item.skillset} className="skill-icon" alt={'skills'} /></p>
								</div>
							</div>
							<div>
								<div className="feature-desc">
									<p className="dark m-20">{item.desc}</p>
								</div>
								<Link to={'/post'} className="button-dark">Learn more</Link>
							</div>
						</div>
					) : <></>)
				}
			</div>
			<div className="flex-center">
				<button
					onClick={() => {
						start < 0 ? setStart(-1) : setStart(start - count)
						goToTop()
					}}>Prev</button>
				<button
					onClick={() => {
						start + count + 1 < max ? setStart(start + count) : setStart(start)
						goToTop()
					}}>Next</button>
			</div>
		</div>
	)
}

export default Teams