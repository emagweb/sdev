import React from 'react'
import person001 from '../assets/img/person/p-001.jpg'
import person002 from '../assets/img/person/p-002.jpg'
import person003 from '../assets/img/person/p-003.jpg'
import person004 from '../assets/img/person/p-004.jpg'
import Review from './Review'
import Title from './Title'

function Reviews() {
  return (
    <section id="reviews_block">
      <Title
        type="section-title__default"
        text="What People Say About Us"
      />
      <div className="container">
        <div className="reviews">
          <Review
            image={person001}
            align="review__right"
            name="Della Frazier"
            position="Interior Designer"
            text="Each plan is accompanies by a short synopsis of the plan details. Hence, expect to find the price, the web space, Data Transfer ability and the operating platform"
          />
          <Review
            image={person002}
            align="review__left"
            name="Caleb & Ola Cruz"
            position="Architects"
            text="When you spend some time in this website, you would realize that a lot of information presented in this website is extremely unique only to this site and you would not find this anywhere else"
          />
          <Review
            image={person003}
            align="review__right"
            name="Steve Willis"
            position="Software Engineer"
            text="Basically, through these forums you could ask your questions about a particular plan and in essence also gather information on the best hosting plan for their needs. In fact, these forums would give you a good opportunity for you to get your questions answered"
          />
          <Review
            image={person004}
            align="review__right"
            name="Jan Willis"
            position="Software Engineer"
            text="Basically, through these forums you could ask your questions about a particular plan and in essence also gather information on the best hosting plan for their needs. In fact, these forums would give you a good opportunity for you to get your questions answered"
          />
          {/* <div className="review__link">
            <a className="btn btn--premium btn--big" href="/reviews">View all reviews</a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Reviews