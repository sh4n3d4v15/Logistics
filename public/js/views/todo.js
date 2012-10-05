define(['backbone','text!templates/todo.html'] , function(Backbone , templates){
	var TodoView = Backbone.View.extend({

		template : _.template( templates ),

		events: {
				"click": "clicker"
			},

		initialize: function() {
			this.render();
},
		render: function(){
			$(this.el).html( this.template( this.options.model.toJSON() ) )
		},
		clicker : function(){
			//var h = this.options.model.get("heading")
			//console.log(h)
			//$(this.el).css({ position : "absolute"}).animate({ "left" : "45"})
			
			this.model.set({ heading : "A clicked tile!"})
			this.options.model.save();
			//this.render();
		}
	})
	return TodoView;
})