import React, { Component } from 'react';
import vaporwave from './vaporwave_1080p.mp4';
import logo from './images/WebjamLogo.png';
import wolfram from './images/wolfram.png';
import peterportal from './images/peterportal-white.png';
import patrick from './images/patrickNguyen.jpg';
import mars from './images/mars.jpg';
import ritika from './images/ritika.jpg';

import GlitchText from 'react-glitch-effect/core/Text';
import GlitchClip from 'react-glitch-effect/core/Clip';


import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import "./app.css";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.loading = false;

  }

  /**
   * Render
   */

  render() {
    return (
      <>
      <div style={{height: "100vh", background: "black"}}>
        <div className={'vaporwave-background-container'} >
          <video autoPlay="autoplay" loop="loop" muted className={'vaporwave-background'} >
            <source src={vaporwave} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="landing-container">
          {/* <div className="hero">
            <img src={imageHero} />
          </div> */}
          <div style={{zIndex: "100", height: "auto", display: 'flex', margin: "auto", flexDirection: 'column'}}>
            <h2 className="pretitle">
              UC Irvine ICS Student Council
            </h2>

            {/* <h1 className="main-title"> */}
            <GlitchText>
              <h1 className="main-title">WEBJAM 2020!</h1>
            </GlitchText>

            <h2 className="tagline">
              Oct 19th - Oct 23rd
            </h2>
            
            <h2 style={{marginTop: "2rem"}} className="tagline">
              in collabration with&nbsp;&nbsp;<img style={{height: "35px"}} src={peterportal}></img>
            </h2>

            <h2 style={{marginTop: "1rem"}} className="tagline">
             sponsored by&nbsp;&nbsp;<img style={{height: "50px"}} src={wolfram}></img>
            </h2>
            

            <div className="signup-button">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXA_5saSsNm48NlUQoyQlYNpBGTR2En4FR2o_8r4sxBpXMJw/viewform" className='transparent'>
                <p><span className="bg"></span>
                <span className="base"></span>
                <span className="text">Register Now!
                </span></p>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{backgroundColor: "#0C070B"}}>
      <Container style={{display: "flex", height: "100%", flexDirection: "column"}}>
        <Row>
          
          <Col style={{padding: "12rem 0"}}>
          <GlitchClip duration="5s"><div style={{textAlign: "center"}}></div></GlitchClip>
            <GlitchText>
              <h2 className="tagline" style={{fontWeight: "bold"}}>ICS Student Council at UC Irvine (ICSSC) invites you to our 2020 WebJam! </h2>
            </GlitchText>
            
            <h2 className="pretitle" style={{paddingTop: "1rem"}}>
              WebJam is a week-long team competition where teams of students will create fully 
              functional web applications. This competition will give students the opportunity 
              to learn how to create and deploy web applications!

              If you’re a newcomer to web development, there is no need to fear! ICSSC will be 
              hosting workshops throughout the event to help you get started. After the workshops, 
              you’re free to create a web application about anything you wish, and be prepared to 
              present your web applications on Zoom on Friday, October 23rd. The web applications that 
              wow us the most will be eligible for a variety of amazing prizes!
            </h2>

          </Col>
        </Row>
        <Row>
          <Col  style={{padding: "0 0 12rem 0"}}>
          <GlitchText>
              <h2 style={{color: "#fff", textAlign: "center"}}>EVENT SCHEDULE</h2>
            </GlitchText>

          <section class="card-list">
 
            <article class="event-card">
              <header class="event-card-header-primary">
                <p>Monday October 19th, 2020 @ 6:00 PDT</p>
                <h2>WebJam KickOff Ceremony</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src={patrick} />
                </a>
                <svg class="half-circle-primary" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  {/* <div class="author-name-prefix">Event Chair</div> */}
                  Patrick Nguyen
                </div>
              </div>

              <div class="tags">
                  <a href="#">ZOOM LINK</a>
                </div>

            </article>

            <article class="event-card">
              <header class="event-card-header-green">
                <p>Monday October 19th, 2020 @ 7:00 PDT</p>
                <h2>WebJam Workshop</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src={mars} />
                </a>
                <svg class="half-circle-green" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  {/* <div class="author-name-prefix">Project Co-Chair</div> */}
                  Marawin Chheang
                </div>
              </div>

              <div class="tags">
                  <a href="#">ZOOM LINK</a>
                </div>

            </article>

            <article class="event-card">
              <header class="event-card-header-yellow">
                <p>Wednesday October, 21st, 2020 @ 6:00 PDT</p>
                <h2>WebJam 2nd Workshop</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src={ritika} />
                </a>
                <svg class="half-circle-yellow" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  {/* <div class="author-name-prefix">Project Co-Chair</div> */}
                  Ritika Roy Choudhury
                </div>
              </div>

              <div class="tags">
                  <a href="#">ZOOM LINK</a>
                </div>

            </article>

            <article class="event-card">
              <header class="event-card-header-orange">
                <p>Friday October 23rd, 2020 @ 6:00 PDT</p>
                <h2>WebJam Presentations & Award Ceremony</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="avatar.png" />
                </a>
                <svg class="half-circle-orange" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  {/* <div class="author-name-prefix">Judge</div> */}
                  someone important
                </div>
              </div>

              <div class="tags">
                <a href="#">ZOOM LINK</a>
              </div>

            </article>



          </section>
          </Col>

        </Row>

        <Row>
        <Col style={{padding: "0 0 12rem 0"}}>
            <GlitchText>
              <h2 style={{color: "#fff", textAlign: "center"}}>FAQs & Rules</h2>
            </GlitchText>

            <Accordion style={{padding: "3rem"}}>
              <Card>
                <Accordion.Toggle className="hover-primary" as={Card.Header} eventKey="0">
                  What is WebJam?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>WebJam is a week-long team competition where teams of students will create fully functional web applications.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-green" as={Card.Header} eventKey="1">
                  Where is WebJam being held?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>WebJam is being held entirely online this  year. Correspondence and announcements throughout the duration of the event will happen primarily through the WebJam Discord. Registered participants will receive an invitation to WebJam Discord closer to the start date of WebJam.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-yellow" as={Card.Header} eventKey="2">
                  When is WebJam?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>WebJam is happening between October 19th - October 23rd. The kickoff event is on Monday, October 19th, 2020 at 6PM PDT and the final presentations are on Friday, October 23rd, 2020 at 6PM PDT.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-orange" as={Card.Header} eventKey="3">
                  How much does it cost?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Nothing. Attending WebJam is free.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-red" as={Card.Header} eventKey="4">
                  Who can participate?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>All UC Irvine students are welcome to participate.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-primary" as={Card.Header} eventKey="5">
                  How many people can be on a team?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>Teams can be up to a maximum of 4 people.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-green" as={Card.Header} eventKey="6">
                  What if I don’t have a team?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>We will be assisting with team formations during the event by creating a Discord channel for team formations.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-yellow" as={Card.Header} eventKey="7">
                  How do I register?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>You can register by filling out the following RSVP form above.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-orange" as={Card.Header} eventKey="8">
                  May I submit pre-existing projects for WebJam?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>Unfortunately, all design elements and code for your project must be created during the event. Pre-existing third party tools and frameworks are allowed. Coding in advance is not allowed, but planning and discussing with teammates prior to the event is allowed.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-red" as={Card.Header} eventKey="9">
                  What if I don’t have any prior experience with web development?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>The ICSSC Projects Committee will be hosting workshops throughout the week to assist participants get started with web development.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-primary" as={Card.Header} eventKey="10">
                  What if my question isn’t answered here?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>If your question isn’t answered in the FAQ, please leave a question in the WebJam Discord or email us at <a href="mailto:icssc@uci.edu">icssc@uci.edu</a></Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-green" as={Card.Header} eventKey="11">
                  What are the rules?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    <div style={{display: "flex", flexDirection: "row"}}>
                      <div style={{display: "flex", width: "50%", flexDirection: "column", paddingRight: "2rem"}}>
                      <h2>WebJam Rules </h2>

                      <ul>
                        <li>Teams must be a size of 1-4 participants.</li>
                        <li>Participants must be currently enrolled UC Irvine students.</li>
                        <li>All design elements and code for your project must be created during the event. Pre-existing third-party tools and frameworks are allowed. Coding in advance is not allowed, but planning and discussing with teammates prior to the event is allowed.</li>
                        <li>Submissions must be your own original work, and you must have obtained approval or licenses required for you to submit your entry, and your entry cannot contain any third party trademarks or copyrighted materials unless you have obtained permission to use the materials.</li>
                        <li>Submissions must, as determined by ICS Student Council, in our sole and absolute discretion, follow the code of conduct.</li>
                        <li>By participating in WebJam, you agree to grant full permission to ICS Student Council to use your likeness in all forms and media for advertising and any other lawful purposes. </li>
                        <li>Teams will be required to submit a hyperlink or code repository (GitHub, GitLab) of their submission before final presentations by Friday October 23rd, 2020 @ 5:30 PM PDT to be eligible for prizes.</li>
                        <li>Teams will be required to present their project in a 3-5 minute presentation to a panel of judges during the final WebJam presentations in order to qualify for prizes. At least one team member must be present to present their project during their team’s assigned presentation time.</li>
                        <li>At the close of the WebJam Presentations, the top three winning teams will be selected by a panel of qualified judges. </li>
                        <li>Winners will be notified via the contact information provided during entry. If a selected winner cannot be contacted, is ineligible for, fails to claim a prize, or fails to return any forms, the selected winner will forfeit the prize.</li>
                      </ul>

                      </div>
                      <div style={{display: "flex", width: "50%",  flexDirection: "column", paddingLeft: "2rem"}}>
                        <h2>WebJam Code of Conduct</h2>
                        <p>By participating in WebJam, you agree to abide by the the following code of conduct:</p>

                        <ul>
                          <li>WebJam is dedicated to providing a harassment-free environment experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, religion, or computing experience. If your behavior is making someone feel uncomfortable, that is enough reason to stop. We do not tolerate harassment of WebJam participants of any form. </li>
                          <li>Participants asked to stop any harassing behavior are expected to comply immediately.</li>
                          <li>If a participant engages in harassing behavior, ICS Student Council may take any action it deems appropriate, including, but not limited to, warning the offending participant or expulsion from the event.</li>
                          <li>If you witness or experience any violations of this Code of Conduct, please notify a board member of ICS Student Council immediately, or email icssc@uci.edu</li>
                        </ul>

                        <p>By participating in WebJam, each participant agrees to follow the above-stated rules and code of conduct and by the interpretation of these rules by ICS Student Council, and understand that violation of these rules may result in their submission being disqualified for prizes and/or the offending participant being removed from the competition.</p>
                      
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>

        </Row>
      </Container>

      <footer style={{textAlign: "center", paddingBottom: "4rem"}}>
        <p>© 2020 ICSSC Project Commitee.</p>
      </footer>
      </div>

      </>
    );
  }
}
