import React from 'react';
import logo from './cc_logo.png';
import partnerships from './Partnerships.png'
import magnolia from './Magnolia.png'
import easier from './LifeEasier.png'
import olga from './olga.jpg'
import tom from './tom.jpg'
import mike from './mikeh.jpg'
import lucas from './lucas.jpg'
import bernard from './bernard.jpg'
import skyler from './skyler.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="nav-header">

            <a href="localhost"> <img src={logo} alt="Crescendo Collective"/></a>

          <div class="nav">
           <ul>
             <li>MEET THE TEAM</li>
             <li>WHAT WE DO</li>
             <li>MAGNOLIA PREMIER PARTNER</li>
             <li>CAREERS</li>
            </ul>
          </div>
        </div>
      </header>

    <section id="about-us-section">

      <div class="LifeEasier">
        <img src={easier} alt="We're Making Your Life Easier! Crescendo Collective combines technical expertise, artistic talent and client collaboration, to turn market insight into successful, measurable outcomes"/>
      </div>
      <div class="Magnolia">
        <img src={magnolia} alt="A Magnolia Certified Partner! We build our digital platforms with Magnolia. A content management system perfect for dynamic business needs."/>
      </div>
      <div class="Partnerships">
        <img src={partnerships} alt="Building Global Partnerships! From multinational corporations to homegrown success stories, Crescendo Collective provides guidance and expertise to clients around the world."/>
      </div>
    </section>


    <section id="member-section">
      <div class="wrap">
        <div class="people_wrap">
          <div class="people_callout_main">
            <h1>Agile, Skilled, Effective.</h1>
            <p>The team at Crescendo Collective is designed to outpace and outperform larger agencies; we combine industry-leading technology with a work ethic rooted in trust and service to clients. Let us partner with you and prove why we’re the most advanced digital agency in the Midwest.</p>
          </div>
          <div class="people_callout_regular">
            <div class="people__contents">
              <img src={olga} alt="Olga"></img>
            
              <div class="people__infocard">
                <h5 class="people__name">Olga</h5>
                <h6 class="people__role">Producer</h6>
                <p class="people__quote">Impossible only means that you haven't found the solution yet.</p>
              </div>
            </div>
          </div>
          <div class="people_callout_regular">
            <div class="people__contents">
              <img src={tom} alt="Tom"/>

              <div class="people__infocard">
                <h5 class="people__name">Tom</h5>
                <h6 class="people__role">Partner</h6>
                <p class="people__quote">Turning unknown unknowns into known knowns.</p>
              </div>
            </div>
          </div>

          <div class="people_callout_regular">
            <div class="people__contents">
              <img src={mike} alt="Mike"/>

              <div class="people__infocard">
                <h5 class="people__name">Mike</h5>
                <h6 class="people__role">VP of Finance</h6>
                <p class="people__quote">I disagree, there is such a thing as a free lunch.</p>
              </div>
            </div>
          </div>

          <div class="people_callout_regular">
            <div class="people__contents">
              <img src={lucas} alt="Lucas"/>

              <div class="people__infocard">
                <h5 class="people__name">Lucas</h5>
                <h6 class="people__role">Backend Developer</h6>
                <p class="people__quote">Our team's people-first approach to technology and exhilarating pace creates a culture where our objectives are achieved for each other as much as they are for our clients.</p>
              </div>
            </div>
          </div>

          <div class="people_callout_regular">
            <div class="people__contents">
              <img src={skyler} alt="Skyler"/>

              <div class="people__infocard">
                <h5 class="people__name">Skyler</h5>
                <h6 class="people__role">Future Backend Developer</h6>
                <p class="people__quote">Imitation is the sincerest form of flattery.</p>
              </div>
            </div>
          </div>

          <div class="people_callout_regular">
            <div class="people__contents">
              <img src={bernard} alt="Bernard"/>

              <div class="people__infocard">
                <h5 class="people__name">Bernard</h5>
                <h6 class="people__role">Partner</h6>
                <p class="people__quote">My goal is to connect the user to the journey and remove the medium from the equation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    
    <section id="jobs-section"> 
      <div class="Jobs">
        <div class="Jobs-Title">
        <h1>I WANT IN!</h1>
        <p>I am ready to work hard for an exciting agency like Crescendo.</p>
        </div>

        <div class="Designer">
          <h4>Digital Designer</h4>
          <p>The job description is for "digital designer," but we're really looking for someone with the mindset of a fixer, special forces operative, or bounty hunter."</p>
        </div>

        <div class="Account">
          <h4>Account Coordinator</h4>
          <p>Account executives acquire and nuture Crescendo's client relationships.</p>
        </div>

        <div class="Backend">
        <h4>Backend Web Developer -- That's me!</h4>
        <p>I will work with your team of designers and developers to implement the backend of applications for the amazing brands you work with.</p>
        </div>


      </div>
      </section>
    </div>
  );
}

export default App;
