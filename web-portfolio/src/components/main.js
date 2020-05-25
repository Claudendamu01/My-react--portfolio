import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import Aboutme from './aboutme';
import Contact from './contact';
import Projets from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/aboutme" component={Aboutme} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projets} />
        <Route  path="resume" component={Resume} />
    </Switch>
)
export default Main;