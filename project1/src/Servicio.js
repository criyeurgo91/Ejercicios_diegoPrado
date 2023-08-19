
function Servicio() {
  return (
    <div className="Servicio">
        <h1 className="Titulo">Bienvenido a mandaderos 5_8</h1>
        <p className="Subtitulo">
            Ingresa tu solicitud:
        </p>
        <form action="">
            <br></br>
            <textarea name="Servicio" id="Servicio" cols="30" rows="10"></textarea>
            <br></br>
            <input type="submit" name="enviar" value="Enviar"></input>
            <input type="reset" name="borrar" value="Eliminar"></input>
        </form>
    </div>
    
  );
}

export {Servicio} ;