import "./styles.css";

import { Switch, Route } from "react-router-dom";
import { UserPage, MainPage } from "./pages";

export default function App() {
  return (
    <Switch>
      <Route exact path="/user/:userId" component={UserPage} />

      <Route
        path="*"
        render={() => {
          return <MainPage />;
        }}
      />
    </Switch>
  );
}
