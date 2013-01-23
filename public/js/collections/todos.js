if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['backbone','models/todo'] , function( Backbone , TodoModel ){

	TodosCollection = Backbone.Collection.extend({

		model : TodoModel,

		url : '/fetch',

		initialize: function(){
		},

		parse: function( data ){
			return data;
		}
	})

	return TodosCollection;
})

