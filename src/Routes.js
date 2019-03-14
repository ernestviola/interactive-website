import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Articles from './containers/Articles';
import NotFound from './containers/NotFound';

export default () =>
 <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/articles" exact component={Articles} />
     <Route component={NotFound} />
 </Switch>