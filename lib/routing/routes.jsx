

import flowRouter from 'flow-router';
import React from 'react';

import { Meteor } from 'meteor/meteor';

import { render } from 'react-dom';
import ReactLayout from 'react-layout';
import HomeLayout from '../../client/components/layouts/home.jsx'
import Layout from '../../client/components/layouts/layout.jsx'

var publicRoutes = flowRouter.group({
    name: 'publicroutes'
});
var privateRoutes = flowRouter.group({
    name: 'privateroutes'
});

publicRoutes.route('/',{
    name:'Home',
    action:function(){
        ReactLayout.render(HomeLayout,{})
    }
});
privateRoutes.route('/dashboard',{
    name:'Dashboard',
    action:function(){
        ReactLayout.render(Layout,{
            sidebar:<div>sidebar</div>,
            content:<div>content</div>
            })
    }
})