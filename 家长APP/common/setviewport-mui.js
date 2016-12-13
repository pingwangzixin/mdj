


(function(global){
    function remChange(){
        document.documentElement.style.fontSize=50*document.documentElement.clientWidth/375+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);

})(window);



// html
// <a id="scrollToTop" class="backTop hide"></a>

//mui框架的返回顶部
/*$(function(){
	//返回顶部
	var scrollToTopBox = document.getElementById('scrollToTop');
	//返回按钮tap
	scrollToTopBox.addEventListener('tap', function(e) {
	    e.stopPropagation();
	    mui('#refreshContainer').pullRefresh().scrollTo(0, 0, 100);//滚动到顶部
	});
	document.getElementById('refreshContainer').addEventListener('scrollend', function() {
	    if (mui('#refreshContainer').pullRefresh().y <= window.innerHeight * (-1) && scrollToTopBox.classList.contains('hide'))
	        scrollToTopBox.classList.remove('hide');
	    else if (mui('#refreshContainer').pullRefresh().y > window.innerHeight * (-1) && !scrollToTopBox.classList.contains('hide'))
	        scrollToTopBox.classList.add('hide');
	});

});*/


//要用mui框架以后在原基础上修改的

$(function(){
	/*返回顶部========================================*/
	(function(){
		var num2=0;
		var height=$(window).height();
		$('#refreshContainer').on('scroll',function(){
			var obj=document.querySelector('.mui-scroll');
			var topText=obj.getAttribute('style');
			var startNum=topText.indexOf('translate3d');
			var endNum=topText.indexOf('translateZ');
			var str=topText.substring(startNum,endNum);
			var arr=str.split(',');
			num=parseInt(arr[1]);
			num2=num;
			if(Math.abs(num2)>=height){
				$('.scrollTop').show();
			}else{
				$('.scrollTop').hide();
			}
		})
		
	})()
	$(document).on("tap","a.scrollTop",function(){
		mui('#refreshContainer').pullRefresh().scrollTo(0, 0, 100);
		$('.scrollTop').hide();
	});
});