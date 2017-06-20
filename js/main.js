(function ($) {

    //demo data
    var contacts = [
        { 
            name: "Иванова Мария Николаевна", 
            job: "Бухгалтер", 
            dep: "Экономический", 
            tel: "+375 29 447-65-41", 
            email: "mariya@me.com"
        },
        { 
            name: "Петров Виктор Семенович", 
            job: "Зам. Директора", 
            dep: "Экономический", 
            tel: "+375 44 745-85-89", 
            email: "victor@me.com" 
        },
        { 
            name: "Захаров Дмитрий Петрович", 
            job: "Маркетолог", 
            dep: "Реклама", 
            tel: "+375 29 447-65-41", 
            email: "dima@me.com"
        },
        { 
            name: "Волкова Анна Александровна", 
            job: "Менеджер по работе с клиентами", 
            dep: "Продаж", 
            tel: "+375 44 745-85-89", 
            email: "anna@me.com" 
        }
        
    ];

   
    var Contact = Backbone.Model.extend({
        
    });

  
    var Directory = Backbone.Collection.extend({
        model: Contact
    });


    
    var ContactView = Backbone.View.extend({
        tagName: "tr",
        template: $("#contactTemplate").html(),
        render: function () {
            var tmpl = _.template(this.template);
            
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    
    var DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = new Directory(contacts);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        },
    });

    
    var directory = new DirectoryView();

} (jQuery));