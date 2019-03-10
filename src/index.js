import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route} from 'react-router-dom';
import App from './App';
import Processing from './components/processing';

ReactDOM.render(
    (
        <HashRouter>
           <div>
             <Route exact path="/" component={App} />
             <Route path="/app" component={App} />
             <Route path="/processing" component={Processing} />
           </div>
        </HashRouter >
     ), document.getElementById('root')
);

serviceWorker.unregister();