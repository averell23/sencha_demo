Ext.define('GS.view.ContactForm', {
    extend: 'Ext.form.Panel',
    xtype: 'contactform',
    config: {
        title: 'Contact',
        iconCls: 'user',
        url: 'contact.php',
        layout: 'vbox',
        items: [
            {
                xtype: 'fieldset',
                title: 'Contact Us',
                instructions: '(email is optional)',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'confirm',
                handler: function () {
                    this.up('formpanel').submit();
                }
            }
        ]
    }
});