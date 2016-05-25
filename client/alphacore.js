Template.home.onCreated(function() {
    SEO.set({
        title: 'Home - AlphaCore',
        description: 'At AlphaCore we are web designers, developers, and marketers. ',
        meta: {
            'property="og:image"': 'http://www.alphacoredesign.com/images/wolf.jpg'
        }
    });
});

Template.Design.onCreated(function() {
    SEO.set({
        title: 'Web Design - AlphaCore',
        description: 'We want to tell your brand story, turn it into a meaningful identity, and create an interactive digital experience. ',
        meta: {
            'property="og:image"': 'http://www.alphacoredesign.com/images/wolf.jpg'
        }
    });
});

Template.Development.onCreated(function() {
    SEO.set({
        title: 'Web Development - AlphaCore',
        description: 'Front-End Development, Web app development, e-commerce ',
        meta: {
            'property="og:image"': 'http://www.alphacoredesign.com/images/wolf.jpg'
        }
    });
});

Template.Marketing.onCreated(function() {
    SEO.set({
        title: 'Marketing - AlphaCore',
        description: 'We engage the target audience and initiate participation. Increasing brand awareness. ',
        meta: {
            'property="og:image"': 'http://www.alphacoredesign.com/images/wolf.jpg'
        }
    });
});
