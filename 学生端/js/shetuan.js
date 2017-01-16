
$(function(){
	/*控制左侧高度================*/
	$('.mainL_border').height($(document).height()-78-46);
	
	/*左侧树点击效果=========================================*/
	$('.ziyuan li').on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
	})
	
	/*控制各列之间的间距===================*/
	$('.detail li').each(function(i,item){
		if(i%3===1){
			$(this).css('margin','0 3.5%');
		}
	})
	
	/*退出社团点击效果===============================*/
	$('.out').on('click',function(){
		$('.delSureDel,.zhezhao').show();
	});
	/*点击弹窗消失=================*/
	$('.delClose,.tijiao>div').on('click',function(){
		$('.delSureDel,.zhezhao').hide();
	})
})
