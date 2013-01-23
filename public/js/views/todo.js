define(['backbone','text!templates/todo.html'] , function(Backbone , templates){
	var TodoView = Backbone.View.extend({

		template : _.template( templates ),

		tagName: 'tr',

		events: {
				"click": "clicker"
			},

		initialize: function() {
			this.render();
},
		render: function(){
			if( this.model.get("status") == 'COMPLETED' ){
				$(this.el).addClass('complete')
			}
			$(this.el).html( this.template( this.options.model.toJSON() ) )
		},
		clicker : function(){
			
					//this.render();
		}
	})
	return TodoView;
})