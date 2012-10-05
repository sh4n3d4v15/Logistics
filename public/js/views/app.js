define(['backbone' , 'views/todo' , 'models/todo','models/hero','collections/todos','views/hero'] , function(Backbone , TodoView ,  TodoModel , HeroModel ,  TodoCollection , HeroView){
	 AppView = Backbone.View.extend({

		el : $('#features'),

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
				elem.append( todoView.el ).fadeIn('fast');
			})
				
		}
	})
	return AppView;
})
