$(function(){
	/*头部学科切换*/
	$(document).on('click','.subject span,.grade span,.Class span',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	/*放大效果*/
	$('.scale_big').click(function(){
		$('.situation').addClass('situation_fixed');
		$('.del_down').show();
		$('.scale_big').hide();
		$('.graph-comments').hide();
		$('.situation_close').show();
	});
	
	/*关闭*/
	$('.situation_close').click(function(){
		$('.situation').removeClass('situation_fixed');
		$('.del_down').hide();
		$('.scale_big').show();
		$('.graph-comments').show();
		$(this).hide();
	});

	/*加载更多*/
	$('.more').click(function(){
		var str = $('.exam-list-item').clone();
		$('.research_con').append(str);
	});
	
});
