Ext.define('GS.model.BlogPost', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'title', type: 'string'},
            {name: 'link', type: 'string'},
            {name: 'author', type: 'string'},
            {name: 'contentSnippet', type: 'string'},
            {name: 'content', type: 'string'}
        ]
    }
});