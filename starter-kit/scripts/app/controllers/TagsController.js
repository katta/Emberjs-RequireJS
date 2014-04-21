'use strict';

define(["App","ember","text!templates/tagsTemplate.hbs"],function(App, Ember, tagsTemplate){
	App.TagsView = Ember.View.extend({
		template: Ember.Handlebars.compile(tagsTemplate)
	})
})