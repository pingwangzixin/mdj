$(function (){
	
	//发布考试 管理考试 当前状态切换	
	tabChange('.exam_tab a','a');
	
	//release1
	//学年、年级、日期类型 当前状态
	tabChange('.j_radio>span','span');
	$(document).on('click','.J_radio>span',function (){
		$('.no_choose').hide();
	});
	
	//日期显示隐藏
	ShowHide('.j_radio>div','div')
	
	function tabChange(obj,ele){
		$(document).on('click',obj,function (){
			$(this).addClass('active').siblings(ele).removeClass('active');
		});
	}

	function ShowHide(obj,ele){
		$(document).on('click',obj,function (){
			$(this).children().first('span').addClass('active').parent().siblings().find('span').removeClass('active');
			
			
			//考试类型对应日期类型显示隐藏
			showModel('.div_sin','.exam_date');
			function showModel(eventObj,topObj){
				var showDiv=$(eventObj+'>div>span.active').siblings('div');
				var showH=showDiv.height();
				$(topObj).css({'top':0});
				if($(this).find('div').hasClass('no_sel')){
					$(eventObj+'>div>div').hide();
					$('.step_top').css({'margin-top':30 + 'px'});
				}else{
					$(eventObj+'>div>div').hide();
					showDiv.show();
					$(topObj).css({'top':showH+'px'});
					$('.step_top').css({'margin-top':showH + 30 + 'px'});
					
				}
			}
		});
	}
	
	
	
	//考试名称拼接
	examStr('.school_year span','.i1');
	examStr('.grade span','.i2');
	examStr('.div_sin>div>span','.i3');
	
	function examStr(obj,i){
		$(document).on('click',obj,function(){
			var tit=$(this).text();
			$(i).text('【'+tit+'】');	
		});	
	}
	
	
	//考试科目 当前状态
	var chN=0;
	var checkBtn=$('.j_check span');
	var nn=0;
	check();
	function check(){
		checkBtn.each(function (){
			if(nn==0){
				if($(this).index() == 0){
					$(this).off('click');
					$(this).on('click',function (){
						if($(this).hasClass('active')){
							chN=0;
							$(this).removeClass('active').siblings('span').removeClass('active');
						}else{
							chN=checkBtn.length -1;
							$(this).addClass('active').siblings('span').addClass('active');
						}
						check();
						//console.log('我是全选按钮'+chN);
					});
				}else{
					$(this).off('click');
					$(this).on('click',function (){
						if($(this).hasClass('active')){
							$(this).removeClass('active');
							chN--;
							//if(chN <= 0)chN=0;
							checkBtn.eq(0).removeClass('active');	
						}else{
							$(this).addClass('active');
							chN++;
							if(chN == checkBtn.length -1){
								checkBtn.eq(0).addClass('active');
							}
						}	
						check();
						//console.log(chN);
					});
				}
			}else{
				$(this).off('click');
				$(this).on('click',function (){
					check();
				});
			}
		});
	}
	
	
	//考试管理 弹框
	$(document).on('click','.del_btn',function (){
		$('.z_del').show();
		$('.tip>i,.cancel_btn').click(function (){
			$('.z_del').hide();
		});
	});
	
	
	//release2
	//参考班级当前状态
	//全部按钮
	$(document).on('click','.details_table2 .td_left>span',function (){
		if($(this).attr('class')=='all'){
			$(this).removeClass('all').siblings('div').find('em').removeClass('active');
		}else{
			$(this).addClass('all').siblings('div').find('em').addClass('active');
		}
	});
	
	//单选按钮
	$(document).on('click','.details_table2 .td_left em',function (){
		if($(this).attr('class')=='active'){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	
	
	
	//考试管理 考试科目 左右点击
	$('.scr_box').each(function (index,element){
		tab(index,$(element));
		/*console.log(index);
		console.log($(element));*/
	});
	
	function tab(i,obj){
		var moveEle=obj.find('.sub_list');
		var liWidth=obj.find('.sub_list li').outerWidth(true);	
		var liArr=moveEle.children('li');
		var ulFW=obj.find('.outter_box').width();
		var showLength=parseInt(ulFW / liWidth);
		var moveLength=liArr.length-showLength;
		var prevBtn=obj.find('.prev_i');
		var nextBtn=obj.find('.next_i');
		/*console.log(prevBtn);
		console.log(nextBtn);*/
		
		var n=0;
		nextBtn.click(function (){
			n++;
			if(n < moveLength){
				moveEle.stop().animate({'left':-(liWidth * n)});
			}else{
				n = moveLength;
				moveEle.stop().animate({'left':-(liWidth * moveLength)});
			}
		});
		
		prevBtn.click(function (){
			n--;
			if(n >= 0){
				moveEle.stop().animate({'left':-(liWidth * n)});
			}else{
				n = 0;
				moveEle.stop().animate({'left':0});
			}
		});
	}
	
	//考试管理 考试科目 阻止选中文字
	$(document).on('mousedown mouseup','.sub',function (){
		return false;
	});
	
	
	//翻页居中
	function pageW(){
		var pageL=$(".page_box a").length;
		var pageW=($(".page_box a").outerWidth(true))*pageL;
		$(".page_box").width(pageW);
	}
	pageW();
	
	
	//翻页当前状态
	$(".page_box a[data-pag=page]").on("click",function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	
	//总分总成绩 及格分数
	$(document).on('blur','.details_table2 input[name*="total_score"]',function (){
		//alert($('.total_score input').val());
		var obj=$(this);
		var val=obj.val();
		if(val != ''){
			var getRatio=!isNaN(parseInt(val*0.6)) ? parseInt(val*0.6) : 0;
			obj.closest('tr').find($('input[name*="pass_score"]')).val(getRatio);
		}
	});
	
	
	//2016.11.02 考察科目添加学科
	var selLen = 0;
	var selArr = [];
	
	$('.select_box').on('click','.add',function (){
		if($('.grade span').hasClass('active')){
			$('.exam_sub span').css({'cursor':'no-drop'});
			
			var select = '<div class="select_group">';
			select += '<select name="" class="sel_subject choose_year">';
			select += '<option value="">选择学年</option>';
			select += '<option value="2014-2015（上）">2014-2015（上）</option>';
			select += '<option value="2014-2015（下）">2014-2015（上）</option>';
			select += '</select>';
			select += '<select name="" class="sel_subject choose_sub">';
			select += '<option value="">选择学科</option>';
			select += '<option value="音乐">音乐</option>';
			select += '<option value="美术">美术</option>';
			select += '</select>';
			select += '<select name="" class="sel_subject">';
			select += '<option value="">选择一次考试</option>';
			select += '<option value="期中考试">期中考试</option>';
			select += '<option value="期末考试">期末考试</option>';
			select += '</select>';
			select += '<i>删除</i>';
			select += '</div>';
			
			selLen = $('.select_group').length;
			selArr = [];
			var str = '';
			$('.select_group:last-child select').each(function (index){
				str += $(this).find('option:selected').val();
				selArr.push(str);
				str = '';
			});
//			console.log(selArr);
			if(selLen<1){
				$('.select_box').append(select);
				nn = 1;
				check();
			}else{	
				if(selArr[0] != '' && selArr[1] != ''){
					$('.select_box').append(select);
					$('.select_group select').not($('.select_group:last-child select')).attr({'disabled':true});
					nn++;
					check();
				}
			}
		}else{
			$('.no_choose').show();
		}
	});
	
	
	//模拟下拉列表加载中
	var loadFlag = false;
	$(document).on('click','.fake b',function (){
		if( ! loadFlag){
			$(this).siblings('.sel_loading').show();
			loadFlag = true;
		}else{
			$(this).siblings('.sel_loading').hide();
			loadFlag = false;
		}
	})
	
	
	//2016.11.02 考察科目添加学科的删除
	$(document).on('click','.select_group i',function (){
		if($(this).parent().next().length == 0){
			$(this).parent().prev().find('select').attr({'disabled':false});
		}
		$(this).parent().remove();
		nn--;
		check();
		selLen = $('.select_group').length;
		if(selLen < 1){
			$('.exam_sub span').css({'cursor':'pointer'});	
		}
	});
	
	
	
	/*2017.3.15 张燕霞*/
	//归属区域-全选
	$(document).on('click','.Res_step .all_school input',function(){
		var Inputs = $(this).parents('ul.all_school').next('ul.line_school').find('input');
		var _this = $(this);
		AllInput(_this,Inputs);
	});
	$(document).on('click' ,'.Res_step .line_school input' , function(){
		var Allinput = $(this).parents('ul.line_school').prev('ul.all_school').find('input');
		var _this = $(this);
		var _Input = $(this).parents('ul.line_school').find('input');
        SubInput(_this,Allinput,_Input);
    });	
   	function AllInput(_this,Inputs){
   		var CheckBox = Inputs;
		var gouxuan = _this.is(':checked');
		if(gouxuan){
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=true;
            };
      	}else{
        	_this.prop('checked',false);
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=false;
            };
        }
   }   	
   	function SubInput(_this,Allinput,_Input){
   		if (! _this.checked) {
          	Allinput. attr ("checked" , false);
        }
        var sub_input_length = _Input.size();
        var checkedsub = _this.parents('ul.line_school').find('input:checked').length;
        if (checkedsub == sub_input_length) {
           Allinput.prop( "checked" , true );
        }
   	}

});




