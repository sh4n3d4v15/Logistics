define(['backbone'] , function(Backbone){
	var HeroModel = Backbone.Model.extend({
		defaults : {
			title : "Carrier Managment"
		},

		initialize : function(){
		}
	})
	return HeroModel;
})