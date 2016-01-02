//App.Views.Teams = Backbone.View.extend({
//	el : 'ul.team-list'
//});

var Teamview = Backbone.View.extend({
	className : '.team-element',
	tagName : 'div',
	model1 : new TeamModel(),
	model2 : new TeamModel(),
	
	initialize : function() {
		this.model1.bind('change', this.render, this);
		
		this.model2.on('remove', function(e){
			this.model2.off('remove', arguments.callee );
		}, this);
		
		this.model2.on('myEvent', function( arg1, arg2 ){
			console.log( arge, arg2 );
		});
		this.model2.trigger('myEvent');
		
		/**
		 * B.on('someThingHappened',A.doSomeThing)是当对象B, someThingHappened时候知对象A去doSomeThing；
		 * 而
		 * A.listenTo(B,'someThingHappend',A.doSomeThing)是对象A主动去盯着对象B，当它someThingHappend的时候去doSomeThing。
		 * */
		this.model1.listenTo( 'change', this.render );
		this.model1.lintenTo(this.model2, 'remove', this.render );		//IOC
		//在测试层面，可以轻易地把被监听对象换成mock的测试代码来模拟真实情况。
		
		this.model1.listenTo( 'change:ownEvent', this.render );
		
		console.log('init viewffff.');
	},

	render : function() {
		// Compile the template
		var compiledTemplate = _.template($('#teamTemplate').html());

		//$(this.el).html("<span>" + this.model.get("name") + "</span>");
		$(this.el).html(compiledTemplate(this.model.toJSON()));
		
		this.$('.someClass').on('scroll', function(){
			
		});
		return this;
	},
	events : {
		'click a.more' : 'moreInfo'
	},
	
	moreInfo : function(e){
		// Logic here
	}

});
