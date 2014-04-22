define(["ember","App","views/applicationView"], function(Ember, App, applicationView){
	var applicationController = Ember.Controller.extend();

	App.ApplicationView = applicationView;
	
    App.ApplicationRoute = Ember.Route.extend({
        renderTemplate: function() {
            this.render();
        }
    });

	return applicationController;
});
