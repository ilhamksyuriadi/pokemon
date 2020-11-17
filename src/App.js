import './App.css';
import PokemonList from './views/PokemonList';
import MyPokemon from './views/MyPokemon';
import PokemonDetail from './views/PokemonDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/mypokemon">
            <MyPokemon />
          </Route>
          <Route exact path="/pokemon/:name">
            <PokemonDetail />
          </Route>
          <Route exact path="/">
            <PokemonList />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
