import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo-st.jpg"

const NavBar = () => {
    return (
        <nav>
            <h1>SERVICIO TÉCNICO - MC</h1>
            <div>
                <button>Periféricos</button>
                <button>Placas de Video</button>
                <button>Monitores</button>
                <button>Procesadores</button>
                <button>Memorias RAM</button>
                <button>Almacenamiento</button>
                <button>Fuentes</button>
                <button>Mothers</button>
                <button><CartWidget /></button>
            </div>
            <hr />
            <img src={logo} alt="logo-st-mc" />
            <hr />
        </nav>
    )
}
export default NavBar