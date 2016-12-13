		
	//显示:当前日期
		function CurentTime(){ 
	        var now = new Date();
	        var year = now.getFullYear();       //年
	        var month = now.getMonth() + 1;     //月
	        var day = now.getDate();            //日
	        
	        var clock = year + "年";
	        if(month < 10) 
	        clock += "0";
	        
	        clock += month + "月";
	       
	        if(day < 10)
	            clock += "0";
	           
	        clock += day + "日";
	        return(clock); 
	    } 
		
		
		//取得当前日期所在周是一年中的第几周
		function getweeks(){
			var now = new Date();
			var year = now.getFullYear();       //年
	        var month = now.getMonth() + 1;     //月
	        var day = now.getDate();            //日
	        var weeks= new Date(year, month-1,day).getDay()-1;				//今天是星期几
	        
	        document.querySelector('.dataBox span i').innerText = getWeekNumber(year,month,day);
	        $('.tableBox table thead tr td').css({"color":"#000"});
	        $('.tableBox table thead tr td').eq(new Date(year, month-1,day).getDay()-1).css({"color":"#f00"});
		}
	    
	    
	    
	    //给定时间输出第几周
		function isLeapYear(year) {
     		return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
  		}
		function getMonthDays(year, month) {
		     return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
		}
		function getWeekNumber(y, m, d) {
		    var now = new Date(y, m - 1, d),
		         year = now.getFullYear(),
		         month = now.getMonth(),
		         days = now.getDate();
		     //那一天是那一年中的第多少天
		    for (var i = 0; i < month; i++) {
		         days += getMonthDays(year, i);
		    }
		    //那一年第一天是星期几
		    var yearFirstDay = new Date(year, 0, 1).getDay() || 7;
		
		    var week = null;
		    if (yearFirstDay == 1) {
		         week = Math.ceil(days / yearFirstDay);
		     } else {
		         days -= (7 - yearFirstDay + 1);
		         week = Math.ceil(days / 7) + 1;
		    }
		    return week;
		}
		 
		
		
		//调用手机日历插件
		function newdatas(){
			var picker = new mui.DtPicker({"type":"date","beginYear":"2006","endYear":"2020"});
			picker.show(function(rs){
			document.querySelector('#datas').innerText = rs.y.value+'年'+rs.m.value+'月'+rs.d.value+'日';
			//输出第几周
			document.querySelector('.dataBox span i').innerText = getWeekNumber(rs.y.value, rs.m.value, rs.d.value);
			$('.tableBox table thead tr td').css({"color":"#000"});
			$('.tableBox table thead tr td').eq(new Date(rs.y.value, rs.m.value-1, rs.d.value).getDay()-1).css({"color":"#f00"});
			picker.dispose();
			});
		}
		
		
		//点击显示上下周内容
		function showWeek(floag){
			//默认的每月天数
			var arrDay=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			//获取当前的日期
			var currText=document.querySelector('#datas').innerText;
			//年
			var year=currText.slice(0,4);
			//月
			var month=currText.slice(5,7);
			//日
			var day=currText.slice(8,currText.length-1);
			//判断是不是闰年
			if(isLeapYear(year)){
				arrDay[1]=29;
			}
			
			if(floag){//点击上一周
				//day-=7;//上周的日
				//alert(day-7);
				if(day-7>=10){
					day=day-7;
				}else if(1<=day-7 && day-7<10){
					day="0"+(day-7);
				}else{
					day=arrDay[month-2]+(day-7);
					if(month-1>=10){
						month-=1;
					}else if(1<=month-1 && month-1<10){
						month="0"+(month-1);
					}else{
						day=31+(currText.slice(8,currText.length-1)-7);
						month=12;
						year=currText.slice(0,4)-1;
					}
				}
			}else{//点击下一周
				//day+=7;//上周的日
				//alert(day-0+7);
				//alert(arrDay[month-0]);
				
				if(day-0+7<10){
					//alert();
					day="0"+(day-0+7);
				}else if(day-0+7>=10 && day-0+7<=arrDay[month-1]){
					day=day-0+7;
				}else if(day-0+7>arrDay[month-1]){
					day="0"+(day-0+7-arrDay[month-1]);
					if(month-0+1<10){
						month="0"+(month-0+1);
					}else if(month-0+1>=10 && month-0+1<=12){
						month=month-0+1;
					}else if(month-0+1>12){
						day="0"+(currText.slice(8,currText.length-1)-0+7-arrDay[month-1]);
						month="0"+1;
						year=currText.slice(0,4)-0+1;
					}
				}
			}
			//最新的日期
			document.querySelector('#datas').innerText=year+'年'+month+'月'+day+'日';
			//最新的周
			document.querySelector('.dataBox span i').innerText = getWeekNumber(year,month,day);
			//本周日期高亮
			$('.tableBox table thead tr td').css({"color":"#000"});
	        $('.tableBox table thead tr td').eq(new Date(year, month-1,day).getDay()-1).css({"color":"#f00"});
			
			//显示每周不同的实录内容 请自行ajax添加
			$.ajax({
				type:"get",
				url:"",
				async:true,
				success:function(data){
					var html=null;
					for(var i=0;i<8;i++){
						/*html+=*/
					}
				}
			});
			
			document.querySelector('.tableBox table tbody').innerHTML=getWeekNumber(year,month,day)+"周内容";
			
		}
		
		//点击显示上一周
		$(document).on("tap",".head a.toLeft",function(){
			showWeek(1);
		});
		//点击显示下一周
		$(document).on("tap",".head a.toRight",function(){
			showWeek(0);
		});
	
		
		
		/*查看课堂实录视屏*/
		$(document).on("tap",".classroomBox ul.ktsl li",function(){
			$(".videoMask").show();
		});
		/*关闭课堂实录视屏*/
		$(document).on("tap",".videoMask .hide",function(){
			$(".videoMask").hide();
		});
		
		/*显示图片轮播的情况*/
		$(document).on("tap",".classroomBox ul.kthdjl li",function(){
			if(0){
				$(".videoMask").show();
			}else{
				$(".sliderMaskClassroomBox").show();
				//获得slider插件对象
				var gallery = mui('.mui-slider');
				//执行轮播事件
				gallery.slider({
					interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
				});//这边跳转到第几张图
			}
		});
		//隐藏图片轮播//课堂记录
		$(document).on("tap",".sliderMaskClassroomBox",function(){
			$(".sliderMaskClassroomBox").hide();
		});
		
		

/*++++++++++++++++++++++++++++++++++++++++++++++++资源查看页面js+++++++++++++++++++++++++++++++++++++++++*/
	/*重置当前楼层*/
	function currFloor(){
		var num = $(".commentAll ul li").length;
		for(var i=0;i<num;i++){
			$(".commentAll ul li").eq(i).children(".commentBox").children(".userName").children(".namesBox").children("i").html(i+1+"楼");
		}
	}
	
		
	/*当前时间*/
	function currTimes(){
		var now = new Date();
		var year = now.getFullYear();       //年
	    var month = now.getMonth() + 1;     //月
	    if(month<10){
	    	month="0"+month;
	    }
	    var day = now.getDate();            //日
	    if(day<10){
	    	day="0"+day;
	    }
	    var hous = now.getHours();            //时
	    if(hous<10){
	    	hous="0"+hous;
	    }
	    var min = now.getMinutes();            //分
	     if(min<10){
	    	min="0"+min;
	    }
	    return month+"月"+day+"日 "+hous+":"+min;
	}
	
	
	/* 点击评论发表 */
	$(document).on("tap",".comment span",function(){
		$(".commentMask").show();
		$(".commentMask .con input").attr("placeholder","评论，说出你的想法吧.....");
		/* 发表信息 取消按钮 */
		$(document).off("tap",".commentMask .con .btn a.cancel");//取消点击事件
		$(document).on("tap",".commentMask .con .btn a.cancel",function(){
			$(".commentMask").hide();
			$(".commentMask .con input").val("");
		});	
		/* 发表信息 确认按钮 */
		$(document).off("tap",".commentMask .con .btn a.confirm");//取消点击事件
		$(document).on("tap",".commentMask .con .btn a.confirm",function(){
			
			var valText=$(".commentMask .con input").val();
			var htmls='<li><div class="userImg"><img src="../img/userImg01.png" alt="" /></div><div class="commentBox">'+
						'<div class="userName"><div class="namesBox"><strong class="names">郑存杰郑存杰郑存杰郑存杰</strong>'+
						'<i>1楼</i></div><p class="time">'+currTimes()+'</p></div><div class="commentText">'+valText+'</div></div></li>';
			if(valText != ""){
				$(".commentAll ul li:first-child").before(htmls);
				
				//2016.11.24
				/*var liLen = $(".commentAll ul li").length;
				if(liLen){
					$(".commentAll ul li:first-child").before(htmls);
				}else{
					$(".commentAll ul").append(htmls);
				}*/
			}
			$(".commentMask").hide();
			$(".commentMask .con input").val("");
			currFloor();
		});
	});
		
	
	
	
	/*点击名字回复信息*/
	$(document).on("tap",".commentBox .userName .namesBox strong.names",function(){
		var thisName=$(this).html();
		var thiss=$(this).parent(".namesBox").parent(".userName").parent(".commentBox").parent("li");
		if(0){
			$(".deleteMask").show();
			/* 删除当前评论 取消按钮 */
			$(document).off("tap",".deleteMask .con .btn a.cancel");//取消点击事件
			$(document).on("tap",".deleteMask .con .btn a.cancel",function(){
				$(".deleteMask").hide();
			});
			/* 删除当前评论 确认按钮 */
			$(document).off("tap",".deleteMask .con .btn a.confirm");//取消点击事件
			$(document).on("tap",".deleteMask .con .btn a.confirm",function(){
				$(".deleteMask").hide();
				thiss.remove();//我自己的评论删除
				currFloor();//重置楼层
			});
		}else{
			
			$(".commentMask").show();
			$(".commentMask .con input").attr("placeholder","回复"+thisName);
			/* 回复我的信息  取消按钮 */
			$(document).off("tap",".commentMask .con .btn a.cancel");//取消点击事件
			$(document).on("tap",".commentMask .con .btn a.cancel",function(){
				$(".commentMask").hide();
				$(".commentMask .con input").val("");
			});
			/* 回复我的信息  确认按钮 */
			$(document).off("tap",".commentMask .con .btn a.confirm");//取消点击事件
			$(document).on("tap",".commentMask .con .btn a.confirm",function(){
				var valText=$(".commentMask .con input").val();
				var htmls='<li><div class="userImg"><img src="../img/userImg01.png" alt="" /></div><div class="commentBox">'+
							'<div class="userName"><div class="namesBox"><strong class="names">郑存杰</strong>'+
							'<strong class="hf">回复</strong><strong class="names">'+thisName+'</strong>'+
							'<i>1楼</i></div><p class="time">'+currTimes()+'</p></div><div class="commentText">'+valText+'</div></div></li>';
				if(valText != ""){
					$(".commentAll ul li:first-child").before(htmls);
					$(".commentMask").hide();
					$(".commentMask .con input").val("");
					currFloor();
				}
				
			});
			
		}
	});	
	
	
	
	
	
	
/*============================================显示图片轮播的情况=========================================*/	
    //判断是否显示查看更多
    function sliderImgBox_look_show(){
    	var a_index=$(".sliderImgBox img").length;
    	//alert(a_index);
    	if(a_index>=8){
    		$(".sliderImgBox a").show();
    	}else{
    		$(".sliderImgBox a").hide();
    	}
    }
    window.onload=function(){
    	sliderImgBox_look_show();
    }
    
    
    //查看详情
	/*显示图片轮播的情况*/
	$(document).on("tap",".sliderImgBox img,.sliderImgBox a",function(){
		//获取点击的是第几张图片
		var index=$(this).index();
		$(".sliderMaskBox").show();
		//获得slider插件对象
		var gallery = mui('.mui-slider');
		//执行轮播事件
		gallery.slider({
			interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
			
		}).gotoItem(index,0);//这边跳转到第几张图
	});
	//隐藏图片轮播
	$(document).on("tap",".sliderMaskBox",function(){
		$(".sliderMaskBox").hide();
	});
		
	
		
