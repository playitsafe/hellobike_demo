import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from 'pages/login';
import Buttons from 'pages/ui/buttons';
import Modals from 'pages/ui/modals';
import NoMatch from 'pages/nomatch';

class IRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={ () => 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
          <Route path="/order/detail" component={Admin} />
        </App>
      </HashRouter>
     );
  }
}
 
export default IRouter;