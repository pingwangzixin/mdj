/*
     -----------教材管理JS--------------
    //////////////////////////////////
    ----------------------------------
*/

$(function () {
    /*
        =====点击层级显示册别信息模块 开始=====
    */
    
    
    $(".section div").each(function(index){
        $(this).live("click",function(){
            $(".section div").removeClass("active");
            $(this).addClass("active");
            
            $(".grade label").each(function(index){
                $(this).live("click",function(){
                    $(".grade label").removeClass("xkactive");
                    $(this).addClass("xkactive");
                    
                    $(".jcverban label").each(function(index){
                        $(this).live("click",function(){
                            $(".jcverban label").removeClass("veractive");
                            $(this).addClass("veractive");
                            $(".main-tit,.youbanben,.bianjibanben").show()
                            $(".uploadhead,.main-tianjia").hide()
                            $(".main-xiazai").css({
                                "border": "none"
                            })
                        })
                    })
                })
            })
        })
    })


    /*
        遍历册别选项卡切换模块 开始---------------
    */
    $(".jcglul li label").each(function (index) {
        $(this).click(function () {
            $(".jcglul li label").removeClass("liactive");
            $(this).addClass("liactive")
        })
    })

    /*
        ======查看和修改册别信息，弹出灰色蒙层模块 开始======
    */
    
    //点击查看版本册别信息弹出灰色蒙层
    $(".chakan").click(function () {
            $(".jiaocaiwrap").show(300);
            $(".kcul span").hide()
            $(".mengceng").show()
        })
        //点击修改版本册别信息弹出灰色蒙层
    $(".xiugai").click(function () {
        $(".jiaocaiwrap").show(300);
        $(".kcul span").show()
        $(".mengceng").show()
    })

    //点击关闭查看和修改教材目录
    $(".qxckjc").click(function () {
        $(".jiaocaiwrap").hide(300)
        $(".mengceng").hide()
    })

    
    /*
        ========删除版本模块开始=========
    */
    
    //删除高中版本toggle动态绑定
    $(".gaozhongdel").live("click",function(){
        $(this).toggle(function () {
            $(".gaozhong span input").show();
        }, function () {
            var ipchecked = $(".gaozhong span input:checked").length
            if (ipchecked > 0) {
                $(this).attr("src", "./img/suredel.png")
            } else {
                $(".delrestixi").show(300)
                setTimeout(function () {
                    $(".delrestixi").hide(300)
                }, 1000)
            }
        },function(){
            $(".gaozhong span input:checked").parent().remove();
            $(this).attr("src", "./img/addbanben.png")
            $(".gaozhong span input").hide();
        });
        $(this).trigger("click");
    })
    

    //删除初中版本
    $(".chuzhongdel").live("click",function(){
        $(this).toggle(function () {
            $(".chuzhongjc span input").show();
        }, function () {
            var ipchecked = $(".chuzhongjc span input:checked").length
            if (ipchecked > 0) {
                $(this).attr("src", "./img/suredel.png")
            } else {
                $(".delrestixi").show(300)
                setTimeout(function () {
                    $(".delrestixi").hide(300)
                }, 1000)
            }
        },function(){
            $(".chuzhongjc span input:checked").parent().remove();
            $(this).attr("src", "./img/addbanben.png");
            $(".chuzhongjc span input").hide();
        });
        $(this).trigger("click");
    })
    
    
    //删除小学版本
    $(".xiaoxuedel").live("click",function(){
        $(this).toggle(function () {
            $(".xiaoxue span input").show();
        }, function () {
            var ipchecked = $(".xiaoxue span input:checked").length
            if (ipchecked > 0) {
                $(this).attr("src", "./img/suredel.png")
            } else {
                $(".delrestixi").show(300)
                setTimeout(function () {
                    $(".delrestixi").hide(300)
                }, 1000)
            }
        },function(){
            $(".xiaoxue span input:checked").parent().remove();
            $(this).attr("src", "./img/addbanben.png");
            $(".xiaoxue span input").hide();
        });
        $(this).trigger("click");
    })
    

    /*----------删除（小学、初中、高中）学科开始----------*/
    
    //删除高中学科
    $(".gaoxk").live("click",function(){
        $(this).toggle(function () {
            $(".gao-xk span input").show();
        }, function () {
            var ipchecked = $(".gao-xk span input:checked").length
            if (ipchecked > 0) {
                $(this).attr("src", "./img/deltwo.png");

            } else {
                $(".delrestixi").show(300)
                setTimeout(function () {
                    $(".delrestixi").hide(300)
                }, 1000)
            }
        },function(){
            $(this).attr("src", "./img/nianjidel.png");
            $(".gao-xk span input:checked").parent().remove();
            $(".gao-xk span input").hide();
        });
        $(this).trigger("click");
    })
    

    //删除初中学科
    $(".chuxk").live("click",function(){
        $(this).toggle(function () {
            $(".chu-xk span input").show();
        }, function () {
            var ipchecked = $(".chu-xk span input:checked").length
            if (ipchecked > 0) {
                $(this).attr("src", "./img/deltwo.png")
            } else {
                $(".delrestixi").show(300)
                setTimeout(function () {
                    $(".delrestixi").hide(300)
                }, 1000)
            }
        },function(){
            $(this).attr("src", "./img/nianjidel.png");
            $(".chu-xk span input:checked").parent().remove();
            $(".chu-xk span input").hide();
        });
        $(this).trigger("click");
    })
    
    
    //删除小学学科
    $(".xiaoxk").live("click",function(){
        $(this).toggle(function () {
            $(".xiao-xk span input").show();
        }, function () {
            var ipchecked = $(".xiao-xk span input:checked").length
            if (ipchecked > 0) {
                $(this).attr("src", "./img/deltwo.png")
            } else {
                $(".delrestixi").show(300)
                setTimeout(function () {
                    $(".delrestixi").hide(300)
                }, 1000)
            }
        },function(){
            $(this).attr("src", "./img/nianjidel.png");
            $(".xiao-xk span input:checked").parent().remove();
            $(".xiao-xk span input").hide();
        });
        $(this).trigger("click");
    })
    

    /*========删除册别开始========*/
    
    $(".banbenshanchu").live("click",function(){
        $(this).toggle(function () {
            $(".jcglul li input").show();
        }, function () {
            var ipchecked = $(".jcglul li input:checked").length
            if (ipchecked > 0) {
                $(this).attr("src", "./img/deltwo.png")

            } else {
                $(".delrestixi").show(300)
                setTimeout(function () {
                    $(".delrestixi").hide(300)
                }, 1000)
            }
        },function(){
            $(".jcglul li input:checked").parent().remove();
            $(this).attr("src","./img/nianjidel.png")
            $(".jcglul li input").hide();
        });
        $(this).trigger("click");
    })
    
    //取消确认删除
    $(".delresclose,.nodel-res").click(function () {
        $(".delreswrap").hide(300)
    })
    
    /*
        ====添加学科/版本/册别模块 并且append进去====
    */    
        
    //apend到册别
    $(".cebiesur").live("click",function(){
        var cebieval=$(".cebieval").val();
        
        $(".jcglul ul").append('<li><input class="checkone" id="cebie" type="checkbox" value="" name="check[]" /><label for="cebie">'+cebieval+'</label></li>')
    })
    
    //点击添加(册别)弹窗
    // $(".tjbanben").live("click",function(){
    //     $(".addcebie").show(200)
    // })
    
    //点击取消添加
    $(".verquit,.adtitr").click(function () {
        $(".addver").hide(200)
    })
    
})

   