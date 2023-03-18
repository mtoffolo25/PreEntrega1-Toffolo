import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainers from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className="App">
     <NavBar />
     <hr />
    <ItemListContainers greeting={`¡Bienvenidos!`} />
    </div>
  )
}

export default App
