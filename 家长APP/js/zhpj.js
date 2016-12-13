$(function(){
	
	
				$(".ckjieguo").on("tap",function(){		
					//点击切换文字
					var ck=$(this).children().eq(0).html();
					if(ck==="查看综合评价结果"){
						$(this).children().eq(0).html("收起综合评价结果");
					}
					if(ck==="收起综合评价结果"){
						$(this).children().eq(0).html("查看综合评价结果");
					}
					
					$(this).children().eq(1).toggleClass("qhshang");
					$(this).next().toggle();
				})
				
	
				//左滑显示更多课程
				leftRight();
			    function leftRight(){
		            var startX,moveX,moveEndX,leftNum,winWidth,moveNum;
		            var winWidth=$(window).width();
		            thisWidth=$('.xyfzhead .kemuul').outerWidth();
		            $('.xyfzhead .kemuulwrap').on("touchstart",function(ev){
		                var leftText=$(this).css('transform');
		                var reg = /-[1-9][0-9]*/g;  
		                leftNum = Number(leftText.match(reg))||0;
		                var touches = ev.originalEvent.changedTouches[0];
		                startX = touches.pageX;
		            })
		            $('.xyfzhead .kemuulwrap').on('touchmove',function(ev){
		               ev.preventDefault();
		                var touches = ev.originalEvent.changedTouches[0];
		                moveEndX=touches.pageX;
		                moveX=moveEndX-startX;
		                moveNum=moveX+leftNum;
		                if(thisWidth<winWidth){return false;};
		                if(moveNum>=0){moveNum=0};
		                if(moveNum<=(winWidth-thisWidth)){moveNum=(winWidth-thisWidth)};
		                $('.xyfzhead .kemuulwrap').css({'transform':'translateX('+moveNum+'px)'});
		                moveX=0;
		            })
			    }
			    
			    //选择科目变文字颜色
			    $(".kemuul li").on("tap",function(){
			    	$(this).addClass("active").siblings().removeClass("active")
			    })

			})