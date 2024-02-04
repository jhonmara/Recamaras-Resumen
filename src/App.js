import Testimonio from './componentes/Testimonio';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>RECAMARAS</h1>
        <Testimonio
          nombre='RECAMARA JAZMIN'
          beneficio='TIENE MEJOR COMODIDAD POR SU TAMAÑO.'
          descripcion='ESTA RECAMARA CONTIENE UNA CABECERA TAPIZADA EN TELA O VINIPIEL, UN PAR DE BUROS DE DOS CAJONES, UN PAR DE BASES INDIVIDUALES TAPIZADAS EN VINIPIEL O TELA, UN BAUL MATRIMONIAL TAPIZADO EN VINIPIEL O TELA Y UN TOCADOR DE 6 CAJONES CON ESPEJO.'
          imagen='jazim'
          />
          <Testimonio
          nombre='RECAMARA KAROL'
          beneficio='TIENE UN TAMAÑO MATRIMONIAL IDEAL PARA UNA PAREJA'
          descripcion='ESTA RECAMARA CONTIENE UNA CABECERA TAPIZADA EN TELA O VINIPIEL, UN PAR DE BUROS DE DOS CAJONES, UNA BASES MATRIMONIAL TAPIZADAS EN VINIPIEL O TELA, UN BAUL MATRIMONIAL TAPIZADO EN VINIPIEL O TELA Y UN TOCADOR HOLLYWOOD DE 8 CAJONES Y EN EL EPEJO 11 FOCOS.'
          imagen='karol'
          />
          <Testimonio
          nombre='RECAMARA YATZIN'
          beneficio='TIENE UN TAMAÑO MATRIMONIAL IDEAL PARA UNA PAREJA.'
          descripcion='ESTA RECAMARA CONTIENE UNA CABECERA DE LUZ TAPIZADA EN TELA O VINIPIEL, UN PAR DE BUROS DE DOS CAJONES, UNA BASE DE DOS CAJONES Y UN TOCADOR ESCUADRA EN DOS PIEZAS UNA LA CAJONERA CON 4 CAJONES Y OTRA EL ESPEJO QUE SE RECORRE.'
          imagen='yatzin'
          />
      </div>
    </div>
  );
}

export default App;
