import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "/home/leilani/react-hooks-react-router-dynamic-routes/src/components/NavBar.js";
import MoviesPage from "/home/leilani/react-hooks-react-router-dynamic-routes/src/components/MoviesPage.js"

function App() {
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;