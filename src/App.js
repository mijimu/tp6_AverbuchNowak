import './App.css';
import { useEffect, useState } from 'react'; 
import axios from 'axios';


function App() {

  const [puntos, setPuntos ] = useState(0);
  const [paisElegido, setPaisElegido] = useState('');
  const [ paises, setPaises ] = useState ([]); 
  const [ paisRandom, setRandom ] = useState ([]);
  
    
  
  const sumarDiez = () => {
    setPuntos(puntos+10);
  };

  const restarUno = () => {
    setPuntos(puntos-1);
  };
  const getRandomObject = (paises) => {
    const paisRandom = paises[Math.floor(Math.random() * paises.length)];
    setRandom(paisRandom);
  };

  useEffect(() => {
    getRandomObject(setPaises);
  }, []);

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then ((response) => {
      setPaises(response.data);
    });
  
  }, []);
  
return (
    <div className="App">
      <header className="App-header">
      {/*{paises.map((paises) => (
          {paises} 
      ))}*/}
      <div className='boxInput'>
        <h5 className='h5'>Adivine el pais</h5>
        <input onKeyUp={(e) => setPaisElegido(e.target.value)} />
        <p className='grayText'>Su respuesta:   {paisElegido}</p>
      </div>
      
      </header>

    </div>
  );

}
export default App;
