import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

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
