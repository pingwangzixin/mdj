$(function(){
	//选项卡页面切换
	var li = $(".pingjia li");
	li.on("click",function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index=li.index(this);
		$(".pjcon>div").eq(index).show().siblings().hide()
	})
	
	//强制结束弹窗出现
	$(".qzover").on("click",function(){
		$(".zhezhao").show();
		$(".qztc").show();
	})
	
	//关闭强制结束的弹窗
	$(".qzclose>img,.qzquxiao").on("click",function(){
		$(".qztc").hide();
		$(".zhezhao").hide();
	})
	
	//确认强制结束成功
	$(".tcbtn .qzqueren").on("click",function(){
		$(".qztc").hide();
		$(".del_down2").show()
		$(".text-text").html("强制结束成功")
		setTimeout(function(){
			$(".del_down").hide();
			$(".zhezhao").hide();
		},1000)
	})
	
	//打开重置弹窗
	$(".reset").on("click",function(){
		$(".cztc").show();
		$(".zhezhao").show();
	})
	
	//关闭重置弹窗
	$(".czclose>img,.czquxiao").on("click",function(){
		$(".cztc").hide();
		$(".zhezhao").hide();
	})
	

	//打分页面提交
	$(".dafentj").on("click",function(){
		$(".del_down").show();
		$(".zhezhao").show();
		$(".text-text").html("提交成功")
		setTimeout(function(){
			$(".del_down").hide();
			$(".zhezhao").hide();
			window.location.href="./zonghepingjia.html";
		},1000)
	})
	
	//全选
	$(".allselect").on("click",function(){
		var gouxuan=$(".allselect").is(":checked")
		var CheckBox = $('input');
		if(gouxuan){    
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=true;
            };
      	}else{   
        	$('.allselect').attr('checked',false);
            for(i=0;i<CheckBox.length;i++){
                CheckBox[i].checked=false;
            };
        } 
	})
	
	//任务评价弹窗
	$(".tdrenwu").on("click",function(){
		$(".rwonetc").show();
		var tit=$(this).find("span").html()
		$(".rwonetc .rwbiaoti").html(tit)
		$(".zhezhao").show()
	})
	
	//关闭任务弹窗
	$(".rwguanbi img,.rwpfdel").on("click",function(){
		$(".rwonetc").hide();
		$(".zhezhao").hide()
	})
	
	//任务弹窗确认按钮
	$(".rwpfsure").on("click",function(){
		$(".rwonetc").hide();
		$(".del_down").show();
		$(".zhezhao").show();
		$(".text-text").html("提交成功")
		setTimeout(function(){
			$(".del_down").hide();
			$(".zhezhao").hide();
		},1000)
	})
	
	//五角星评分
	$(".wujiaodafen").raty({
		path:"../img",
		number:4,
		score: 3
	});
})