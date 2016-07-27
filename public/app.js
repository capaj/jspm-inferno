import 'systemjs-hot-reloader/default-listener.js'
import Inferno from 'inferno'
import Home from './routes/home'

import {render} from 'inferno-dom';
import { Router, Route, Link, browserHistory } from 'inferno-router';

const routes = <Route path='/' component={Home} />

const container = document.getElementById('app')

render(<Router history={browserHistory}>
    {routes}
  </Router>, container)
