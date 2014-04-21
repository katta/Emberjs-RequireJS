(function(root){
	require(["config"], function(config){
		requirejs.config(config);		

		require(["bootstrap-tagsinput",
			"App",
			"controllers/ApplicationController",
			"controllers/TagsController"
			]);

	});
})(this);

