import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/index.js";
import Interventions from "./containers/Interventions/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus);

export const DateContext = React.createContext();

function App() {
  // Récupérer le jour, le mois et l'année au jour d'aujourd'hui
  const dateNow = new Date(Date.now());
  const day = dateNow.getDate();
  const month = dateNow.getMonth();
  // Conversion en string pour manipulation de formatage
  const date = {
    day: String(day).length > 1 ? String(day) : "0" + String(day),
    month:
      String(month).length > 1 ? String(month + 1) : "0" + String(month + 1),
    year: String(dateNow.getFullYear()),
  };

  return (
    <DateContext.Provider value={date}>
      <Router>
        <Switch>
          <Route path="/myinterventions">
            <Interventions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </DateContext.Provider>
  );
}

export default App;
