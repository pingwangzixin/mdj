$(document).ready(function(){
	
	/*视频中有图片情况 点击放大和缩小*/
	$(".videoBox .video img").on("click",function(){
		$(".videoBox .video img").toggleClass("bigPic");
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
		var valText=texts.val();
		
		if(valText!=""){
			$(".postReply .dialogueBox ul").append(htmls);
			 texts.val("");
		}else{
			$(".dowPromptBox").show();
			setTimeout(function(){
				$(".dowPromptBox").hide();
				
			},3000);
			
		}
		
		 
	});
	
	
	
	
});
