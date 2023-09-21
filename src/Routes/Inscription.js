import React from 'react'
import Formulaire from '../Component/Inscription/Formulaire'
import image1 from '../Asset/667wp.jpeg'
import '../App.css'
import { Link } from 'react-router-dom'

function Inscription() {
  return (
    <div className='inscriptionContent1'>
      <img src={image1} />    
      <div className='inscriptionContent2'>
    <h1>Inscription</h1>
    <Formulaire />
    <p>Déja inscript ? <Link to='/connexion'>Connectez-vous</Link></p>
    </div>
    </div>
  )
}
export default Inscription