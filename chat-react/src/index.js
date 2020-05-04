
import 'normalize.css';
import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Switch, Route} from "react-router-dom";
import router from "./core/router.config";

ReactDOM.render(
    <Router>
           <Switch>
            {router.map(({ component, path }) => (
              <Route exact component={component} key={path} path={path} />
            ))}
          </Switch>
    </Router>,
document.getElementById("root"));
