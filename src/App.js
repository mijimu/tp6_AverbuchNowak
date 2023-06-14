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
  
  const sumarDiez = () => {
    setPuntos(puntos+10);
  };

  const restarUno = () => {
    setPuntos(puntos-1);
  };
  const getRandomObject = (paises) => {
    const paisSelected = paises[Math.floor(Math.random() * paises.length)];
    setPaisSeleccionado(paisSelected);
    console.log(paisSelected);
  };

  const onKeyUpHandler = (e) => {
    setPaisIngresado(e.target.value)
    if(paisIngresado.name === onKeyUpHandler.target.value){
      setEsCorrecta(true)
    }
    
  }

  useEffect(() => {
    //getRandomObject(paises);
  }, []);

  useEffect(() => {
    axios.get(baseURL).then ((response) => {
      console.log(response.data.data)
      setPaises(response.data.data);
      console.log(response.data.data);
      getRandomObject(response.data.data);
    });
  
  }, []);
  
return (
    <div className="App">
      <header className="App-header">
      <div className='boxInput'>
        <Bandera pais={paisSeleccionado}></Bandera>
        <h5 className='h5'>Adivine el pais</h5>
        <input onKeyUp={onKeyUpHandler} />
        {/*<p className='grayText'>Su respuesta:   paisIngresado</p>*/}
        {esCorrecta ? <p>Es correcta</p> : <p>Incorrecto</p>}
      </div>
      
      </header>

    </div>
  );

}
export default App;
