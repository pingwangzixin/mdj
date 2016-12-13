$(function(){
	$.ajax( {
        url: '../head.html',
        type: "GET", //如果是html静态页面要用get方法
        success: function(data){
            $(".header").html(data);
        }
	});
	$.ajax( {
        url: '../left.html',
        type: "GET", //如果是html静态页面要用get方法
        success: function(data){
            $(".Left").html(data);
        }
	});
});
