Ext.define('GS.controller.BlogController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            blogList: '.bloglist'
        },
        control: {
            blogList: {
                itemtap: 'showBlogDetails'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    showBlogDetails: function (nestedlist, list, index, element, post) {
        nestedlist.getDetailCard().setHtml(post.get('content'));
    }
});