import React from "react";
import "../Style/Home.css";
import header from './header.jpg';
import fire from './fire.png';
import game1 from './game1.jpg';
import game2 from './game2.jpg';
import game from './game.jpg';
import spiderman from './spiderman.png'


const Home = () => {

  return (

    <body className="home" >


      <div className="head">
        <section className="glass side">
          <p className="welcome"><h1>Welcome, User!</h1></p>
        </section>


        <section className="glass first">
          <p className="top-left"><img width='20px' src={fire}></img>  &nbsp;Featured</p>
          <img width="100%" src={header} />
        </section>
        <section className="glass side">
          <p ><h3 className="trending">Trending:</h3>
            <ul>

              <li>          <img width="60%" src={game1} />
              </li>
              <li>          <img width="60%" src={game2} />
              </li>
              <li>          <img width="60%" src={game} />
              </li>

            </ul>
          </p>
        </section>
      </div>
      <div className="cont">
        <section className="glass side fourth">
        <p className="welcome">
        “Life is more fun if you play games.”
        </p>
        </section>
        <section className="glass first">
      <img width="110%" src={spiderman} />

        </section>

        <section className="glass fourth">

        </section>

      </div>


    </body>
  )
};

export default Home;