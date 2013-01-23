require.config({
	paths : {
		jquery 			: 'libs/jquery/jquery-1.8.0.min',
		bootstrap 	: 'libs/bootstrap/bootstrap',
		underscore 	: 'libs/underscore/underscore-min',
		backbone 		: 'libs/backbone/backbone-min',
		text 				: 'libs/require/text',
		mainConfigFile: "public/js/main",
		leaflets: 'http://cdn.leafletjs.com/leaflet-0.4.4/leaflet'
	},

	shim: {
		backbone : {
			'deps': ['jquery','underscore'],
			'exports': 'Backbone'
		}
	}
})

require(['views/app','bootstrap','backbone','collections/todos'] , function(AppView , Booststrap , Backbone, collection){

	// console.log(Backbone)
		var AppRouter = Backbone.Router.extend({
		routes: {
			"" : "showMessage"
		},

		showMessage : function(){
			console.log("show message pressed")
		}
	});


	 

	$(function(){
		var socket = io.connect();

		socket.on('completeJob' , function(data){
			appView.complete(data);
		})
		var appRouter = new AppRouter();
		console.log(appRouter)
		Backbone.history.start();
	})

	$('.leanbutton').on('click' , function(){
		window.location = '/liveloads'
	})

	$('#searchButton').on('click' , function(){
		
		appView.complete(3617419688)
	})

	window.appView = new AppView();

})


