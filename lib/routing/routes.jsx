import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ReactLayout from 'meteor/kadira:react-layout';

import HomeLayout from '../../imports/components/layouts/home.jsx';
import Layout from '../../imports/components/layouts/layout.jsx';

var publicRoutes = FlowRouter.group({
    name: 'publicroutes'
});
var privateRoutes = FlowRouter.group({
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
            });
    }
})