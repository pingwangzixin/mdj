$(document).ready(function(){
	//新教案列表
	
   
    //tabs(".nav-list>ul","current",".nav-container");
    
    //导航条
    //没找着 应该没用
   /* $('.head .list li').on('click',function(){
        $(this).find('a').addClass('active').parent('li').siblings('li').find('a').removeClass('active');
    });*/
    
   //筛选
   	function filterAll(config){
		$(config.inputQx).on("click",function(){
			$(this).toggleClass("active");
			if($(this).attr("class")=="active"){
				$(config.inputDx).addClass("active");
			}else{
				$(config.inputDx).removeClass("active");
			}
		});
		$(config.inputDx).on("click",function(){
			$(this).toggleClass("active");
			
			// 2016.11.25zy 
			/*if($(config.inputDx).attr("class")==""){
				$(config.inputQx).removeClass("active");
			}*/
			
			
			var ls=$(config.inputDx).length;
			var chs=$(config.inputDx+".active").length;
			if(ls==chs){
				$(config.inputQx).addClass("active");
			}else{
				$(config.inputQx).removeClass("active");
			}
		});
	}
   	//调用
   	filterAll({
		"inputQx":".investment_btn dl dd[sxqb='all']",
		"inputDx":".investment_btn dl dd[sxdg='dg']"
	});
	
	
	
    //列表切换 		我的资源 & 下发记录
    $(".lianjie span a").on("click",function(){
        $(".lianjie span a").removeClass("cur");
        $(this).addClass("cur");
    })
    
    //------------------------修改资源弹窗-----------------
    $(".tijiao,.guanbi").on("click",function(){
        $(".shuxing").hide();
    });
    $(".bianji").on("click",function(){
        $(".shuxing").show();
    });
    $(".type span").on("click",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
    });
    
    //上传资源
    $(".shangchuan").on("click",function(){
        $(".uploadzy").show();
        $(".zhezhao").show();
        /*$('.uploadzy .tijiao').hide();*/
        $('.uploadzy .left').css('background','none');
    });
    
    //下载上传资源提示		微课大赛上传 & 上传资源
    $(".floating ul li").on("mousemove",function(){
        $(this).children(".juxing").show();
    });
    $(".floating ul li").on("mouseout",function(){
        $(this).children(".juxing").hide();
    });
    
    
    
    
    
    /*悬浮框显示和收回*/
   /*$(".floating").hover(function(){
   	$(this).stop().animate({right:"-5px"},200);
   },function(){
   	$(this).stop().animate({right:"-50px"},200);
   });*/
    //微课大赛上传
    $(".weike").on("click",function(){
        $(".weikeupload").show();
        $(".zhezhao").show()
        /*$('.uploadzy .tijiao').hide();*/
        $('.weikeupload .left').css('background','none');
    })
    
    //关闭上传弹窗
    $(".zyscgb img").on("click",function(){
        $(".uploadzy").hide();
        $(".zhezhao").hide();
    })

    $(".weikegb img").on("click",function(){
        $(".weikeupload").hide();
        $(".zhezhao").hide();
    })
    //删除资源
    $("#delete").on("click",function(){
        var s =$(".investment_con_one input:checked").size();
        if(!s){
            $(".del_down2").show()
            $(".del_down2 img").attr('src','../img/warn.png');   
            $(".text-text").text("请选中您需要删除的资源");
            $(".zhezhao").show();
            setTimeout(function(){
                $(".del_down2").hide();
                $(".zhezhao").hide();
            },1500);
        }else{
            $(".text-text").text("确认要删除资源吗?");
            $('.delSureDel,.zhezhao').css('display','block');
        }
    });

    cancelUpload('.upqxsc','.zhezhao,.delSureDel');
    cancelUpload('.delClose','.zhezhao,.delSureDel')

     //下载资源
    $("#download").on("click",function(){
        var s =$(".investment_con_one input:checked").size();
        if(!s){
            $(".del_down2").show()
            $(".del_down2 img").attr('src','../img/warn.png');   
            $(".text-text").text("请选中您需要下载的资源");
            $(".zhezhao").show();
            setTimeout(function(){
                $(".del_down2").hide();
                $(".zhezhao").hide();
            },1500);
        }
    });

  
 
    
    //上传弹窗按钮切换
    $(".nianji button").on("click",function(){
        $(this).addClass("scxz").siblings().removeClass("scxz");
         
    });
	//取消上传  
    function cancelUpload(obj,child){
        $(obj).on('click',function(){
            $(child).css('display','none');
        })
    }
    cancelUpload('.upqxsc','.zhezhao,.weikeupload');
    cancelUpload('.upqxsc','.zhezhao,.uploadzy');


    

	//点击共享至老师
    function showWindow(obj,children){
        $(obj).on('click',function(){
        	if($(".investment_con table tr input:checked").size()){
        		$(children).css('display','block');
        	}else{
        		$(".del_down2").show()
	            $(".del_down2 img").attr('src','../img/warn.png');   
	            $(".text-text").text("请选中您需要共享的资源");
	            $(".zhezhao").show();
	            setTimeout(function(){
	                $(".del_down2").hide();
	                $(".zhezhao").hide();
	            },1500);
        	}
           
        });
    }
    showWindow('#shareTeacher','.zhezhao,.ggTeacher');
    cancelUpload('.gongClose','.zhezhao,.gongxiangzhi');
    cancelUpload('.gongxiangzhi .upqxsc','.zhezhao,.gongxiangzhi');

  /*  $('.gongSeleAll').on('click',function(){
        if($(this).prop('checked')){
            $('.gongxiangzhi .gongPersons li input').prop('checked',true);
            $(this).prop('checked',true);
        }else{
            $('.gongxiangzhi .gongPersons li input').prop('checked',false);
            $(this).prop('checked',false);
        }
    })
*/
    
	//下发到学生
	function xiafashowWindow(obj,children){
	        $(obj).on('click',function(){
	        	if($(".investment_con table tr input:checked").size()){
	        		$(children).css('display','block');
	        	}else{
	        		$(".del_down2").show()
		            $(".del_down2 img").attr('src','../img/warn.png');   
		            $(".text-text").text("请选中您需要下发的资源");
		            $(".zhezhao").show();
		            setTimeout(function(){
		                $(".del_down2").hide();
		                $(".zhezhao").hide();
		            },1500);
	        	}
	        });
	    }
	xiafashowWindow('#toStudent','.zhezhao,.toStudentWrap');
	
	//下发至学生的下发按钮
	$('.toStudentWrap .upsuresc').on('click',function(){
	    if($(".gongPersons li input:checked").size()){
	        $('.toStudentWrap').css('display','none');
	        $('.xiafaSuccess').css('display','block');
	        setTimeout(xiafaHide,1800);
	        function xiafaHide(){
	            $('.xiafaSuccess,.zhezhao').css('display','none');
	        }
	    }
	})
	
	
	//上传 微课 修改 下发 确认钮
	$('.tijiao .upsuresc').on('click',function(){
		$(".del_down2").show();
		$('.zhezhao').css('z-index','1002');
		setTimeout(function(){
	        $(".del_down2").hide();
	        $(".zhezhao").css('z-index','1001');
	    },1500);
	});

    
    //筛选年级下拉列表
    $('.investment_btn').on('click','.class_screen span',function (event){
		$('.class_screen ul').toggle();
		event.stopPropagation();
	});
	$(document).on('click','.class_screen ul li',function (){
		$('.class_screen ul').hide();
		$('.class_screen span').text($(this).text());
	});
	$(document).on('click',function (){
		$('.class_screen ul').hide();
	});
    
});