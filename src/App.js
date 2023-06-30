import './App.css';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Bandera from './Bandera/Bandera';
import PropTypes from 'prop-types'


const baseURL = "https://countriesnow.space/api/v0.1/countries/flag/images";

function App() {

  const [puntos, setPuntos ] = useState(0);
  const [paisIngresado, setPaisIngresado] = useState('');
  const [ paises, setPaises ] = useState ([]); 
  const [ paisSeleccionado, setPaisSeleccionado ] = useState ('');
  const [ esCorrecta, setEsCorrecta ] = useState (false);
  const [ answer, setAnswer ] = useState('');
  
 /* const sumarDiez = (puntos) => {
    setPuntos(puntos+10);
    console.log(puntos);
  };

  const restarUno = (puntos) => {
    setPuntos(puntos-1);
    console.log(puntos);
  };*/

  const getRandomObject = (paises) => {
    const paisSelected = paises[Math.floor(Math.random() * paises.length)];
    setPaisSeleccionado(paisSelected);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setPaisIngresado(e.target.paisEnviado.value)

    if(paisSeleccionado.name === e.target.paisEnviado.value){
      setEsCorrecta(true);
      setPuntos(puntos+10);
      setAnswer('Es correcto!');
    }
    else{
      setEsCorrecta(false)
      setPuntos(puntos-1)
      setAnswer('Es incorrecto! Vuelva a intentarlo')

    }
  }

  const otraBandera = () => {
    getRandomObject(paises);
    setPaisIngresado('');
    setEsCorrecta(false);
    setPuntos(puntos);  
    setAnswer('');
  }


  useEffect(() => {
    axios.get(baseURL).then ((response) => {
      setPaises(response.data.data);
      getRandomObject(response.data.data);
    });
  
  }, []);


return (
    <div className="App">
      <header className="App-header">
      <div className='boxInput'>
        <p></p>
        <Bandera pais={paisSeleccionado}></Bandera>
        <form onSubmit={onSubmitHandler}>
          {esCorrecta ? <p></p> : <h5 className='h5'>Adivine el pais</h5>}
          {esCorrecta ? <p></p> : <input type = "text" name="paisEnviado"/>}
          {esCorrecta ? <p></p> : <button type='submit'>Enviar</button>}
          {console.log(esCorrecta)}
        </form>
             
        {answer} <p></p>      
        {esCorrecta ? <button onClick={otraBandera}>Pasar a la siguiente</button> : <p></p>}       

        
        <p>Puntos: {puntos}</p>
      </div>
      
      </header>

    </div>
  );

}
export default App;
