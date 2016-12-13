$(document).ready(function() {
	/*班级学科切换部分*/ //列表页
	$(".tabBox p a").on("click", function() {
		$(this).addClass("current").siblings("a").removeClass("current");
	});
	/*考试分析成绩列表切换*/
	$(".mainTab ul li a").on("click", function() {
		$(this).parent("li").addClass("current").siblings().removeClass("current");
	});
	
	
	
	/*翻页居中*/
	function pageW(){
		var pageL=$(".pageBox a").length;
		var pageW=($(".pageBox a").width()+6)*pageL;
		$(".pageBox").width(pageW);
	}
	pageW();
	
	/*翻页状态*/
	$(".pageBox a[data-pag=page]").on("click",function(){
		$(this).addClass("current").siblings().removeClass("current");
	});
	
	
	
	/*均分优良率及格率统计*/
	/*$(".mainOneMapTab ul li").on("click",function(){
		
		$(this).addClass("current").siblings("li").removeClass("current");
		var index=$(this).index();
		$(".mainOneMapBox .histogram").eq(index).show().siblings(".histogram").hide();

	});*/

/*操作箭头=================*/
$(window).scroll(function(){
	var h=$(document).scrollTop();
	var hW=$(window).height();
	if(h>=hW){
		$('#backArrow').show();
	}else{
		$('#backArrow').hide();
	}	
});
$('#backArrow').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
});
	
	
	
	
	
	
});






/*table表格超出有滚动条*/
	function tableScoll(config){
		var boxW=$(config.boxName).width();
		var lengths=$(config.lengthsNmae).length;
		var boxNmae_table=$(config.boxNmae_table);
		if(lengths>config.num && boxW>config.scw){
			lengths-=config.num;
			boxNmae_table.css({"width":config.min_w+lengths*config.tdW});
		}
	}
	

