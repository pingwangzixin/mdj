$(function(){
			$(".Wdate").focus(function(){
				$(this).css({"background":"url('./common/My97DatePicker/skin/tubiao.gif') no-repeat 96% 50%"})
			})
			
			$(".Wdate").blur(function(){
				
				if($(this).val().length>0){
					$(this).css({"background":"url('./common/My97DatePicker/skin/tubiao.gif') no-repeat 96% 50%"})
				}else{
					$(this).css({"background":"url('./common/My97DatePicker/skin/datePicker.gif') no-repeat 96% 50%"})
				}
			})
            
            //夏季课程表上传点击事件
            $(".xjupload").click(function(){
                    $(this).css({"background":"#cfcdcd url(img/tianjias.png) no-repeat center"})
                    setTimeout(function(){
                            $(".zuobox").hide()
                            $(".xjup").show()
                    },2000)
            })
            
            //冬季课程表上传点击事件
            $(".djupload").click(function(){
                  $(this).css({"background":"#cfcdcd url(img/tianjias.png) no-repeat center"})
                  setTimeout(function(){
                          $(".youbox").hide()
                          $(".djup").show()
                  },2000)
          })
            
            //点击保存课程表改变背景演示
            $(".saveinfo").click(function(){
                    $(this).css({"background":"#31a4a7"})
                    $("#tcdui").show(500)
                    setTimeout(function(){
                            $("#tcdui").hide()
                            $(".saveinfo").css({"background":"#33cccc"})
                    },1500)
            })
            
            //查看夏季课程表弹窗
            $(".xjckls").click(function(){
                    $(this).css({"background":"#ccc"})
                    $(".xiajikc").fadeIn(500)
            })
            
            //退出查看
            $(".exit").click(function(){
                    $(".xjckls").css({"background":"#f3f3f3"})
                    $(".xiajikc").fadeOut(500)
                    $(".savelesson").fadeOut(500);
            })
            
            //可编辑的表格
            $('.seedjkcb td').click(function(){
                $(".savelesson").show();
                    if(!$(this).is('.input')){
                            $(this).addClass('input').html('<input type="text" value="'+ $(this).text() +'" />').find('input').focus().blur(function(){
                                    $(this).parent().removeClass('input').html($(this).val() || 0);
                            });	
                    }
            }).hover(function(){
                    $(this).addClass('hover');
            },function(){
                    $(this).removeClass('hover');
            });
    
            //表格修改保存
            $(".savelesson").click(function(){
                $("#tcdui").fadeIn(500)
                setTimeout(function(){
                    $("#tcdui").fadeOut(500)
                    $(".xiajikc").fadeOut(500)
                    $(".xjckls").css({"background":"#f3f3f3"})
                    $(".savelesson").fadeOut(500);
                },1000)
            })
            
            //点击查看已上传的夏季课程表
            
            $("#seekcb").click(function(){
              $(".xiajikc").show()
            })
            
            //修改已上传的夏季课程表
            
            $("#xgxjkcb").click(function(){
              $(".xiajikc").show()
            })
		})