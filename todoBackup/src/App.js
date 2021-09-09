import Authentication from "./Components/Authentication";
import TodoList from "./Components/TodoList";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import {theme} from './Components/Styles/theme'
import { CssBaseline } from "@material-ui/core";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>

      <Switch>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/">
            <Authentication />
          </Route>
        </Switch>

      </Router>

    </ThemeProvider>
  )
}

export default App;
