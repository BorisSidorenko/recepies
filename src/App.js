import { HashRouter, Switch, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

import './App.css'

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <HashRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App
