import Table_Empleados from './components/Table_Empleados.jsx'
import Navegacion from './components/Navegacion.jsx'
import Header from './components/Header.jsx'
import Table_Servicios from './components/Table_Servicios.jsx'
import Empleado from './components/Empleado.jsx'



function App() {  

    return (
    <>
    <Header />
    <Navegacion />
    <h1>Equipo</h1>
    <Table_Empleados />
    <Table_Servicios />
    <Servicio />
    <Empleado/>
    </>
  )
}

export default App