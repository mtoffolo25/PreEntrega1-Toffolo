import CartWidget from "../CartWidget/CartWidget"

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
        </nav>
    )
}
export default NavBar