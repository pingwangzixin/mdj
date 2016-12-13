$(document).ready(function(){

	/*查看教师弹框样式*/
	$(".classRecordBox table tr td a.look").on("click",function(){
		$(".clock_teacher").show(500);
	});
	/*视频中有图片情况 点击放大和缩小*/
	$(".clock_teacher .clock_con_concent .video img").on("click",function(){
		$(".clock_teacher .clock_con_concent .video img").toggleClass("bigPic");
	});
	/*查看教师弹框样式关闭*/
	$(".clock_teacher img.close").on("click",function(){
		$(".clock_teacher").hide(500);
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
		        '<p><strong>张老师：</strong>'+texts.val()+'</p>'+
		        '</li>';
	$(".postReply .dialogueBox ul").append(htmls);
	 texts.val("");
	});
		 	
	/*互动弹框中共的查看*/
	$(document).on("click",".studentsBox table tbody tr td a.clock",function(){
		$(".videoBox").show();
	});
	$(document).on("click",".videoBox img.close",function(){
		$(".videoBox").hide();
	});

});
