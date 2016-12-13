$(function(){
	/*左侧切换*/
	$('.left_list a').click(function(){
		$(this).addClass('list_active').siblings().removeClass('list_active');
	});
	/*右侧上边分类切换*/
	$('.sub_r .quxian span').live('click',function(){
		$(this).addClass('sub_active').siblings().removeClass('sub_active');
	})
	$('.sub_r .xiaoji span').live('click',function(){
		$(this).addClass('sub_active').siblings().removeClass('sub_active');
	})
	
//	/*左侧高度动态赋值*/
//	_height();
//	function _height(){
//	    var _height  =  $('.main_right').height() + 'px';
//	    $('.main_left').css('height',_height);
//	}
})