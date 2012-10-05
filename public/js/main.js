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

require(['views/app','bootstrap','leaflet/map'] , function(AppView , Booststrap , Leaflet){
	
	
	window.appView = new AppView();
})


