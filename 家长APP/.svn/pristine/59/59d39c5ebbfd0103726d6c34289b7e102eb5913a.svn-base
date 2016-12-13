


(function(global){
    function remChange(){
        document.documentElement.style.fontSize=50*document.documentElement.clientWidth/375+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);

})(window);




$(function(){
	/*返回顶部*/
	$(window).scroll(function(){
		var _Height=$(window).height()*3;
		if($(document).scrollTop() > _Height){
			$("a.scrollTop").show();
		}else{
			$("a.scrollTop").hide();
		}
	});
	$(document).on("click","a.scrollTop",function(){
		$("html,body").stop().animate({scrollTop:0},200);
	});
});
