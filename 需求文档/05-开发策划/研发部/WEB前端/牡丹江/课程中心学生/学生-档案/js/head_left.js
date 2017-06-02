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
	
	
	//小博士
	$('#xiaoboshi,.boshiPic,.boshi,.r_border .xiaoboshi,.xiaoboshi,.showxbs').click(function(){
		window.location.href='dangan/dossier.html';
	});
	
});
