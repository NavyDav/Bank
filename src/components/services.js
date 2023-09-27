import './services.css';
import Img from '../assets/cf1.png';
import Img1 from '../assets/stp1.png'


function Services(){
    return(
        <div className="services">

            <h1 className ='title-s'>CrowFunding & Suivi Des Demandes</h1>
            <div className="line"></div>
            <div className="first-s">
            <img src={Img} alt ='/' className = 'imgCrowd'
            />

            <div className="text1">
                 <h1>Ma 667 Bank & KissKissBankBank</h1>
                                        
                <p> Le crowdfunding, c'est le financement par la foule !<br/><br />

Ma 667 Bank et KissKissBankBank permettent à tous <br />
les clients de lancer leur collecte de fonds pour financer leurs projets, <br />
ou de soutenir ceux qui leur tiennent à cœur.</p> 
                <div className="button1">
                    <button className ='b1'>Découvrir</button>
                </div>
            </div>
           
               
            </div>
            <div className="second-s">
                <div className="text2">
                    <h1>Lancer un projet</h1>
                <p>Connectez-vous à plus d'un million de créateurs, d'entrepreneurs, <br />
                    de contributeurs passionnés par la musique, le design, la mode, le sport, <br />
                    le cinéma, la photographie, la solidarité ou encore l'innovation. <br />
                    Ils sont tous ici, prêts à financer votre projet. Alors, vous êtes prêt à tenter l'aventure ?</p>
                    <div className="button2">
                    <button className ='b2'>Découvrir</button>
                </div>
                    
                </div>
                <img src={Img1} alt ='/' className = 'imgProject'
                    />
                
            </div>


            <h1 className='third-s'>Suivi Des Demandes</h1>

            <div className="following-s">
                <p>Toutes vos demandes suivis en temps réel, que ce soit un remboursement, un litige ou  des plaintes, vous voulez une info ? Par ici !</p>
              
           
                <div className="button3">
                    <button className ='b3'>y Accéder</button>
                </div>
            </div>




             <footer className ='footer-s'>Gérer les préférences des cookies
Confidentialité Légal © 2023 667Bank Corporation
</footer>
        </div>
       
    )
}

export default Services;