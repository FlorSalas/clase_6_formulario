import { useState, useEffect } from "react";

export default function App(){
  const [datosPersonales, setDatosPersonales] = useState({
    dni: 0,
    nombre:""
  });

  useEffect(()=>{
    console.log(datosPersonales);
  }, [datosPersonales]);

  // const handleChangeDni= (e)=>{ //los 3 puntitos se llaman spreadoperator. eel spread hace una copia exacta del array qque tengo. en este caso, busca al parametro del objeto (dni) y le agrega la info que yo le proporciono cuando escribo en el value
  //   setDatosPersonales({ ...datosPersonales, dni: e.target.value}); //aca guardo un objeto,que es el dni.. cambia tambien el objeto que tengo en la linea 5.  
  // };

  // const handleChangeNombre= (e)=>{ //los 3 puntitos se llaman spreadoperator. eel spread hace una copia exacta del array qque tengo. en este caso, busca al parametro del objeto (dni) y le agrega la info que yo le proporciono cuando escribo en el value
  //   setDatosPersonales({ ...datosPersonales, nombre: e.target.value}); //aca guardo un objeto,que es el dni.. cambia tambien el objeto que tengo en la linea 5.  
  // };

  //todo esto puede hacerse mas sencillo y queda asi:

  const handleChange= (e)=>{
    setDatosPersonales({
      ...datosPersonales, [e.target.name]: e.target.value //aca en vez de tener una funcion para dni y otra parra nombre, directamente hago una que toma el name de cada input y mediantte eso cambia los parametros del objeto principal
      //tambien lo puedo hacer asi: [name]: e.target.value
    });
  };

  return(
    <div className="App">
      <input
        name="dni"
        placeholder="dni"
        defaultValue={datosPersonales.dni} //si uso el defaultvalue puedo hacer luego un onchange, con value solo no. 
        onChange={(e)=> handleChange(e)} //handleChange llama por defecto a un evento onChange
      />
      <br />
      <input 
        name="nombre"
        placeholder="nombre"
        defaultValue={datosPersonales.nombre}
        onChange={(e)=> handleChange(e)}
      />
      <br />
      <button>Agregar</button>
    </div>
  )
}
