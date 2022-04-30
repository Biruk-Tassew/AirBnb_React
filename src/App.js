import NavBar from './components/NavBar'
import Hero from './components/hero'
import Lower from './components/lower'
import data from "./data"
import './App.css'

function App() {
  const LowerCard = data.map(item => {
    return (
      <Lower 
        key = {item.id}
        item = { item }
      />
    )
  }) 
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className='card-list'>
        {LowerCard}
      </section>
    </div>
  );
}

export default App;
