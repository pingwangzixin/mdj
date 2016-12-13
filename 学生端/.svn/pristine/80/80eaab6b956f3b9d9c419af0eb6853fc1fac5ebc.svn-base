
$(document).ready(function(){
	/******************************  作业列表   *********************************************/
	//作业列表切换
	$('.main_right .list_tit li a').on('click',function(){
		$(this).addClass('list_tit_active').parent().siblings().find('a').removeClass('list_tit_active');
	});



	//星星打分事件
	$(".star_rate").raty({
		path:"../img",
		score: 3
	});



	//选择题
	$(document).on('click','.question .question_daan li span',function(){
		$(this).addClass('judge').parent().siblings().find('span').removeClass('judge');
	});

	/*我的题库切换*/
	$(".my_question .tabs li").on('click',function(){
		$(this).addClass('tabs_active').siblings().removeClass('tabs_active');
	});

	
	//收藏-取消收藏
	$('.submit_btn').click(function(){
		$('#shoucang').show();
		setTimeout(function(){
			$('#shoucang').hide();
		},2000);
		if($(this).text()=='收藏'){
			$('.text-text').text('收藏成功');
		}else if($(this).text()=='取消收藏'){
			$('.text-text').text('取消收藏成功');
		}
		
	});


	/*删除事件*/
	$('.grade').on('click',function(){
		$('.del').show();
	});

	
	/*确认，取消,关闭按钮*/
	$('.ok,.no,.close').on('click',function(){
		$('.del').hide();
	});

	//上传
	$('.file').click(function(){
		$('.Up_flie').show();
	});

});
