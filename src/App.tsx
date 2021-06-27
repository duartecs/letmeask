import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./Pages/Home";
import { NewHome } from "./Pages/NewHome";
import { Room } from "./Pages/Room";

import { AuthContextProvider } from "./contexts/AuthContext";
import { AdminRoom } from "./Pages/AdminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewHome} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
