import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from './routes/IndexPage';
import Footer from './components/footer'
function RouterConfig({ history ,app}) {
  const Home = dynamic({
    app,
    component: () => import('./routes/home/home')
  })
  const User = dynamic({
    app,
    component: () => import('./routes/home/user')
  })
  const Classify = dynamic({
    app,
    component: () => import('./routes/home/classify')
  })
  const Search = dynamic({
    app,
    component: () => import('./routes/home/search')
  })
  const Choiceness = dynamic({
    app,
    component: () => import('./routes/home/choiceness')
  })
  return (
    <Router history={history}>
    <div>
      <Footer/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/index"  component={IndexPage} />
      <Route path="/choiceness"  component={Choiceness} />
      <Route path="/Search"  component={Search} />
      <Route path="/classify"  component={Classify} />
      <Route path="/user"  component={User} />
      </Switch>
    </div>
    </Router>
  );
}

export default RouterConfig;
