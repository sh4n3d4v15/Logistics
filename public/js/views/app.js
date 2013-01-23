define(['backbone' , 'views/todo' , 'models/todo','models/hero','collections/todos','views/hero'] , function(Backbone , TodoView ,  TodoModel , HeroModel ,  TodoCollection , HeroView){
	 AppView = Backbone.View.extend({

		el : $('#features'),
		tagName: 'li',

		initialize : function(){
			this.todos = new TodoCollection();
			this.todos.bind('all' , this.render , this);
			this.todos.fetch();
		},

		render: function(){
				var elem = this.el;
				elem.html("");
					this.todos.each(function( model ){
						var todoView = new TodoView({ model : model });
						elem.append( todoView.el ).fadeIn(300);
					})
			},

		complete : function(data){
			this.todos.fetch();
			// .each(function( model ){
			// 	if(model.get("DeliveryNbr")== data){
			// 		model.complete();
			// 	}
			// })				
		}
	})
	return AppView;
})
