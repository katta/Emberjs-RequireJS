define({
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'bootstrap' : {
			deps: ['jquery']
		},
		'bootstrap-tagsinput' : {
			deps: ['bootstrap', 'jquery']
		}
	},
	paths : {
		'App':'app/app',
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
		/*libs*/
		'jquery': 'libs/jquery/1.9.1/jquery',
		'handlebars': 'libs/handlebars/1.0.rc.3/handlebars',
		'ember': 'libs/ember/1.0.0-rc.3/ember',
		'bootstrap':'libs/bootstrap/bootstrap',
		'bootstrap-tagsinput':'libs/bootstrap/bootstrap-tagsinput',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "hbs"
	}

}); 

