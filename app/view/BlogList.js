Ext.define('GS.view.BlogList', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'bloglist',

    config: {
        iconCls: 'star',
        displayField: 'title',
        title: 'Blog',
        store: {
            type: 'tree',
            // fields: [
            //     'title', 'link', 'author', 'contentSnippet', 'content',
            //     { name: 'leaf', defaultValue: true }
            // ],
            model: 'GS.model.BlogPost',
            root: {
                leaf: false
            },
            proxy: {
                type: 'jsonp',
                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                reader: {
                    type: 'json',
                    rootProperty: 'responseData.feed.entries',
                }
            },
            listeners: {
                load: function( thisNode, records, success, eOpts ) {
                    records.map(function(record) { record.set('leaf', true) });
                }
            }
        },
        detailCard: {
            xtype: 'panel',
            scrollable: true,
            styleHtmlContent: true
        }
    }
});