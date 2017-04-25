
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

	//已下发作业不允许删除 警告提示
	//删除提示  
	$('.task_list .del_statistics li.del').on('click',function(){
		$('.warn').show();
		setTimeout(function(){
			$('.warn').hide();
		},2000)
	});
	
	//作业列表一级页面 已下发作业删除
	$(document).on('click','.list_del',function (){
		$('.j_closeBoxA').show();
	});
	//作业列表一级页面 已下发作业取消删除
	$('.j_closeImgA,.j_cancelA').click(function (){
		$('.j_closeBoxA').hide();
	});
	
	
	//作业列表二级页面 已下发作业取消删除
	$('.j_closeImgB,.j_cancelB').click(function (){
		$('.j_closeBoxB').hide();
	});
	

	//创建作业
	$('.task_list .create').on('click',function(){
		$('.task').show();
	});


	//创建作业二级旧版
	//作业列表页
	$('.task .con li').on('click',function(){
		$('.task').hide();
		$('.create_two').show();
	});

	//创建作业二级新版
	//闯关列表页
	$('.task.pass .con li').on('click',function(){
		$('.task').hide();
		$('.j_create_test').show();
	});
	
	

	//关闭按钮
	$('.task_two .con .close,.tongji .con .close,.task .con .close').on('click',function(){
		$('.task_two').hide();
		$('.tongji').hide();
		$('.task').hide();
	});

	
	//创建作业二级关闭按钮
	$('.j_create_test .close').on('click',function(){
		$('.j_create_test').hide();
	});


	//删除，统计、下发hover 
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
	
	$(document).on('mouseover','.lssued',function(){
		$(this).css({'color':'#fff','background':'url(../img/lss_lan.png) no-repeat 6px 3px #5093e1'});
	});
	$(document).on('mouseout','.lssued',function(){
		$(this).css({'color':'#000','background':'url(../img/lss.png) no-repeat 6px 3px #e5e5e5'});
	});
	
	/*$('.lssued').hover(function(){
		$(this).css({'color':'#fff','background':'url(../img/lss_lan.png) no-repeat 6px 3px #5093e1'});
	},function(){
		$(this).css({'color':'#000','background':'url(../img/lss.png) no-repeat 6px 3px #e5e5e5'});
	});*/

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

	
	/*作业列表页面下发点击按钮*/
	$(document).on('click',".lssued",function(){
		$('.xiafa').show();
	});
	
	/*下发关闭*/
	$('.xiafa .con .close').on('click',function(){
		$('.xiafa').hide();
	});
	
	/*下发作业----全选事件*/
	/*$('.xiafa_box .alls').on('click',function(){
		var CheckBox = $('.xiafa_input input');
		var gouxuan = $('.xiafa_box .alls input[type=checkbox]').is(':checked');
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
           $( '.xiafa_box .alls input[type=checkbox]'). attr ("checked" , false);
        }
        var sub_inpu_length = $( '.xiafa_input input').size();
        var checkedsub = $( ".xiafa_input input:checked").length;
        if (checkedsub == sub_inpu_length) {
           $( '.xiafa_box .alls input[type=checkbox]').prop( "checked" , true );
        }

   	});*/
   	
   	
   	
   	/*下发作业 撤回----全选事件*/
	$('.xiafa_box .all,.xiafa_box .alls').on('click',function(){
		var CheckBox = $(this).parents('.xiafa_box').siblings('#studentHtml').find('input');
		var gouxuan = $(this).find('input[type=checkbox]').is(':checked');
		if(gouxuan){
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=true;
            };
      	}else{
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=false;
            };
        }
      	
      	CheckBox.on('click' , function(){
	        if (! CheckBox.checked) {
	           $(this).parents('#studentHtml').siblings('.xiafa_box').find('input').attr("checked" , false);
	        }
	        
	        var sub_inpu_length = CheckBox.size();
			var checkedsub = $(this).parents('#studentHtml').find('input:checked').length;
	        if (checkedsub == sub_inpu_length) {
	           $(this).parents('#studentHtml').siblings('.xiafa_box').find('input').prop("checked" , true);
	        }
	
	   	});
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
	

//	创建试题--删除选项
	/*$('.create_box .stem1 h3 span.del').on('click',function(){
		var options = $(this).parents('.stem').find('.options');
		options.last().remove();
	});*/

	/*创建试题--删除选项*/
	$(document).on('click',' .stem1 h3 span.del',function(){
		var options = $(this).parents('.stem1').find('.options');
		if(options.length > 1){
			options.last().remove();
		}else{
			alert('至少保留一组选项');
		}
	});


	
	
	//单选
	var raArr = ['<div class="radios fl"><h4><input type="radio" name="name" class="hand" id="A"/>&nbsp;<label for="A" class="hand">A</label></h4><div id="editor1"></div></div>','<div class="radios fl"><h4><input type="radio" name="name" class="hand" id="B"/>&nbsp;<label for="B" class="hand">B</label></h4><div id="editor2"></div></div>','<div class="radios fl"><h4><input type="radio" name="name" class="hand" id="C"/>&nbsp;<label for="C" class="hand">C</label></h4><div id="editor3"></div></div>','<div class="radios fl"><h4><input type="radio" name="name" class="hand" id="D"/>&nbsp;<label for="D" class="hand">D</label></h4><div id="editor4"></div></div>'];
	var raArr2 = ['editor1','editor2','editor3','editor4'];
	
	//多选
	var chArr = ['<div class="radios fl"><h4><input type="checkbox" name="name" class="hand" id="A"/>&nbsp;<label for="A" class="hand">A</label></h4><div id="editor24"></div></div>','<div class="radios fl"><h4><input type="checkbox" name="name" class="hand" id="B"/>&nbsp;<label for="B" class="hand">B</label></h4><div id="editor25"></div></div>','<div class="radios fl"><h4><input type="checkbox" name="name" class="hand" id="C"/>&nbsp;<label for="C" class="hand">C</label></h4><div id="editor26"></div></div>','<div class="radios fl"><h4><input type="checkbox" name="name" class="hand" id="D"/>&nbsp;<label for="D" class="hand">D</label></h4><div id="editor27"></div></div>'];
	var chArr2 = ['editor24','editor25','editor26','editor27'];
	
//	console.log(chArr[0])
	//单选调用
	addRemTest('.create_box .stem1 h3 span.j_addRA','.create_box .stem1 h3 span.j_delRA','.optionsRA','editorRA',raArr,raArr2,0);
	//多选调用
	addRemTest ('.create_box .stem1 h3 span.j_addCh','.create_box .stem1 h3 span.j_delCH','.optionsCH','editorCH',chArr,chArr2,0);
	
	
	//单选多选 添加删除选项
//	var nNum = 0;
	function addRemTest (sEvAdd,sEvRem,FObj,idObj,htmlArr,getEdArr,nNum){
		var strAbc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var maxLen = strAbc.length;
		$(sEvAdd).on('click',function(){
			var app = $(this).parents('h3').siblings(FObj);
			var nLen = app.children().length;
			console.log(nLen);
			console.log(nNum);
			if(nLen > maxLen - 1){
				alert('最多只能添加26道题');
			}else{
				switch (nLen){
					case 0:
						var html = htmlArr[0];
						app.append(html);
		 				UE.getEditor(getEdArr[0]);
						break;
					case 1:
						var html = htmlArr[1];
						app.append(html);
		 				UE.getEditor(getEdArr[1]);
						break;
					case 2:
						var html = htmlArr[2];
						app.append(html);
		 				UE.getEditor(getEdArr[2]);
						break;
					case 3:
						var html = htmlArr[3];
						app.append(html);
		 				UE.getEditor(getEdArr[3]);
						break;
					default:
						var add_con = app.children('div:last-child');
						var clone_con = add_con.clone();
						var strSo = add_con.find('label').text();
						var laText = strAbc[strAbc.indexOf(strSo) + 1];
						
						if(nLen > 4){
							nNum = nLen - 4;
							nNum ++;
						}else{
							nNum ++;
						}
						clone_con.children('div').attr('id',idObj + nNum);
						clone_con.find('#' + idObj + nNum).empty();
						clone_con.find('label').text(laText).attr('for',laText);
						clone_con.find('input').attr('id',laText);
						app.append(clone_con);
						UE.getEditor(idObj + nNum);
						break;
				}
			}
		});
		
		
		$(sEvRem).on('click',function(){
			var app = $(this).parents('h3').siblings(FObj);
			var nLen = app.children().length;
			var delObj =  app.children('div:last-child');
			var desId = delObj.children('div').attr('id');
			
			if($(FObj).hasClass('optionsRA')){
				if(nLen <= 2){
					alert('至少保留两个选项');
					return;
				}
				
			}else if($(FObj).hasClass('optionsCH')){
				if(nLen <= 3){
					alert('至少保留三个选项');
					return;
				}
			}
			if(nLen > 4) {
				nNum --;
				delObj.remove();
				UE.getEditor(desId).destroy();
			}else{
				delObj.remove();
				UE.getEditor(desId).destroy();
			}
		});
		
	}


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
	
	//导入题库 弹框
	/*$('.import_btnF').click(function (){
		$('.import_bomb').show();
	});*/
	
	//2017.04.13 导入试题弹框
	$('.import_btnF,.import_btnFTwo').click(function (){
		$('.create_test_bomb').hide();
		$('.import_bombA').show();
	});
	
	
	//导入试题 模拟筛选 
	/*$(document).on('click','.import_screen div span',function (event){
		$(this).siblings('ul').toggle().parent().siblings().find('ul').hide();
		event.stopPropagation();
	});
	
	$(document).on('click','.sel li',function (){
		$(this).parent().siblings('span').text($(this).text());
	});
	
	$(document).on('click',function(e) {
		$('.sel ul').hide();
	});*/
	
	//导入试题关闭
	$(document).on('click','.import_close,.import_btn span:last-child',function (){
		$('.import_bombA').hide();
	});
	
	//填空题多空批改
	var fillScore = 0;
	$(document).on('click','.fill_answer em',function (){
		if($(this).text() == '正确' && !$(this).hasClass('active')){
			fillScore ++;
		}else if($(this).text() == '错误' && !$(this).hasClass('active') && $(this).prev('em').hasClass('active')){
			fillScore--;
			if(fillScore <= 0) fillScore = 0;
		}
		$(this).addClass('active').siblings().removeClass('active');
		
		$('.fill_score').val(fillScore);
		$('.fill_total_score').val(fillScore);
		console.log(fillScore);
	});
	
	//填空总分计算	
	$(document).on('input','.fill_score',function (){
		$('.fill_total_score').val($(this).val());
	});


	
	//编辑作业里的插入资源模拟下拉
	$('.search_drop ul li').each(function (){
		$(this).attr({'title' : $(this).text()});
	});
	$(document).on('click','.search_drop input',function (event){
//		$(this).val('');
		$('.search_drop ul').toggle();
		$('.edit_question .search_drop ul').not($(this).siblings('ul')).hide();
		event.stopPropagation();
	});
	$(document).on('click','.search_drop ul li',function (){
		$(this).parent().siblings('input').val($(this).text());
	});
	$(document).on('click',function(e) {
		$('.search_drop ul').hide();
	});
	
	
	//2017.3.29word教程
	$(document).on('click','.Course-t .Course-close',function(){
		$('.Course-t').hide();
	});
	$(document).on('click','.Course-t .Course-right1',function(){
		$('.Course-t .Course-step').attr('src','../img/step2.png');
		$('.Course-con .Course-step').css({'width':'1020px'});
		$('.Course-left').removeClass('Course-left1').addClass('Course-left2');
		$('.Course-right').removeClass('Course-right1').addClass('Course-right2');
	});
	
	$(document).on('click','.Course-t .Course-left2',function(){
		$('.Course-t .Course-step').attr('src','../img/step1.png');
		$('.Course-con .Course-step').css({'width':'790px'});
		$('.Course-left').removeClass('Course-left2').addClass('Course-left1');
		$('.Course-right').removeClass('Course-right2').addClass('Course-right1');
	});
	
	$(document).on('click','.Course-t .Course-right2',function(){
		$('.Course-t .Course-step').attr('src','../img/step3.png');
		$('.Course-left').removeClass('Course-left2').addClass('Course-left3');
		$('.Course-right').removeClass('Course-right2').addClass('Course-right3');
	});
	
	$(document).on('click','.Course-t .Course-left3',function(){
		$('.Course-t .Course-step').attr('src','../img/step2.png');
		$('.Course-con .Course-step').css({'width':'1020px'});
		$('.Course-left').removeClass('Course-left3').addClass('Course-left2');
		$('.Course-right').removeClass('Course-right3').addClass('Course-right2');
	});
	
	$(document).on('click','.Course-t .Course-right3',function(){
		$('.Course-t .Course-step').attr('src','../img/step4.png');
		$('.Course-left').removeClass('Course-left3').addClass('Course-left4');
		$('.Course-right').removeClass('Course-right3').addClass('Course-right4');
	});
	
	$(document).on('click','.Course-t .Course-left4',function(){
		$('.Course-t .Course-step').attr('src','../img/step3.png');
		$('.Course-con .Course-step').css({'width':'1020px'});
		$('.Course-left').removeClass('Course-left4').addClass('Course-left3');
		$('.Course-right').removeClass('Course-right4').addClass('Course-right3');
	});
	
	$(document).on('click','.Course-t .Course-right4',function(){
		$('.Course-t .Course-step').attr('src','../img/step5.png');
		$('.Course-left').removeClass('Course-left4').addClass('Course-left5');
		$('.Course-right').removeClass('Course-right4').addClass('Course-right5');
	});
	
	$(document).on('click','.Course-t .Course-left5',function(){
		$('.Course-t .Course-step').attr('src','../img/step4.png');
		$('.Course-con .Course-step').css({'width':'1020px'});
		$('.Course-left').removeClass('Course-left5').addClass('Course-left4');
		$('.Course-right').removeClass('Course-right5').addClass('Course-right4');
	});
	$(document).on('click','.Course span:first-child',function(){
		$('.Course-t').show();
		$('.Course-t .Course-step').attr('src','../img/step1.png');
		$('.Course-con .Course-step').css({'width':'790px'});
		$('.Course-left').removeClass('Course-left2 Course-left3 Course-left4 Course-left5').addClass('Course-left1');
		$('.Course-right').removeClass('Course-right2 Course-right3 Course-right4 Course-right5').addClass('Course-right1');
	});
	
	
	//2017.04.13 zy  导入word可编辑试题
	//创建试题弹框	word_template.html
	$('.create_test_btn').on('click',function (){
		$('.create_test_bomb').show();
	});
	//创建试题弹框关闭
	$('.create_test_close').on('click',function (){
		$('.create_test_bomb').hide();
	});
	//重新导入word
	$('.Ytit').on('click','.Yre_import',function (){
		$('.import_bombB').show();
	});
	//重新导入word关闭
	$('.import_bombB').on('click','.import_close,.import_btn span:last-child',function (){
		$('.import_bombB').hide();
	});
	
	//帮助教程
	//打开教程弹窗
	$('.Ytit').on('click','.Yuse_tutorial',function (){
		$('.Yuse_tutorial_box').show();
	});
	//关闭教程弹框
	var YmainPic = $('.Yuse_main_pic');
	$('.Yuse_tutorial_box').on('click','.Yuse_close',function (){
		$('.Yuse_tutorial_box').hide();
		YmainPic.attr('src','../img/Ystep1.png').siblings('.Yuse_prev').hide().siblings('.Yuse_next').show().css({'top':'560px','right':'70px'});
	});
	//下一步
	$('.Yuse_tutorial_box').on('click','.Yuse_next',function (){
		if(YmainPic.attr('src').indexOf('Ystep1') != -1){
			YmainPic.attr('src','../img/Ystep2.png').siblings('.Yuse_next').css({'top':'520px','right':'266px'}).siblings('.Yuse_prev').css({'top':'520px'});
		}else{
			YmainPic.attr('src','../img/Ystep3.png').siblings('.Yuse_next').hide().siblings('.Yuse_prev').css({'top':'546px','left':'168px'});
		}
		$('.Yuse_prev').show();
	});
	//上一步
	$('.Yuse_tutorial_box').on('click','.Yuse_prev',function (){
		if(YmainPic.attr('src').indexOf('Ystep3') != -1){
			YmainPic.attr('src','../img/Ystep2.png').siblings('.Yuse_next').show().css({'top':'520px','right':'266px'}).siblings('.Yuse_prev').css({'top':'520px'});
		}else{
			YmainPic.attr('src','../img/Ystep1.png').siblings('.Yuse_prev').hide().siblings('.Yuse_next').css({'top':'560px','right':'70px'});
		}
	});
	
	//创建试题 题型选择
	$('.Ymove').on('click','.Yquestions li',function (){
//		$('.Yquestions').animate({'width':'200px'},{ duration: 300, easing: "swing" });
		$(this).addClass('active').siblings('li').removeClass('active').toggle();
		$(this).insertBefore('.Yquestions li:first-child');
	});
	//创建试题 单选选项选择
	$('.Ymain_text').on('click','.Yoption_btn',function (){
		if( ! $('.Yorder').hasClass('active')){
			$(this).children('span').hide();
		}else{
			$(this).children('span').toggle();
		}
	});
	//双击可编辑
	$('.Ytest_cases').on('dblclick','.Ytype',function (){
		$(this).parents('.Ytest_cases').find('.Ytype').removeClass('active').find('.Yedit_over').hide();
		$(this).parents('.Ytest_cases').find('input[type=radio]').attr('disabled',true);
		$(this).parents('.Ytest_cases').find('ul li').not('.Yanswer').children('p').show().siblings('.Yeditor').hide();
		$('.Yorder').removeClass('active');
		$(this).addClass('active').find('.Yedit_over').show();
		$(this).find('input[type=radio]').attr('disabled',false);
		$(this).find('ul li').not('.Yanswer').children('p').hide().siblings('.Yeditor').show();
		$(this).find('.Yorder').addClass('active');
	});
	//点击编辑图标可编辑
	$('.Ytest_cases').on('click','.Yedit',function (){
		$(this).parents('.Ytest_cases').find('.Ytype').removeClass('active').find('.Yedit_over').hide();
		$(this).parents('.Ytest_cases').find('input[type=radio]').attr('disabled',true);
		$(this).parents('.Ytest_cases').find('ul li').not('.Yanswer').children('p').show().siblings('.Yeditor').hide();
		$('.Yorder').removeClass('active');
		$(this).parents('.Ytype').addClass('active').find('.Yedit_over').show();
		$(this).parents('.Ytype').find('input[type=radio]').attr('disabled',false);
		$(this).parents('.Ytype').find('ul li').not('.Yanswer').children('p').hide().siblings('.Yeditor').show();
		$(this).parents('.Ytype').find('.Yorder').addClass('active');
	});
	//点击结束按钮结束编辑
	$('.Ytest_cases').on('click','.Yedit_over',function (){
		$(this).hide().parents('.Ytype').removeClass('active').find('input[type=radio]').attr('disabled',true);
		$(this).parents('.Ytype').find('ul li').not('.Yanswer').children('p').show();
		$('.Yeditor').hide();
	});
	//点击删除删除整条试题
	$('.Ytest_cases').on('click','.Ydelete',function (){
		if($(this).parents('.Ytype').siblings('.Ytype')){
			$(this).parents('.Ytype').siblings('.Yheadline').hide();
		}
		var YDobj = $(this).parents('.Ytype').parent();
		$(this).parents('.Ytype').remove();
		YDobj.find('.Ytype').each(function (i,ele){
			$(this).find('.Yorder').text(i);
		});
	});
	//保存弹框
	$('.Ytest_cases').on('click','.Ysave',function (){
		$('.YtestBox').show();
	});
	//关闭保存弹窗
	$('.YtestBox').on('click','.Ytextclose,.Ycancel',function (){
		$('.YtestBox').hide();
	});
	//清除试卷标题
	$('.YtestBox').on('click','.Yedit_tit>img',function (){
		$('.Yedit_tit>input').val('')
	});
	//填写分值 计算卷面总分
	var YReg = /^[0-9]+(\.[0-9]+)?$/;
	var Ytotal = 0;
	$('.Ytotal_score>span').text(Ytotal + '分');
	$('.YtestBox').on('input','.Yscore_setting ul input',function (){
		if( ! YReg.test($(this).val())){
			$(this).siblings('i').show().text('*请输入符合规则的数字');
		}else{
			$(this).siblings('i').hide();
		}
		Ytotal = 0;
		$('.Yscore_setting ul input').each(function (i,ele){
			if( ! isNaN($(ele).val())){
				Ytotal += Number($(ele).val());
			}
		});
		$('.Ytotal_score>span').text(Ytotal + '分')
	});
	//分值失去焦点
	$('.YtestBox').on('blur','.Yscore_setting ul input',function (){
		! YReg.test($(this).val()) || $(this).val() == '' ? $(this).siblings('i').show().text('*请输入符合规则的数字') : $(this).siblings('i').hide();
	});
	//分值获取焦点
	$('.YtestBox').on('focus','.Yscore_setting ul input',function (){
		$(this).siblings('i').hide();
	});
	
	
	/*$('.Yimport_text').on('select',function (event){
		alert($(this).val().slice($(this).selectionStart, $(this).selectionEnd))
//		alert(txt.value.slice(txt.selectionStart, txt.selectionEnd));
		
	});*/
//	var aaaaa = document.getElementsByClassName('.Yimportt_ext')[0];
	/*var YEditObj = document.getElementById('Yimport_text');
	YEditObj.onselect = function (ev){
		var oEvent = ev || event;
		
		alert(window.oEvent.clientX)
		console.log(oEvent)
		
		$('.Ymove').show().css({'left':this.selectionStart,'top':this.selectionStart});
//		alert(this.selectionStart)
//		alert(this.value.slice(this.selectionStart, this.selectionEnd));
	
	};
	YEditObj.onclick = function(){
		$('.Ymove').hide();
		
	}*/
	
	
	/*$('.Ytest_cases_scoll').get(0).onclick =function (ev){
		var oEvent = ev || event;
		console.log(oEvent)
		alert(oEvent.clientX)
	}*/
	
	
	
	//以下为div测试用
	//点击导入试题可编辑(div)
	$('.Yimport_text').on('click',function (){
		$(this).attr('contenteditable',true);
	});
	
	/*$(".Yimport_text").bind({  
        copy : function(){  
        $('.Yimport_text').text('copy behaviour detected!');  
        },  
        paste : function(){  
        $('.Yimport_text').text('paste behaviour detected!');  
        },  
        cut : function(){  
        $('.Yimport_text').text('cut behaviour detected!');  
        }  
    });  */
	
	
	/*select($('.Yimport_text').get(0), tanchu); 
	function select(o, fn) {
		o.onmouseup = function(e) {
			var event = window.event || e;
			var target = event.srcElement ? event.srcElement : event.target;
			if(/input|textarea/i.test(target.tagName) && /firefox/i.test(navigator.userAgent)) {
				//Firefox在文本框内选择文字 
				var staIndex = target.selectionStart;
				var endIndex = target.selectionEnd;
				if(staIndex != endIndex) {
					var sText = target.value.substring(staIndex, endIndex);
					fn(sText, target);
				}
			} else {
				//获取选中文字 
				var sText = document.selection == undefined ? document.getSelection().toString() : document.selection.createRange().text;
				if(sText != "") {
					//将参数传入回调函数fn 
					fn(sText, target);
				}
			}
		}
	}
	function tanchu(txt,tar){ 
		alert("文字属于"+tar.tagName+"元素，选中内容为："+txt); 	
		return txt;
	} */
	
});
