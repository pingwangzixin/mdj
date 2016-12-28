$(function (){
	//文件格式宽度赋值
	/*var len=$('.header dl').children().length;
	var sum = [];
	for(var i=0;i<len;i++){
		sum.push($('.header dl').children().eq(i).outerWidth(true));
	};
	if(len){
		var sumMax = sum.reduce(function(prev,cur,index,array){
		     return prev + cur;
		});
		sumMax += 4;
		$('.header dl').css({'width':Math.ceil(sumMax)+'px'});
	}*/
	
	var long = 0;
	$('.header dl').children().each(function (){
		long += $(this).outerWidth(true);
	});
	long += 4;
	$('.header dl').css({'width':long});
		
	//文件格式切换
	var activeIndex = sessionStorage.getItem('active');
	if(activeIndex) {
		activeIndex.split(',').map(function(v,i) {
			if(v==0) {
				$('.header dl dd').addClass('active')
			}else{
				$('.header dl dd[ddIndex='+v+']').addClass('active')
			}
		})
	}
	var ddArr = [];
	
	$('.header dl dd').on('click',function (){
		if($(this).index() == 1){
			if($(this).hasClass('active')){
				$('.header dl dd').removeClass('active');
				sessionStorage.setItem('active','');
			}else{
				$('.header dl dd').addClass('active');
				sessionStorage.setItem('active',0);
			}
			ddArr=[];
		}else{
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				ddArr.remove($(this).attr('ddIndex'));
				sessionStorage.setItem('active',ddArr);
			}else{
				$(this).addClass('active');
				ddArr.push($(this).attr('ddIndex'));
				sessionStorage.setItem('active',ddArr);
			}
			
		}
		
		var notObj = $('.header dl dd').first();
		if($('.header dl dd.active').not(notObj).length == $('.header dl dd').length-1){
			notObj.addClass('active');
			sessionStorage.setItem('active',0);
		}else{
			ddArr=[];
			notObj.removeClass('active');
			$('.header dl dd.active').each(function(i,v) {
				ddArr.push($(v).attr('ddindex'));
			});
			sessionStorage.setItem('active',ddArr);
		}
	});
	Array.prototype.remove = function(val) {
		var index = this.indexOf(val);
		if (index > -1) {
		this.splice(index, 1);
		}
	};
	
	
	
	//文件格式切换 二
/*	$('.header dl dd').on('click',function (){
		if($(this).index() == 1){
			$(this).siblings().removeClass('active');
			if(!$(this).hasClass('active')){
				$(this).addClass('active').siblings().removeClass('active');
			}
		}else{
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
			
			var notObj = $('.header dl dd').first();
			if($('.header dl dd.active').not(notObj).length == $('.header dl dd').length-1){
				notObj.addClass('active');
			}else{
				notObj.removeClass('active');
			}
		}
	});*/
	
	
	
	//上传、收藏共享、下发 tab切换
	$('.switch span').on('click',function (){
		var _this=$(this);
		tab($(this));
		$('.tab_box .list_box').eq(_this.index()).show().siblings().hide();
	});
	
	function tab(obj){
		obj.addClass('active').siblings().removeClass('active');
	}
	
	
	
	//上传、收藏共享删除
	$('.delete').on('click',function (){
		$('.per_del').show();
		$('.delete').attr('data-id','');
		$(this).attr('data-id','ok');
	});
	
	$('.pup_sure').on('click',function (){
		$('.per_del').hide();
		$(".delete[data-id='ok']").parents('.list').remove();
	});
	$('.pup_cancel').on('click',function (){
		$('.per_del').hide();
	});
	
	
	
	//共享至老师
	$(document).on('click','.to_up',function (){
		$('.share_box').show();
		if(1){
			$('.share_box img').attr({'src':'../img/share_succ.png'}).siblings('p').text('共享成功');
		}else{
			$('.share_box img').attr({'src':'../img/share_fail.png'}).siblings('p').text('共享失败');
		}
		setTimeout(function (){
			$('.share_box').hide();
		},2000);
	});
	
	
	
	//选择年级 科目 单元 
	$('.screen_box').on('click','div',function (){
		if(!this.Status){
		//	$(this).nextAll().hide();
			$(this).css({'left':'initial','marginLeft':0});
			$(this).addClass('active').siblings('div').removeClass('active');
			$('.bomb').show();
			var type=$(this).attr('data-ch');
			switch (type){
				case 'grade':
					var data=[
						{name:'一年级'},
						{name:'二年级'},
						{name:'三年级'},
						{name:'四年级'},
						{name:'五年级'},
						{name:'六年级'},
						{name:'七年级'},
						{name:'八年级'},
						{name:'九年级'}
					];
					var txt=data.map(function (da){
						return "<li>"+da.name+"</li>";
					}).join('');
					$('.bomb').find('.con').html('<ul>'+txt);
					//console.log($(this).text());
					break;
				case 'subject':
					var data=[
						{name:'语文上'},
						{name:'语文下'},
						{name:'英语上英语上'},
						{name:'英语下'},
						{name:'数学上'}
					];
					var txt=data.map(function (da){
						return "<li>"+da.name+"</li>";
					}).join('');
					$('.bomb').find('.con').html('<ul>'+txt);
					break;
				case 'unit':
					var data=[
						{name:'第一单元'},
						{name:'第二单元'},
						{name:'第三十单元第三十单元第三十单元'},
						{name:'第四单元'},
						{name:'第五单元第五单元'},
						{name:'第十三单元'}
					];
					var txt=data.map(function (da){
						return "<li>"+da.name+"</li>";
					}).join('');
					$('.bomb').find('.con').html('<ol>'+txt);
					break;
				case 'topic':
					var data=[
						{name:'0.邓稼先邓稼先邓稼 先邓稼先'},
						{name:'1.邓稼先邓稼先稼先邓稼先'},
						{name:'2.邓稼先邓稼先邓先邓稼邓稼先'},
						{name:'3.邓稼先'},
						{name:'4.先邓稼先邓稼先'},
						{name:'5.邓稼先邓稼先邓稼先邓稼先邓稼先'},
						{name:'6.邓稼先邓稼先邓稼先邓稼先'},
						{name:'7.邓稼先邓稼先邓稼先邓稼先邓稼先'},
						{name:'8.邓稼先邓稼先先邓稼先'},
						{name:'9.邓稼先邓稼先邓稼先邓稼先邓稼先'},
						{name:'10.先邓稼先邓稼先'},
						{name:'11.邓稼先邓稼先邓稼先邓稼先邓稼先'}
					];
					var txt=data.map(function (da){
						return "<li>"+da.name+"</li>";
					}).join('');
					$('.bomb').find('.con').html('<ol>'+txt);
					break;
				default:
					break;
			}
			sta_col($('div[data-ch='+type+']'));
		}else{
			$('.bomb').hide();
		}
		this.Status=!this.Status;
		
		//当前选项字体颜色状态
		function sta_col(obj){
			for(var i=0; i<$('.con li').length; i++) {
				if(obj.text()==$('.con li').eq(i).text()) {
					$('.con li').eq(i).css('color','#24bfff');
					break;
				}
			}
		};
	});
	
	//下一按钮显示
	$('.bomb .con').on('click','li',function (){
		if($(this).text()!=$('.screen_box div.active').text()){
			$('.screen_box div.active').nextAll().text('请选择').hide();
		}
		$('.screen_box div.active').text($(this).text()).next().show().next().show();
		$('.screen_box div.active')[0].Status=!$('.screen_box div.active')[0].Status;
		$('.bomb').hide();
	});
	
	//搜索页
	//如果能搜索到内容 a为真
	var a  = true;
	//在输入值时让历史搜索出现
	$('#searchBox').on('input',function() {
		$('.seaHistoryWrap').hide();
		if($(this).val()==''&&$('.searchContent').css('display')=='none') {
			$('.seaHistoryWrap').show();
		}
	});
	//点击搜索框
	$(document).on('click','#searchBtn,#history li',function() {
		var title = $("#searchBox").val();
		title = $.trim(title);//过滤空格

		if(a&&$(this).prev().val()!=''){
			$("body").css('background','#eee');
			$('.searchContent').show().siblings().not('.searchInpWrap,.bott').hide();
			
			//个人搜索页面滚动吸顶条
			var fixedTop=$('.switch').offset().top;
			var paddTop=$('.switch').outerHeight(true);
			$(window).on('scroll',function (){
				var scrollTop=$(document).scrollTop();
				if(fixedTop <= scrollTop){
					$('.switch').css({'position':'fixed','marginTop':0});
					$('.tab_box').css('paddingTop',paddTop);		
				}else{
					$('.switch').css({'position':'initial','marginTop':0.2 + 'rem'});
					$('.tab_box').css('paddingTop',0);
				}
			});
		}else{
			$("body").css('background','#fff');
			$('.searchNull').show().siblings().not('.searchInpWrap,.bott').hide();
			
		}
	});
	
	//点击tab选项
	$('.searchContent .tab>span').on('click',function() {
		tab($(this));
	});
	
	
	//左滑
	mui('.list_box').on('swipeleft','.list',function(){
		if(!$(this).hasClass('ifClass')&&$(this).find('.to_left').length!=0){
			var w = $(this).find('.list_option').width();
            $(this).css({'transform':'translateX(-'+w+'px)'}).siblings('.list').css({'transform':'translateX(0)'}); //-80px 可根据自己的滑动的宽度修改
            $(this).addClass('ifClass').siblings().removeClass('ifClass');
            $(this).find('.slide_img').hide().parents('.list').siblings().find('.slide_img').show(); //隐藏右侧的滑动提示图片   
       };
	});
	mui('.list_box').on('swiperight','.list',function(){
        if($(this).hasClass('ifClass')){
            $(this).removeClass('ifClass').css({'transform':'translateX(0)'}).find('.slide_img').show();
        }
	});

});
