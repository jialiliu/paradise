/**
 * @File   : App.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2018-4-4 16:56:42
 * @Link: dtysky.moe
 */
import * as React from 'react';
import {Route, Switch, Redirect, withRouter, RouteComponentProps} from 'react-router-dom';
import * as cx from 'classnames';

import {effects} from './routes';
import Topbar from './pages/Topbar';
import Bottom from './pages/Bottom';
import Home from './pages/Home';
import Tags from './pages/Tags';
import Demo from './pages/Demo';

import './base.scss';
import 'antd/dist/antd.css';

interface IPropTypes extends RouteComponentProps<{}> {}

class App extends React.Component<IPropTypes, {}> {
  public render() {
    return (
      <React.Fragment>
        {this.renderTopbar()}
        {this.renderRoutes()}
        {this.renderBottom()}
      </React.Fragment>
    );
  }

  private renderTopbar() {
    if (!/^\/effect/.test(this.props.location.pathname)) {
      return <Topbar />;
    }

    return null;
  }

  private renderBottom() {
    if (!/^\/effect/.test(this.props.location.pathname)) {
      return <Bottom />;
    }

    return null;
  }

  private renderRoutes() {
    return (
      <Switch>
        {
          effects.map(effect => (
            <Route
              key={effect.path}
              path={`/effect/${effect.path}`}
              render={() => <Demo {...effect} />}
            />
          ))
        }
        <Route path={'/tags'} component={Tags} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default withRouter(App);
