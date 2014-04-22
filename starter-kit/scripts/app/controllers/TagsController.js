'use strict';

define(["App","ember","text!templates/tagsTemplate.hbs"],function(App, Ember, tagsTemplate){


	App.TagsView = Ember.View.extend({
		template: Ember.Handlebars.compile(tagsTemplate),
		
		didInsertElement : function() {
			$('#tags').tagsinput({
				freeInput: false
			});

			$('#tags').tagsinput('input').typeahead({
				valueKey: 'text',
  				local: ["Mumbai","Bangalore","Amsterdam"]
			}).bind('typeahead:selected', $.proxy(function (obj, datum) {  
			  this.tagsinput('add', datum.text);
			  this.tagsinput('input').typeahead('setQuery', '');
			}, $('#tags')));
		}
	})
})