import { Route, Routes } from 'react-router-dom';
import Inscription from './Routes/Inscription';
import Connexion from './Routes/Connexion';
import Footer from './Component/Footer';
import './App.css';


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Inscription />}/>
      <Route path="/connexion" element={<Connexion />} />
    </Routes>
    <Footer />
  
  </div>
  );
}

export default App;

