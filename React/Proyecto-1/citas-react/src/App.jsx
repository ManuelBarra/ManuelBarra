import Header from "./components/Header"
import Formualrio from "./components/Formualrio"
import ListadoPasientes from "./components/ListadoPasientes"

function App() {
  return (
    <div className="container mx-auto mt-20"> 
      <Header />
      <div className="mt-12 md:flex">
        <Formualrio />
        <ListadoPasientes />
      </div>
      
    </div>
  )
}

export default App


