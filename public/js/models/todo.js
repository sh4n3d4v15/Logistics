if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['backbone'] , function(Backbone){
	 TodoModel = Backbone.Model.extend({
		defaults: {
			heading : 'No heading yet!',
			text: 'when in rome!',
			width: 1,
			color: 'blue',
			img: 'pin'
		},
		url: '/post',

		initialize: function(){		
		console.log('model created server side baby!')	
		},
		parse: function(data){
			//this.set({ id : data._id})
		}	
	})
	return TodoModel;
})

