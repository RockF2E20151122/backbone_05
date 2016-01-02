$(function(){
    var router = new Router();
    Backbone.history.start({pushState : true});
    //如果目标平台是支持HTML5HistoryAPI的，那么在start时传入{pushstate:true}的参数，就可以去掉URL中的#字符，对SEO有一定帮助。
    
    //Backbone.history.stop();
});
