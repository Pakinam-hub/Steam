import React from "react";
import "../Style/about.css";
import fantasy from './fantasy1.mp4';
const About = () => {

  return (
    <body className="home">
      <div className="cover" >
     <p className="abt">
      <center>
     Steam is a video ga
     me digital distribution s
     ervice and storefront by Valve. 
     It was launched as a software client in September 2003 as a w
     ay for Valve to provide automatic updates for their games, and expa
     nded to distributing and offering third-party game publishers' titles in late 2
     005. Steam offers various features, like digital rights management (DRM), game server ma
     tchmaking, anti-cheat measures, social networking and game streaming services. It provides the us
     er with automatic game updating, saved game cloud synchronization, and community features such as fr
     ends messaging, in-game chat and a community market. </center>    </p>
        <video id='myVideo'autoPlay muted loop width="100%">
          <source src={fantasy} type="video/mp4" />
        </video>
      </div>
    </body>
  )
};

export default About;