$(function(){
	//单选
	$(document).on('click','.danxuan li dd',function(){
		var List = $(this).parents('li').find('dd');
		List.removeClass('sel');
		$(this).addClass('sel');
	});
	//多选
	$(document).on('click','.duoxuan li dd',function(){
		this.sel = !this.sel;
		if(this.sel){
			$(this).addClass('sel');
		}else{
			$(this).removeClass('sel');
		}
	});
	//判断
	$(document).on('click','.panduan dd button',function(){
		var List = $(this).parents('li').find('button');
		List.removeClass('active');
		$(this).addClass('active');
	});
	
	//
	$(document).on('click','.question span',function(){
		var List = $(this).parent().find('span');
		List.removeClass('sel');
		$(this).addClass('sel');
	});
});
