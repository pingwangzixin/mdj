
$(document).ready(function(){
	//初始化图片
	/*var _img = document.createElement('img');
	_img.src='../img/success.png'
	
	$('.warn img').remove();
	$('.text-text').before(_img);*/

	
	
	/******************************  作业列表   *********************************************/
	
	//给input外的ul加div
	$('.con .xiafa_input').wrap("<div id='studentHtml'></div>");
	
	//作业列表切换
	$('.main_right .list_tit li a').on('click',function(){
		$(this).addClass('list_tit_active').parent().siblings().find('a').removeClass('list_tit_active');
	});
	
	//作业列表----全选事件
	$('.list_table .all').on('click',function(){
		var CheckBox = $('.list_table tbody input');
		var gouxuan = $('.list_table .all input[type=checkbox]').is(':checked');
		if(gouxuan){
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=true;
            };
      	}else{
        	$('.list_table .all input').prop('checked',false);
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=false;
            };
        }
	});
	
	$( '.list_table tbody input' ).on('click' , function(){
        if (! $( '.list_table tbody input').checked) {
           $( '.list_table .all input[type=checkbox]'). attr ("checked" , false);
        }
        var sub_inpu_length = $( '.list_table tbody input').size();
        var checkedsub = $( ".list_table tbody input:checked").length; 
        if (checkedsub == sub_inpu_length) {
           $( '.list_table .all input[type=checkbox]').prop( "checked" , true );
        }
   	});


	//星星打分事件
	$(".star_rate").raty({
		path:"../img",
		number:5,
		score: 4
	});

	//警告提示
	$('.task_list .del_statistics li.del').on('click',function(){
		$('.warn').show();
		setTimeout(function(){
			$('.warn').hide();
		},2000)
	});

	//创建作业
	$('.task_list .create').on('click',function(){
		$('.task').show();
	});


	//创建作业二级
	$('.task .con li').on('click',function(){
		$('.task').hide();
		$('.task_two').show();
	});

	//创建作业二级关闭按钮
	$('.task_two .con .close,.tongji .con .close,.task .con .close').on('click',function(){
		$('.task_two').hide();
		$('.tongji').hide();
		$('.task').hide();
	});

	



	//删除，统计hover
	$('.task_list .del_statistics .del').hover(function(){
		$(this).find('span').css('color','#5093E1');
		$(this).find('img').attr('src','../img/delete_blue.png');
	},function(){
		$(this).find('span').css('color','#222');
		$(this).find('img').attr('src','../img/delete.png');
	});

	$('.task_list .del_statistics .statistics').hover(function(){
		$(this).find('span').css('color','#5093E1');
		$(this).find('img').attr('src','../img/tongji_blue.png');
	},function(){
		$(this).find('span').css('color','#222');
		$(this).find('img').attr('src','../img/tongji.png');
	});

	/*统计事件按钮 */
	$('.task_list .del_statistics li.statistics').on('click',function(){
		$('.tongji').show();
	});


	/*我的题库切换*/
	$(".my_question .tabs li").on('click',function(){
		$(this).addClass('tabs_active').siblings().removeClass('tabs_active');
	});


	/*编辑任务切换*/
	$(".job .but a").on('click',function(){
		$(this).addClass('but_active').siblings().removeClass('but_active');
	});


	//下发作业----全选事件
	$('.xiafa_box .all').on('click',function(){
		var CheckBox = $('.xiafa_input input');
		var gouxuan = $('.xiafa_box .all input[type=checkbox]').is(':checked');
		if(gouxuan){
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=true;
            };
      	}else{
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=false;
            };
        }
	});
	$( '.xiafa_input input' ).on('click' , function(){
        if (! $( '.xiafa_input input').checked) {
           $( '.xiafa_box .all input[type=checkbox]'). attr ("checked" , false);
        }
        var sub_inpu_length = $( '.xiafa_input input').size();
        var checkedsub = $( ".xiafa_input input:checked").length;
        if (checkedsub == sub_inpu_length) {
           $( '.xiafa_box .all input[type=checkbox]').prop( "checked" , true );
        }

   	});
	
	

	/*下发点击按钮*/
	$(".edit_btn .xiafa_btn").on('click',function(){
		$('.xiafa').show();
	});

	/*编辑作业切换*/
	$('.edit_task .task_types span').on('click',function(){
		$(this).addClass('types_active').siblings().removeClass('types_active');
	});

	/*编辑作业--判断题*/
	$('.edit_question .question .question_daan span').on('click',function(){
		$(this).addClass('judge').parent('li').siblings('li').find('span').removeClass('judge');
	});


	/*编辑作业---右侧个人和公共切换*/
	$('.right_box .right_tit span').on('click',function(){
		$(this).addClass('right_tit_active').siblings().removeClass('right_tit_active');
		var texts = $(this).text();
		console.log(texts)
		if(texts == '我的题库' ){
			$('.person').show();
			$('.puble').hide();
			$('.right_box .create').show();
		};
		if(texts == '公共题库'){
			$('.person').hide();
			$('.puble').show();
			$('.right_box .create').hide();
		};
	});

	/*编辑作业--添加试题弹出*/
	$('.question_tit .add_blue').on('click',function(){
		$('.right_box').animate({'bottom':0},500);
	});
	
	/*编辑作业--右侧关闭*/
	$('.right_box .close').on('click',function(){
		$('.right_box').animate({'bottom':'-800px'},500);
	});

	

	/*删除事件*/
	$('.question_tit .em2,.delete').on('click',function(){
		$('.del').show();
	});

	/*弹层的取消/确认按钮*/
	$('.del .no,.btn .ok').on('click',function(){
		$('.del').hide();
	});

	/*确认，取消按钮*/
	$('.ok_btn,.no_btn').on('click',function(){
		$('.task_two').hide();
	});


	/*编辑作业--点击input添加*/
	$('.right_box  .question_tit  input.gouxuan_add').on('click',function(){
		var gouxuan = $(this).is(':checked');
		var con = $(this).parents('.question');
		
		var _img = $('.edit_question ._img').html();
		var cons = con.clone();
		console.log(cons.html());
		if(gouxuan){
			cons.find('.grade').html(_img);
			cons.find('.gouxuan_add').remove();
			$('.edit_question').append(cons);
			$(this).attr('disabled','disabled');
      	}
	});


	/*修改事件*/
	$('.question_tit .em1').on('click',function(){
		$('.edit').show();
	});


	/*创建试题--添加选项*/
	$('.create_box .stem1 h3 span.add').on('click',function(){
		
		var add_con = $(this).parents('h3').next('.options');
		var clone_con = add_con.clone();
		var app = $(this).parents('.stem');
		var len = $(this).parents('.stem').find('.options').size();
		
		if(len>19){
			alert('试题最多只能添加20题');
			return false;
		}else{
			clone_con.find('h4.tit').text(len+1);
			clone_con.find("input[type='radio']").attr("name","option"+ (len+1) +"");
			clone_con.find("input[type='radio']").attr('checked',false);
			clone_con.find("input[type='text']").val(' ');
			var htmls='<div class="options clearfix"><h4 class="fl tit">1</h4><ul class="fl cons"><li><span><input type="radio" name="option1"> &nbsp;A&nbsp;<input type="text"></span><span><input type="radio" name="option1"> &nbsp;B&nbsp;<input type="text"></span></li><li><span><input type="radio" name="option1"> &nbsp;C&nbsp;<input type="text"></span><span><input type="radio" name="option1"> &nbsp;D&nbsp;<input type="text"></span></li></ul></div>';
			if(len){
				app.append(clone_con);
			}else{
				app.append(htmls);
			}
		}
		
	});



	/*创建试题--删除选项*/
	$('.create_box .stem1 h3 span.del').on('click',function(){
		var options = $(this).parents('.stem').find('.options');
		options.last().remove();
	});


	/*编辑作业---（单选题/多选题/判断题）上下移动*/
	$("img.next").on('click',function(){
		var max_num = $(this).parents('.question').find('img.next').size();
		var _this = $(this).parents(".question_con");
		var _this_next = _this.next();
		var num = _this.find("i.num").text();
		num = num*1;
		if(num < max_num){
			var c = _this_next.clone(true);
			var value = c.find('select')
			c.find("i.num").text(num);
			num = num*1 + 1;
			_this.find("i.num").text(num);
			_this.before(c).prev().after(_this_next);
			_this_next.remove();
		}
		
	});
	$("img.up").on('click',function(){
		var max_num = $(this).parents('.question').find('img.up').size();
		var _this = $(this).parents(".question_con");
		var _next_prev = _this.prev();	
		var num = _this.find("i.num").text();
		num = num*1 - 1; 
		if(num){
			num ? num : num=1;
			_this.find("i.num").text(num);
			var c = _next_prev.clone(true);
			num = c.find("i.num").text();
			num = num*1 + 1; (num > max_num) ? num=max_num : num; 
			c.find("i.num").text(num);
			_this.after(c).next().after(_next_prev);
			_next_prev.remove();
		}
	});
	
	
	
	/*编辑作业---（填空题/口语交际及综合性学习）上下移动*/
	$("img.next_tit").on('click',function(){
		var max_num = $(this).parents('.question').find('img.next_tit').size();
		var _this = $(this).parents(".question_tit");		
		var _this_next = _this.next();
		var num = parseInt(_this.find("i.num").text());
		
		num = num*1;
		if(num < max_num){
			var c = _this_next.clone(true);
			c.find("i.num").text(num+'.');
			num = num*1 + 1;
			_this.find("i.num").text(num+'.');
			_this.before(c).prev().after(_this_next);
			_this_next.remove();
		}
	});
	$("img.up_tit").on('click',function(){
		var max_num = $(this).parents('.question').find('img.up_tit').size();
		var _this = $(this).parents(".question_tit");
		var _next_prev = _this.prev();	
		var num = parseInt(_this.find("i.num").text());
		num = num*1 - 1; 
		if(num){
			num ? num : num=1;
			_this.find("i.num").text(num+'.');
			var c = _next_prev.clone(true);
			num = c.find("i.num").text();
			num = num*1 + 1; (num > max_num) ? num=max_num : num; 
			c.find("i.num").text(num+'.');
			_this.after(c).next().after(_next_prev);
			_next_prev.remove();
		}
	});

	/*编辑作业---（Reading comprehension）上下移动*/
	$("img.next_jianda").on('click',function(){
		var max_num = $(this).parents('.question').find('img.next_jianda').size();
		var _this = $(this).parents(".question_jianda");
		var _this_next = _this.next();
		var num = _this.find("i.num").text();
		num = num*1;
		if(num < max_num){
			var c = _this_next.clone(true);
			c.find("i.num").text(num);
			num = num*1 + 1;
			_this.find("i.num").text(num);
			_this.before(c).prev().after(_this_next);
			_this_next.remove();
		}
	});
	$("img.up_jianda").on('click',function(){

		var max_num = $(this).parents('.question').find('img.up_jianda').size();
		var _this = $(this).parents(".question_jianda");
		var _next_prev = _this.prev();	
		var num = _this.find("i.num").text();
		num = num*1 - 1; 
		if(num){
			num ? num : num=1;
			_this.find("i.num").text(num);
			var c = _next_prev.clone(true);
			num = c.find("i.num").text();
			num = num*1 + 1; (num > max_num) ? num=max_num : num; 
			c.find("i.num").text(num);
			_this.after(c).next().after(_next_prev);
			_next_prev.remove();
		}
	});

	$(document).on("change",".charu",function(){
		$(this).find('option:selected').attr('selected',true).siblings().attr('selected',false);
	});


	/*上传资源取消，确认按钮*/
	$('.upsuresc,.upqxsc').on('click',function(){
		$('.up_box').hide();
	});

	$('.edit_but span,.up_flie').on('click',function(){
		$('.up_box').show();
	});




	/*编辑作业的--小题删除*/
	$(document).on("click",'.question_con .delete',function(){
		var _this = $(this);
		$('.btn .ok').click(function(){
			var l = _this.parents(".question");
			_this.parents(".question_con").remove();	
			$.each(l.find(".question_con"),function(k,v){
				$(v).find(".question_tit .tit .num").text(k+1);
			});
			edit_task_Q.setNums(l.attr("name"));
			edit_task_Q.AllShow();
			deldisabled();
			checkboxCheck();
		});
	});
	
	
	//创建试题
	$('.create_btn .Yes').click(function(){
        var str = '';
		for(var i=0; i<31;i++) {
			str += UE.getEditor('editor'+i+'').getContent().replace(/<br\/>/,'')+','
		}
	})

	$('.create_btn .No').click(function(){
		for(var i=0; i<31;i++) {
			UE.getEditor('editor'+i+'').setContent('');
		}
		$('.create_box input').val(' ');
		$('.create_box input').prop('checked',false);
	});
	
	//所有table加父元素 防止溢出
	$('table').wrap('<div style="overflow:auto"></div>');
	
});
