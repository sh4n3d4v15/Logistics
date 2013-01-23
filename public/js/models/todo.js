if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['backbone'] , function(Backbone){
	 TodoModel = Backbone.Model.extend({

	 	defaults: {
	 		status : 'Accepted',
	 		timeStamp : ''
	 	},

		url: '/post',

		initialize: function(){		
		},

		complete : function(){
			var dt = new Date().toString().replace('GMT+0100 (BST)', '');
			this.set({status : 'COMPLETED', timeStamp : dt })
		},

		parse: function(data){
			//this.set({ id : data._id})
		}	
	})
	return TodoModel;
})


