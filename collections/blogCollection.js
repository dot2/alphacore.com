Posts = new Meteor.Collection('posts');

PostSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    body: {
        type: String,
        label: "Company"
    },
    richTextFieldName: {
        type: String,
        autoform: {
            type: "medium"
        }
    },
    tags: {
        type: String,
        optional: true,
        label: "Tags"
    },
    excerpt: {
        type: String,
        label: "excerpt"
    },
    author: {
        type: String,
        label: "author"
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Posts.attachSchema(PostSchema);
