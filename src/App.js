import './App.css';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Bandera from './Bandera/Bandera';

const baseURL = "https://countriesnow.space/api/v0.1/countries/flag/images";

function App() {

  const [puntos, setPuntos ] = useState(0);
  const [paisIngresado, setPaisIngresado] = useState('');
  const [ paises, setPaises ] = useState ([]); 
  const [ paisSeleccionado, setPaisSeleccionado ] = useState ('');
  const [ esCorrecta, setEsCorrecta ] = useState (false);
  
  const sumarDiez = (puntos) => {
    setPuntos(puntos+10);
    console.log(puntos);
  };

  const restarUno = (puntos) => {
    setPuntos(puntos-1);
    console.log(puntos);
  };

  const getRandomObject = (paises) => {
    const paisSelected = paises[Math.floor(Math.random() * paises.length)];
    setPaisSeleccionado(paisSelected);
  };

  const onKeyUpHandler = (e) => {
    setPaisIngresado(e.target.value)

    if(paisSeleccionado.name === e.target.value){
      setEsCorrecta(true)
    }
  }

  const actualizarPuntos = () => {
    if (esCorrecta) {
      setPuntos(sumarDiez)
    } else {
      setPuntos(restarUno)
    }
  }


  useEffect(() => {
    axios.get(baseURL).then ((response) => {
      setPaises(response.data.data);
      getRandomObject(response.data.data);
    });
  
  }, []);

console.log(puntos);

return (
    <div className="App">
      <header className="App-header">
      <div className='boxInput'>
        {paisSeleccionado.name}
        <p></p>
        <Bandera pais={paisSeleccionado}></Bandera>
        <h5 className='h5'>Adivine el pais</h5>
        <input onChange={onKeyUpHandler}/>
       
        {/*<p className='grayText'>Su respuesta:   paisIngresado</p>*/}
        {esCorrecta ? <p>Es correcta</p>  : <p>Incorrecto</p>}
        
        
        <p>Puntos: {puntos}</p>
      </div>
      
      </header>

    </div>
  );

}
export default App;
