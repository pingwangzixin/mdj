$(document).ready(function(){
    //tab栏切换函数
    function tabs(tabTit,on,tabCon) {
        $(tabCon).each(function () {
            $(this).children().eq(0).show();
        });
        $(tabTit).each(function () {
            $(this).children().eq(0).addClass(on);
        });
        $(tabTit).children().click(function () {
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    }
    tabs(".investment_title","on",".investment_con");
    //tabs(".nav-list>ul","current",".nav-container");
    //导航条
    $('.head .list li').on('click',function(){
        $(this).find('a').addClass('active').parent('li').siblings('li').find('a').removeClass('active');
    });
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
   	//调用方法
   	filterAll({
		"inputQx":".investment_btn dl dd[sxqb='all']",
		"inputDx":".investment_btn dl dd[sxdg='dg']"
	});
	
	
	//
    //列表切换
    $(".lianjie span a").on("click",function(){
        $(".lianjie span a").removeClass("cur");
        $(this).addClass("cur");
    })
    //下载提示
    $(".weike").on("mousemove",function(){
        $(".juxing").show();
    });
    $(".weike").on("mouseout",function(){
        $(".juxing").hide();
    })
    
    
    //上传资源
    $(".shangchuan").on("click",function(){
        $(".uploadzy").show();
        $(".zhezhao").show();
        $(".uploadzy .tijiao").show();
        $('.uploadzy .left').css('background','none');
    })
    //上传资源提示
    $(".shangchuan").on("mousemove",function(){
        $(".sc_juxing").show();
    });
    $(".shangchuan").on("mouseout",function(){
        $(".sc_juxing").hide();
    })
    
    //微课大赛上传
    $(".weike").on("click",function(){
        $(".weikeupload").show();
        $(".zhezhao").show();
        $(".weikeupload .tijiao").show();
        $('.weikeupload .left').css('background','none');
    })
    
    //关闭上传弹窗
   

    $(".weikegb img").on("click",function(){
        $(".weikeupload,.uploadzy").hide();
        $(".zhezhao").hide();
    })
    //删除资源
    $("#delete").on("click",function(){
        var s =$(".investment_con_one input:checked").size();
        if(!s){
            $(".del_down2").show()
            $(".del_down2 img").attr('src','../img/gantan.png');   
            $(".text-text").text("请选中您需要删除的资源");
            $(".zhezhao").show();
            setTimeout(function(){
                $(".del_down2").hide();
                $(".zhezhao").hide();
            },1500)
        }else{
            $(".text-text").text("确认要删除资源吗?");
            $('.delSureDel,.zhezhao').css('display','block');
        }
    })

    cancelUpload('.upqxsc','.zhezhao,.delSureDel');
    cancelUpload('.delClose','.zhezhao,.delSureDel');

     //下载资源
    $("#download").on("click",function(){
        var s =$(".investment_con_one input:checked").size();
        if(!s){
             $(".del_down2").show()
            $(".del_down2 img").attr('src','../img/gantan.png');   
            $(".text-text").text("请选中您需要下载的资源");
            $(".zhezhao").show();
            setTimeout(function(){
                $(".del_down2").hide();
                $(".zhezhao").hide();
            },1500)
        }
    })

  
 
    
    //上传弹窗按钮切换	//有啥用？
   /* $(".nianji button").on("click",function(){
        $(this).addClass("scxz").siblings().removeClass("scxz")
    });*/
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
        	var s=$(".investment_con_one input:checked").size();
        	if(s){
        		$(children).css('display','block');
            	controlH();
        	}else{
        		$(".del_down2").show()
	            $(".del_down2 img").attr('src','../img/gantan.png');   
	            $(".text-text").text("请选中您需要共享的资源");
	            $(".zhezhao").show();
	            setTimeout(function(){
	                $(".del_down2").hide();
	                $(".zhezhao").hide();
	            },1500);
        	}
            
        })
    }
    showWindow('#shareTeacher','.zhezhao,.ggTeacher');
    cancelUpload('.gongClose','.zhezhao,.gongxiangzhi');
    cancelUpload('.gongxiangzhi .upqxsc','.zhezhao,.gongxiangzhi');


	//没用
 /*   $('.gongSeleAll').on('click',function(){
        if($(this).prop('checked')){
            $('.gongxiangzhi .gongPersons li input').prop('checked',true);
            $(this).prop('checked',true);
        }else{
            $('.gongxiangzhi .gongPersons li input').prop('checked',false);
            $(this).prop('checked',false);
        }
    })*/

    
//下发到学生
showWindow('#toStudent','.zhezhao,.toStudentWrap');
cancelUpload('.weikegb','.zhezhao,.toStudentWrap');





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

/*课件点击变背景色*/
$('.uploadzy .kejian').on('click',function(){
    $(this).addClass('cur').siblings().removeClass('cur');
})
/*编辑点击课件变色================*/
$('.editWrap .kejian').on('click',function(){
    $(this).addClass('cur').siblings().removeClass('cur');
})

/*控制筛选内容变多问题*/
function controlDown(){
    var h=$('.investment_btn').outerHeight(true);
    if(h>80){
        $('.investment_btn dl dt').css('height','43px');
    }

}
controlDown();

/*编辑点击弹出  控制===============*/
$('.investment_con .bianji').on('click',function(){
    $('.editWrap,.zhezhao').show();
})
$('.editWrap .upqxsc,#editClose').on('click',function(){
    $('.editWrap,.zhezhao').hide();
})

$('.tijiao .upsuresc').on('click',function(){
	$(".del_down2").show();
	$('.zhezhao').css('z-index','21');
	setTimeout(function(){
        $(".del_down2").hide();
        $(".zhezhao").css('z-index','10');
    },1500)
});


    
});