$(document).ready(function(){

	/*查看教师弹框样式*/
	$(".classRecordBox table tr td a.look").on("click",function(){
		$(".clock_teacher").show();
	});
	/*视频中有图片情况 点击放大和缩小*/
	$(".clock_teacher .clock_con_concent .video img").on("click",function(){
		$(".clock_teacher .clock_con_concent .video img").toggleClass("bigPic");
	});
	/*查看教师弹框样式关闭*/
	$(".clock_teacher img.close").on("click",function(){
		$(".clock_teacher").hide();
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
	var vals=texts.val();
		if(vals!=""){
			$(".postReply .dialogueBox ul").append(htmls);
		 	texts.val("");
		}
		
	});
		 	
	   
});
