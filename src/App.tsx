import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { NewHome } from "./Pages/NewHome";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewHome} />
    </BrowserRouter>
  );
}

export default App;
