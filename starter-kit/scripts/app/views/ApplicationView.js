define([
	"ember",
	"text!templates/applicationTemplate.hbs"
], function(Ember, applicationTemplate) {

	var ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(applicationTemplate)
	});
	
	return ApplicationView;
});