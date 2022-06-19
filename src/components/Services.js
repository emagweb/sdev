import React from 'react'
import Service from './Service'
import icon1 from '../assets/icons/atom.svg'
import icon2 from '../assets/icons/internet.svg'
import icon3 from '../assets/icons/helix.svg'
import Title from './Title'

const services = [
	{
		id: 1,
		icon: icon1,
		name: 'Research & Development',
		text: 'We invest the best IT talent into the development of breakthrough solutions to help you solve real-life problems and gain a solid competitive advantage'
	},
	{
		id: 2,
		icon: icon2,
		name: 'Software & Automation',
		text: 'Our application development services enable you to create, support, and modernize IT products that boost your business results and offer the digital experiences users expect'
	},
	{
		id: 3,
		icon: icon3,
		name: 'Team Augmentation',
		text: 'We take care of the recruitment, professional growth, and performance of your skilled team or individuals, while you retain full control over your app development lifecycle'
	}
]

function Services() {
	return (
		<div className="services">
			<Title text="Our Services" type="section__title serv" />
			<p className="subtitle__text serv">
				Slash Devs fully-fledged capabilities help companies become competitive and stay relevant. Unlock the power of technology and expertise to support your business needs now and in the future.</p>
			<div className="container">
				<div className="services__content">
					{services.map(item => (
						<Service icon={item.icon} order={item.id} name={item.name} text={item.text} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Services