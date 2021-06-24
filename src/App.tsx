import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { NewHome } from "./Pages/NewHome";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewHome} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
