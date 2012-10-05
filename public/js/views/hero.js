define(['backbone','text!templates/hero.html'] , function(Backbone , templates){
	var HeroView = Backbone.View.extend({
		
		template: _.template( templates ),
		initialize : function(){
			this.render();
		},

		render: function(){
			$(this.el).html( this.template( this.options.model.toJSON() ) )
		}
	});
	return HeroView;
})