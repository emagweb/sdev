import React from 'react'
import CountUp from 'react-countup'
import Title from './Title'

function Statistic() {
  return (
    <section class="statistic_block">
      <Title text="Our Stats" type="section__title yellow" />
      <p className="subtitle__text white">
        Statistics is a branch of mathematics dealing with the collection, classification, analysis, interpretation of numerical facts, for drawing inferences on the basis of their quantifiable likelihood probability of data.
        </p>
      <div className="container text-center">
        <div className="statistic">
          <div className="statistic__card">
            <h3 className="statistic__title">
              <CountUp
                className="counter"
                start={0}
                end={400}
                duration={500}
                useEasing={true}
                useGrouping={true}
                separator=" "
                decimals={0}
                decimal=""
                prefix=""
                suffix="%"
              />
            </h3>
            <p className="statistic__text">Completed Project</p>
          </div>
          <div className="statistic__card">
            <h3 className="statistic__title">
              <CountUp
                className="counter"
                start={0}
                end={3120}
                duration={500}
                useEasing={true}
                useGrouping={true}
                separator={''}
                decimals={0}
                prefix={''}
                suffix={''}
              /></h3>
            <p className="statistic__text">Employers</p>
          </div>
          <div className="statistic__card">
            <h3 className="statistic__title">
              <CountUp
                className="counter"
                start={0}
                end={10000}
                duration={500}
                useEasing={true}
                useGrouping={true}
                separator={''}
                decimals={0}
                prefix={''}
                suffix={''}
              /></h3>
            <p className="statistic__text">Average Rate</p>
          </div>
          <div className="statistic__card">
            <h3 className="statistic__title">
              <CountUp
                className="counter"
                start={0}
                end={1255}
                duration={500}
                useEasing={true}
                useGrouping={true}
                separator={''}
                decimals={0}
                prefix={''}
                suffix={''}
              /></h3>
            <p className="statistic__text">Award Recognizition</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistic