import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

<<<<<<< HEAD
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
>>>>>>> imbueworld/Influencer-Decentralized/master

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
          <Switch>
            <div>
              {router.map((route, index) => {
                return (
                  <div key={index}>
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={((props) => {
                        return (
                          <route.layout {...props} />
                        );
                      })}
                    />
                  </div>
                )
              })}
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
