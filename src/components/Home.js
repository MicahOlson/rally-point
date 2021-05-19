import React from 'react'
import ContactUs from './ContactUs'
import styled from 'styled-components'
import lightning from './../../static/assets/imgs/lightning-logo.png'
import ambulance from './../../static/assets/imgs/ambulance.png'
import firetruck from './../../static/assets/imgs/fire-truck.png'
import snowplow from './../../static/assets/imgs/snowplow.png'

const HomeWrapper = styled.section`
  margin-top: -28px;
  #lightning {
    width: 99%;
  }
  #ambulance, #firetruck, #snowplow {
    width: 96%;
  }
  #contactUs {
    clear: right;
  }
  .col-home-left, .col-home-right {
    flex: 1;
  }
  .text-block {
    margin-left: 10px;
    margin-right: 10px;
  }
  h1 {
    display: none;
  }
  h2 {
    color: #9E2A2B;
    font-size: 28px;
  }
  p {
    color: #5E5E5E;
    font-size: 24px;
  }
  div {
    margin-top: 40px;
  }
`

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Rally Point</h1>
      <div>
        <img src={lightning} alt="" id="lightning" />
      </div>
      <div className="row">
        <div className="col-home-left text-block">
          <h2>
            Subheading
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
        </div>
        <div className="col-home-right">
          <img src={ambulance} alt="" id="ambulance" />
        </div>
      </div>

      <div className="row">
        <div className="col-home-left text-block">
          <img src={firetruck} alt="" id="firetruck" />
        </div>
        <div className="col-home-right">
          <h2>
            Subheading
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-home-left text-block">
          <h2>
            Subheading
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
        </div>
        <div className="col-home-right">
          <img src={snowplow} alt="" id="snowplow" />
        </div>
      </div>

      <div id="contactUs">
        <ContactUs />
      </div>
    </HomeWrapper>
  )
};

export default Home
