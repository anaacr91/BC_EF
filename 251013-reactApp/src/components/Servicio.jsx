function Servicio({ nombre, descripcion, precio }) {
    return (
        <div className="servicio">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>Precio: €{precio}</p>
        </div>
    );
}
export default Servicio;