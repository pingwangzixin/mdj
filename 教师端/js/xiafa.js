$(document).ready(function(){
    //导航条
    $('.head .list li').on('click',function(){
        $(this).find('a').addClass('active').parent('li').siblings('li').find('a').removeClass('active');
    });
    //筛选
//    $(".investment_btn dl dd").on("click",function(){
//        $(this).addClass("active").siblings().removeClass("active");
//    });
    //列表切换
//    $(".lianjie span a").on("click",function(){
//        $(".lianjie span a").removeClass("cur");
//        $(this).addClass("cur");
//    })
    $(".conleft-list li").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    
    
    /*2017.05.26 zy*/
    //查看学生回传资源详情弹框
   	$(document).on('click','.YstudentsList li',function (){
   		$('.Ydetail').show(); 
   	});
    //关闭学生已回传资源详情窗口
   	$('.Ydetail .con>img').on('click',function (){
   		$('.Ydetail').hide(); 
   	});
   	
   	
   	//取消回传确认弹框
   	$(document).on('click','.YcancelReturn',function (){
   		$('.delSureDel').show();
   	});
   	//关闭取消回传确认弹框
   	$('.delClose, .delSureDel .upqxsc').on('click',function (){
   		$('.delSureDel').hide();
   	});
   	
   	

});