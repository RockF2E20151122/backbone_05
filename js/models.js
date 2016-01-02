var TeamModel = Backbone.Model.extend({
	defaults : {
		name : ""
	},
	
	initialize : function() {
		this.bind("change", this.changed);
	},
	
	validate : function(attributes){
		console.log('inside validate');
		if (!!attributes && attributes.name === "teamX") {
			return "Error!";
		}
	},
	
	changed : function() {
		console.log("changed");
	}
});