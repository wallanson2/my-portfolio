const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');





document.querySelector('#app-container').innerHTML =
  `<div class="container">
    <div class="menu">
      <ul>
        <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
        <a href="#section1">  Home</a>
        <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
        <a href="#section2">Projects</a>
        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
        <a href="#section3">Resume</a>
        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
        <a href="#section4">About Me</a>
        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        <a href="#section5">Contact</a>
      </ul>
    </div>
    <div class="intro-container" id="section1">
      <h1 class="name">William Allanson</h1>
      <h2 class="title">Front-End Engineer</h2>
    </div>
    <div class="project-header" id="section2">
      <h1>Recent Projects</h1>
    </div>
    <div class="project-container">

      <div class="project1">
        <img src="./images/Presta_screenshot.png" height="250" width="350"/>
        <h4>Application to bring together people in order to facilitate the renting of goods.<br/><br/>Tech Stack:  HTML, SCSS, Javascript, Backbone, REACT, FLUX, Google Maps API, Java, Spring Boot, MailGun email API, H2 Database Engine<br/><br/>See the code: <a href="https://github.com/wallanson2/PrestaTradingPost-1">https://github.com/wallanson2/PrestaTradingPost-1</a><br/><br/>Live site: <a href="http://67.205.163.173:8080/">http://67.205.163.173:8080/</a></h4>
      </div>
      <div class="project2">
        <img src="./images/Etsy_clone.png" height="250" width="350"/>
        <h4>Etsy Clone<br/><br/>Tech stack:  HTML, SCSS, Javascript, Backbone, Etsy API, AJAX, Heroku<br/><br/>See the code: <a href="https://github.com/wallanson2/assignment-20-etsy-clone">https://github.com/wallanson2/assignment-20-etsy-clone</a><br/><br/>Live site: <a href="https://willetsyclone.herokuapp.com/">https://willetsyclone.herokuapp.com/</a></h4>
      </div>
      <div class="project3">
        <img src="./images/Github_clone.png" height="250" width="350"/>
        <h4>Github Clone<br/><br/>Tech stack:  HTML, SCSS, Javascript, Backbone, Github API, AJAX<br/><br/>See the code: <a href="https://github.com/wallanson2/assignment-17-github-api-profile">https://github.com/wallanson2/assignment-17-github-api-profile</a></h4>
      </div>
    </div>
    <div class="resume-container" id="section3">
      <h1>Resume</h1>
    </div>
    <div class="resume">
      <a href="./documents/resume_2.pdf" target="_blank"><img src="./documents/resume_2.png" height="250" width="350"/></a>
    </div>
    <div class="about-header" id="section4">
      <h1>About Me</h1>
    </div>
    <div class="about-body">
      <img src="./images/WAllanson2.jpg" width="300" height="auto"/>
      <h2>What I am about in 100 words or less.</h2>
      <h3>After a successful career in the Entertainment industry, I have decided to challenge myself with a second career in software development. I successfully graduated from The Iron Yard, after putting in 1000+ hours, as a Front-End Engineer. Many of the work ethics I learned and used throughout my 1st career will transfer over, such as, teamwork, deadlines, troubleshooting and camaraderie to name a few. I am looking forward to the challenges and opportunities to learn.  And I am looking for a company that can offer me these challenges and opportunities.</h3>
    </div>
    <div class="contact-header" id="section5">
      <h1>Contact Me</h1>
    </div>
    <div class="contact-body">
      <h1>Let's Connect</h1>
      <h2>I am currently looking for an exciting opportunity to continue developing my front-end engineering skills.<br/><br/>Shoot me an email at <a href="mailto:w.allanson2@gmail.com">w.allanson2@gmail.com</a> and let's chat!<br/></br></h2>
      <a href="https://github.com/wallanson2" target="blank"><i class="fa fa-github fa-4x github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/william-allanson-938606132" target="blank"><i class="fa fa-linkedin fa-4x linkedin" aria-hidden="true"></i></a>
      <a href="https://twitter.com/WAllanson2" target="blank"><i class="fa fa-twitter fa-4x twitter" aria-hidden="true"></i></a>

    </div>

  </div>`






// new AppRouter()
