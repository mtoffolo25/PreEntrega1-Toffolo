import CartWidget from "../CartWidget/CartWidget"
import logo from "../assets/logo-st.jpg"

const NavBar = () => {
    return (
        <nav>
            <img className="logo" src={logo} alt="logo-st-mc" />
            <h1>SERVICIO TÉCNICO - MC</h1>
            <button><CartWidget /></button>
            <hr />
            <>
                <button>Periféricos</button>
                <button>Placas de Video</button>
                <button>Monitores</button>
                <button>Procesadores</button>
                <button>Memorias RAM</button>
                <button>Almacenamiento</button>
                <button>Fuentes</button>
                <button>Mothers</button>
                <button>Servicio Técnico Especializado</button>
            </>
        </nav>
    )
}
export default NavBar