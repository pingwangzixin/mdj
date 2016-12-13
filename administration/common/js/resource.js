/**
 * resource core content（资源管理核心内容）
 */
(function(w){
    var config = {
        //执行函数
        add:function(){
            //thbody 中的input数量
            var number = $("table td input").length;
            //tab栏切换
            $(".conleft-list ul li").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                if($(this).text()=="待审核"){
                    $(".btn").show(1000).siblings("span").hide(1000);
                }
                else if($(this).text()=="未公开"){
                    $(".not-publicly").show(1000).siblings("span").hide(1000);
                }
                else if($(this).text()=="已公开"){
                    $(".already-open").show(1000).siblings("span").hide(1000);
                }
                else{
                    $(".select-nav span").hide(1000);
                }
            });
            //判断状态,显示弹窗
            $(".select-nav button").click(function(){
                if($(this).text()=="公开" && $("table td input:checked").length>0){
                    $(".popup-text").text("资源已公开");
                    $(".popup").show(500);
                    setTimeout(function(){
                        $(".popup").hide(500)
                    },1500);
                }
                else if($(this).text()=="取消公开" && $("table td input:checked").length>0){
                   $(".popup-text").text("资源已取消公开");
                   $(".popup").show(500);
                   setTimeout(function(){
                       $(".popup").hide(500)
                   },1500);
                }
                else if($(this).text()=="通过" && $("table td input:checked").length>0){
                    $(".popup-text").text("资源已通过");
                    $(".popup").show(500);
                    setTimeout(function(){
                        $(".popup").hide(500)
                    },1500);
                }
                else if($(this).text()=="不通过" && $("table td input:checked").length>0){
                    $(".popup-text").text("资源已不通过");
                    $(".popup").show(500);
                    setTimeout(function(){
                        $(".popup").hide(500)
                    },1500);
                }
            });
            //全选
            $("#select").click(function(){
                if($("table td input:checked").length != number){
                    $("table td input").attr("checked",true);
                }
                else {
                    $("table td input").attr("checked",false);
                }
            });
            $("table td input").click(function(){
                ($("table td input:checked").length==number) ?  $("#select").attr("checked",true) : $("#select").attr("checked",false);
            });
            
            //删除资源列表里面的选中数据
            $(".delres").click(function(){
                
                //判断当前input是否选中，已选中弹出删除框，否则就弹出提示
                if($("table td input:checked").length>0){
                    
                    $(".delreswrap").show(200);
                    
                    $(".suredel-res").click(function(){
                        $(".popup-text").text("已删除");
                        $(".popup").show(500);
                        $(".delreswrap").hide(200);
                        $("tr input:checked").parent().parent().remove();
    
                        setTimeout(function(){
                            $(".popup").hide(500);
                        },1500)
                    })
                    
                }else{
                    $(".delrestixi").show(200)
                    setTimeout(function(){
                        $(".delrestixi").hide(200);
                    },1500)
                }
            })
            //关闭确认删除的弹窗
            $(".delresclose,.nodel-res").click(function(){
                $(".delreswrap").hide(200)
            })

        },
        //调用函数
        init:function(){
            this.add();
        }
    };
    //总执行函数
    config.init();
    
    
        //echarts图表一
    
        // 基于准备好的dom，初始化echarts实例
        var tubiaoone = echarts.init(document.getElementById('leixing'));

        // 指定图表的配置项和数据
        var option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        top:'center',
			        icon: 'circle',
			        data:['视频','音频','图片','文稿','其他']
			    },
			    series: [
			        {
			            name:'资源类型',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '14',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:600, name:'视频'},
			                {value:900, name:'音频'},
			                {value:234, name:'图片'},
			                {value:800, name:'文稿'},
			                {value:1000, name:'其他'}
			            ]
			        }
			    ]
			};
			        // 使用刚指定的配置项和数据显示图表。
        tubiaoone.setOption(option);
			        
			        
		//echarts图表二
        // 基于准备好的dom，初始化echarts实例
        var tubiaotwo = echarts.init(document.getElementById('geshi'));

        // 指定图表的配置项和数据
        var option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        top:'center',
			        icon: 'circle',
			        data:['视频','音频','图片','文稿','其他']
			    },
			    series: [
			        {
			            name:'资源类型',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '14',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:335, name:'视频'},
			                {value:310, name:'音频'},
			                {value:234, name:'图片'},
			                {value:135, name:'文稿'},
			                {value:1548, name:'其他'}
			            ]
			        }
			    ]
			};
			// 使用刚指定的配置项和数据显示图表。
        tubiaotwo.setOption(option);
    
    //关闭视频弹窗
    $(".seeclose").click(function(){
        $("#seeresource").hide();
        $("#mengceng").hide();
    })
    
    //关闭编辑修改资源弹窗
    $(".editorclose,.editorquite").click(function(){
        $("#editores").hide();
        $("#mengceng").hide();
    })
    
    //编辑修改资源弹窗的UL选项卡切换
    $(".resleibie li").click(function(){
        $(this).addClass("reslbactive").siblings().removeClass("reslbactive")
    })
    
    //保存修改的资源弹窗内容
    $(".editorsure").click(function(){
        $("#editores").hide();
        $("#mengceng").hide();
        $(".popup").show()
        $(".popup-text").html("保存成功")
        setTimeout(function(){
            $(".popup").hide(300)
        },1000)
    })
})(window);