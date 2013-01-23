require.config({
  baseUrl: "/js/",
  urlArgs: 'cb=' + Math.random(),
   paths : {
    jquery            : 'libs/jquery/jquery-1.8.0.min',
    bootstrap         : 'libs/bootstrap/bootstrap',
    underscore        : 'libs/underscore/underscore-min',
    backbone          : 'libs/backbone/backbone-min',
    text              : 'libs/require/text',
    leaflets          : 'http://cdn.leafletjs.com/leaflet-0.4.4/leaflet',
    jasmine           : 'test/lib/jasmine',
    'jasmine-jquery'  : 'test/lib/jasmine-jquery',
    'jasmine-html'    : 'test/lib/jasmine-html', 
    spec              : '../test/jasmine/spec/'
   },


  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine','jasmine-jquery'],
      exports: 'jasmine'
    },
    'jasmine-jquery': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});


window.store = "TestStore"; // override local storage store name - for testing

require(['underscore', 'jquery', 'jasmine-html','jasmine-jquery'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('test/jasmine/spec/models/TodoSpec'); 
  specs.push('test/jasmine/spec/views/ClearCompletedSpec');



  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
