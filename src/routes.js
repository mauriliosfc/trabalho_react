import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'
import Imagens from './components/Imagens'
import Forms from './components/Forms'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Ex1} />
            <Route path="/1" component={Ex1} />
            <Route path="/2" component={Ex2} />
            <Route path="/4" component={Ex4} />
            <Route path="/5" component={Ex5} />
            <Route path="/imagens" component={Imagens} />
            <Route path="/form" component={Forms} />
        </Switch>
    </BrowserRouter>
)