import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <div className="App">
     <NavBar />
     <hr />
    <ItemListContainer/>
    <hr />
    <ItemCount />
    </div>
  )
}

export default App
