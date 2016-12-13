$(document).ready(function(){

	/*查看教师弹框样式*/
	$(".classRecordBox table tr td a.look").on("click",function(){
		$(".clock_teacher").show(500);
	});
	/*查看教师弹框样式关闭*/
	$(".clock_teacher img.close").on("click",function(){
		$(".clock_teacher").hide(500);
	});
	/*展开折叠回复信息*/
	$("a[data-a='hfxx']").on("click",function(){
		$(this).children("i").addClass("on").removeClass("under");
		$(this).parent("div.text").siblings("div.viewBox").show();
	});
	/*发表信息*/
	$(".publicationBox .btn button").on("click",function(){
		var texts=$(this).parent(".btn").siblings("textarea");
				
		$.ajax({
			type:"get",
			url:"",
			async:true,
			success:function(data){
						
			}
		});
				
	var htmls='<li>'+
		        '<strong>张老师：</strong><p>'+texts.val()+'</p>'+
		        '</li>';
	$(".postReply .dialogueBox ul").append(htmls);
	 texts.val("");
	});
		 	
		 	
		 	
	/*选择学生成绩等级*/
	$("strong[data-i]").on("click","i",function(){
		var num=$(this).index();
		switch(num){
			case 0:
				$(this).addClass("best").siblings("i").removeClass("good").removeClass("bad");
			break;
			case 1:
				$(this).addClass("good").siblings("i").removeClass("best").removeClass("bad");
			break;
			case 2:
				$(this).addClass("bad").siblings("i").removeClass("good").removeClass("best");
			break;
		}	
	});
	/*学生互动*/
	$("span.interactive").on("click",function(){
		$(this).addClass("current");
		$(".interactiveEvaluation").show(500);
	});
	/*互动弹框关闭*/
	$(".interactiveEvaluation img.close").on("click",function(){
		$(".interactiveEvaluation").hide(500);
	});
	/*互动弹框取消*/
	$(".interactiveEvaluation .btn a.cancel").on("click",function(){
		$(".interactiveEvaluation").hide(500);
	});
	/*互动弹框保存*/
	$(".interactiveEvaluation .btn a.save").on("click",function(){
		/*数据插入到数据库*/
		$.ajax({
			type:"get",
			url:"",
			async:true,
			success:function(data){
				
			}
		});
		
		$(document).ajaxStart(function(){
			alert("正在保存...");
		}).ajaxStop(function(){
			alert("已经保存...");
		});
	});
	
	
	
		   
});
