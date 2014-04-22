(function(root){
	require(["config"], function(config){
		requirejs.config(config);		

		require([
			"typeahead",
			"bootstrap-tagsinput",
			"App",
			"controllers/applicationController",
			"controllers/tagsController"
			]);

	});
})(this);

