define([ "ember", "app/router"], function(Ember, Router){	
	var App = Ember.Application.create();
	App.Router = Router;
	
	window.App = App;
	return App;
});
