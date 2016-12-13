(function($){
	/*jobIndex start*/
	//底部選項卡切换
	$(".jobIndex footer,.mistakesCollection footer").on("click",'span',function(){
		$(this).css({left: 'initial',marginLeft: 0});
		if(!this.Status){
			//$(this).nextAll().hide();
			$("footer > p > span").removeClass('active');
			$("footer > p > span").map(function(){
				this.Status=false;
				$(this).removeClass('active');
			});
			$(this).addClass('active');
			$(".List").show();
			var catalog = $(this).attr('catalog');
			var sel = $(this).attr('sel');
			switch (catalog){
				case 'class':
				     var data = [
				     {name:'一年级',id:3},
				     {name:'三年级',id:5},
				     {name:'七年级',id:7},
				     {name:'九年级',id:6}
				     ];
				    var html = data.map(function(v){
				     	return "<span sel='item-"+v.id+"'>"+v.name+"</span>";
				     }).join('');
				     $(".List").find(".con").html(html);
					break;
				case 'subject':
				  var data = [
				     {name:'语文上',id:3},
				     {name:'数学下',id:5},
				     {name:'英语上',id:7},
				     {name:'化学下',id:6},
				     ];
				     var html = data.map(function(v){
				     	return "<span sel='item-"+v.id+"'>"+v.name+"</span>";
				     }).join('');
				     $(".List").find(".con").html(html);
					break;
				case 'unit':
					 var data = [
				     {name:'第一单元 阿斯顿发大是大非',id:9},
				     {name:'第二单元',id:3},
				     {name:'第二单元',id:2},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:1},
				     {name:'第二单元',id:7}
				     ];
				     var html = data.map(function(v){
				     	return "<li sel='item-"+v.id+"'>"+v.name+"</li>";
				     }).join('');
				     $(".List").find(".con").html("<ul>"+html);
					break;
				case 'section':
					var data = [
				     {name:'第一课 小猫钓鱼',id:1},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第二课 小猫钓鱼反思',id:3},
				     {name:'第三课 小猫不在钓鱼了',id:11},
				     {name:'第四课 小猫开了渔具商店',id:12}
				     ];
				     var html = data.map(function(v){
				     	return "<li sel='item-"+v.id+"'>"+v.name+"</li>";
				     }).join('');
				     $(".List").find(".con").html("<ul>"+html);
						break;
				default:
					 
					break;
			}
			$(".jobIndex .List,.mistakesCollection .List").find(".con [sel="+sel+"]").addClass('active');
		}else{
			$(".List").hide();
		}
		this.Status=!this.Status;
	});
	//選中操作
	$(".jobIndex .List .con,.mistakesCollection .List .con").on("click",'span,li',function(){
		$(".List").hide();
		$('footer p .active')[0].Status=!$('footer p .active')[0].Status;
		if($(this).attr('class')=='active'){
			return false;
		}
		$('footer p .active').nextAll().hide();
		var sel = $(this).attr('sel');
		$('footer p .active').text($(this).text()).attr("sel",sel).next().show().next().text('请选择').removeAttr('sel').show();
		
	});
	
	/*jobIndex end*/
	
	/*jobView start*/
	//底部題號頁內跳轉
//	$(".jobView footer,.mistakesCollection footer").on("click",'a',function(){
//		$("footer a").removeClass('active');
//		$(this).addClass('active');
//	});
	//答案解析開合
	$(".jobView article,.mistakesCollection article").on("click",".daan .r",function(){
		$(this).next().toggle();
	});
	/*jobView end*/
	
	
	//五角星
	$(".xing").raty({
		path:"../img",
		number:"4",
		readOnly: true,
		score: function() {
	    	return $(this).attr('data-score');
	  	}
	});
	//跳轉
	$(".jobIndex article").on("click","dd",function(){
		if($(this).attr('type')=='renwu'){
			window.location.href="taskView.html";
		}else{  
			window.location.href="jobView.html";
		}
	});
})($);
