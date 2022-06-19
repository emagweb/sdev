import React, { useState } from 'react'

const Slide = props => {
	const [active, setActive] = useState(0)

	function current() {
		setActive(1)
	}

	return (
		<>
			<img
				className='slide'
				onClick={current}
				src={props.pic}
				data-order={props.order + active}
				data-active={active}
				alt={props.title}
			/>
		</>
	)
}

export default Slide
