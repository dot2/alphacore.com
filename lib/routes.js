FlowRouter.route('/', {
    name: 'landingPage',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'home'});
    }
});

FlowRouter.route('/design', {
    name: 'design',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Design'});
    }
});

FlowRouter.route('/development', {
    name: 'development',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Development'});
    }
});

FlowRouter.route('/marketing', {
    name: 'marketing',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Marketing'});
    }
});

FlowRouter.route('/packages', {
    name: 'packages',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Packages'});
    }
});

FlowRouter.route('/contact', {
    name: 'contact',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Contact'});
    }
});
