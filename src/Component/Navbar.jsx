import '../style/globalssas.css'
import React from 'react';
import burger from '../asset/Page-Accueil/🦆 icon _menu_.png';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown'

function NavBar() {
  return (

  <div id="myNav" className="overlay">
    <div className='content'>
      <Countdown />
    </div>
    <button className="burger" onClick={openNav}><img className="item1" src={burger}/></button>
    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
    <div className="overlay-content">
<div className='content0'>
    <h1>Connectify</h1>
</div>
      <Link to="/">Inscription</Link>
      <Link to="/Connexion">Connexion</Link>
      <Link to="/Inscription">Igit </Link>
    </div>
  </div>
  )
};

function openNav() {
  document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};    


export default NavBar;
