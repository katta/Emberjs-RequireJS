define(["ember","App","views/ApplicationView"], function(Ember, App, ApplicationView){
	var ApplicationController = Ember.Controller.extend();

	App.ApplicationView = ApplicationView;
	
    App.ApplicationRoute = Ember.Route.extend({
        renderTemplate: function() {
            this.render();
        }
    });

	return ApplicationController;
});
