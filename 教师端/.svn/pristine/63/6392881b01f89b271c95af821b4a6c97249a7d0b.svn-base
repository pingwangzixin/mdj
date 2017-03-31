$(function () {
    //选项卡页面切换
    var li = $(".pingjia li");
    li.on("click", function () {
            $(this).addClass("active").siblings("li").removeClass("active");
            var index = li.index(this);
            $(".pjcon>div").eq(index).show().siblings().hide()
        })
        //显示隐藏弹框封装
    function shide(obj, state, ele) {
        $(document).on("click", obj, function () {
            if (state == "show") {
                for (var i = 0; i < ele.length; i++) {
                    $(ele[i]).show()
                }
            }
            if (state == "hide") {
                for (var i = 0; i < ele.length; i++) {
                    $(ele[i]).hide()
                }
            }
        })
    }
    shide(".qzover", "show", ['.zhezhao', '.qztc']) //强制结束弹窗出现
    shide(".qzclose>img,.qzquxiao", "hide", ['.qztc', '.zhezhao']) //关闭强制结束的弹窗
    shide(".reset", "show", ['.cztc', '.zhezhao']) //打开重置弹窗
    shide(".czclose>img,.czquxiao", "hide", ['.cztc', '.zhezhao']) //关闭重置弹窗
    shide(".rwguanbi img,.rwpfdel", "hide", ['.rwonetc', '.zhezhao']) //关闭任务弹窗
        //确认强制结束成功
    $(".tcbtn .qzqueren").on("click", function () {
            $(".qztc").hide();
            $(".del_down2").show()
            $(".text-text").html("强制结束成功")
            setTimeout(function () {
                $(".del_down").hide();
                $(".zhezhao").hide();
            }, 1000)
        })
        
        //全选
    $(".allselect").on("click", function () {
            var gouxuan = $(".allselect").is(":checked")
            var CheckBox = $('input');
            if (gouxuan) {
                for (i = 0; i < CheckBox.length; i++) {
                    CheckBox[i].checked = true;
                };
            }
            else {
                $('.allselect').attr('checked', false);
                for (i = 0; i < CheckBox.length; i++) {
                    CheckBox[i].checked = false;
                };
            }
        })
        //任务评价弹窗
    $(".tdrenwu").on("click", function () {
            $(".rwonetc").show();
            var tit = $(this).find("span").html()
            $(".rwonetc .rwbiaoti").html(tit)
            $(".zhezhao").show()
        })
    
    //封装的settimeout显示隐藏弹窗的函数
    function timeoutwindow(opt){
    	$(opt.obj).on("click",function(){
    		for(var i=0;i<opt.hide.length;i++){
    			$(opt.hide[i]).hide();
    		}
    		for(var i=0;i<opt.show.length;i++){
    			$(opt.show[i]).show();
    		}
    		$(opt.tchtml).html(opt.html)
    		setTimeout(function(){
    			for(var i=0;i<opt.show.length;i++){
    				$(opt.show[i]).hide();
    				if(opt.href.legth>=1){
    					window.location.href=opt.href
    				}else{
    				}
    			}
    		},opt.time)
    	})
    }
    //任务弹窗确认按钮
    timeoutwindow({
    	obj:".rwpfsure",
    	hide:['.rwonetc'],
    	tchtml:".text-text",
    	html:'提交成功',
    	show:['.zhezhao','.del_down'],
    	time:1000,
    	href:''
    })
    
    //打分页面提交
    timeoutwindow({
    	obj:".dafentj",
    	hide:[],
    	tchtml:".text-text",
    	html:'提交成功',
    	show:['.zhezhao','.del_down'],
    	time:1000,
    	href:'./zonghepingjia.html'
    })
    
     //五角星评分
    $(".wujiaodafen").raty({
        path: "../img"
        , number: 4
        , score: 3
    });
})