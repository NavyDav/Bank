import React from 'react'
import Formulaire from '../Component/Inscription/Formulaire'
import image2 from '../Asset/667login.jpeg'
import '../App.css'
import { Link } from 'react-router-dom'

function Connexion() {
  return (
    <div className='connexionContent1'>
      <img src={image2} />    
      <div className='connexionContent2'>
    <h1>Connexion</h1>
    <Formulaire />
    <p>Pas encore de compte ? <Link to='/inscription'>Inscrivez-vous</Link></p>
    </div>
    </div>
  )
}
export default Connexion