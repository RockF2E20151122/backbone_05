var Router = Backbone.Router.extend({

	// Hash maps for routes
	routes : {
		"": "index",
		"/teams" : "getTeams",
		"/teams/:country" : "getTeamsCountry",
		"/teams/:country/:name" : "getTeam",
		"*error" : "fourOfour"
	},

	index: function(){
		var me = this;
		// Homepage 
		var team1 = new TeamModel({
			name : "name1"
		});
		console.log(team1.get("name")); // prints "name1"

		// "name" attribute is set with a new value
		team1.set({
			name : "name2"
		});
		console.log(team1.get("name")); 

		var teams = new Collections();
		
		teams.add(team1);
		teams.add(new TeamModel({
			name : "Team B"
		}));
		teams.add(new TeamModel());
		teams.remove(team1);

		console.log(teams.length);
	},

	getTeams: function() {
		// List all teams 
		console.log('this into getTeams');
		var teams = new Collections();
		
	},
	getTeamsCountry: function(country) {
		// Get list of teams for specific country
	},
	getTeam: function(country, name) {
		// Get the teams for a specific country and with a specific name
	},	
	fourOfour: function(error) {
		// 404 page
	}
});