import React from "react";
import '../EstilosCSS/Testimonio.css';

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
       <img 
       className='imagen-testimonio'
       src={require(`../Imagenes/${props.imagen}.jpeg`)}
       alt='Foto de una recamara'/>
       <div className="contenedor-texto-conceptos">
        <p className='nombre-foto'> 
        <strong>"{props.nombre}"</strong></p>
        <p className='Recamara-familiar'>{props.beneficio}</p>
        <p className='descripcion-foto'>{props.descripcion}</p>
       </div>

    </div>
  );
}
export default Testimonio;