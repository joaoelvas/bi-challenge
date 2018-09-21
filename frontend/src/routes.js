import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/layout';
import PostView from './components/Post';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/posts/:id" exact component={PostView}/>
            </Switch>
        </Layout>
        
    );
};

export default Routes;