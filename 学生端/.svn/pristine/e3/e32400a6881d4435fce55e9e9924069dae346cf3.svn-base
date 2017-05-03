$(function(){
	//高三点击展开关闭
	var highOff = true;
	$('.high-three .high-grade').click(function(){
		if( highOff ){
			$(this).find('img').attr('src','../img/high-three-kong.png');
			$('.high1,.high2,.high3').show();
			$('.middle1,.middle2,.middle3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-three .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-three .middleSchool').css('margin',' -95px 0 0 -183px');
			$('.high-three .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-three .smallSchool').css('margin','-78px 0 0 161px');
			middleOff = true;
			smallOff = true;
			$('.high1,.high2,.high3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.high1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.high2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.high3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			highOff = false;
		}else{
			$(this).find('img').attr('src','../img/high-three.png');
			$('.high1,.high2,.high3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			highOff = true;
		}
	});
	
	
	//初中点击展开关闭
	var middleOff = true;
	$('.high-three .middleSchool').click(function(){
		if( middleOff ){
			$(this).find('img').attr('src','../img/middleSchool-kai.png');
			$(this).css('margin','-122px 0 0 -183px');
			$('.middle1,.middle2,.middle3').show();
			$('.high1,.high2,.high3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-three .high-grade').find('img').attr('src','../img/high-three.png');
			$('.high-three .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-three .smallSchool').css('margin','-78px 0 0 161px');
			highOff = true;
			smallOff = true;
			$('.middle1,.middle2,.middle3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.middle1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.middle2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.middle3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			middleOff = false;
		}else{
			$(this).find('img').attr('src','../img/middleSchool.png');
			$(this).css('margin',' -95px 0 0 -183px');
			$('.middle1,.middle2,.middle3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middleOff = true;
		}
	});
	
	
	//小学点击展开关闭
	var smallOff = true;
	$('.high-three .smallSchool').click(function(){
		if( smallOff ){
			$(this).find('img').attr('src','../img/smallSchool-kai.png');
			$(this).css('margin','-102px 0 0 161px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.high1,.high2,.high3').hide();
			$('.middle1,.middle2,.middle3').hide();
			$('.high-three .high-grade').find('img').attr('src','../img/high-three.png');
			$('.high-three .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-three .middleSchool').css('margin',' -95px 0 0 -183px');
			highOff = true;
			middleOff = true;
			$('.small1,.small2,.small3,small4,.small5,.small6').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.small3', 1.5, { alpha: 0, y:100, scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			TweenMax.from('.small4', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.8, ease:Elastic.easeOut});
			TweenMax.from('.small5', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:1, ease:Elastic.easeOut});
			TweenMax.from('.small6', 1.5, { alpha: 0, y:-100,scaleX: 0,scaleY: 0,delay:1.2, ease:Elastic.easeOut});
			smallOff = false;
		}else{
			$(this).find('img').attr('src','../img/smallSchool.png');
			$(this).css('margin','-78px 0 0 161px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			smallOff = true;
		}
	});
	
	//点击展开左侧科目
	$('.high1,.high2,.high3,.middle1,.middle2,.middle3,.small1,.small2,.small3,.small4,.small5,.small6').click(function(){
		$(this).addClass('guang').siblings().removeClass('guang');
		if($('.Subject').css('opacity')=='0'){
			$('.Subject').show();
			TweenMax.from('.Subject', 1, { alpha: 1,scaleX: 0,scaleY:0, ease:Linear.easeNone});
			TweenMax.to('.Subject', 1, { alpha: 1,scaleX: 1,scaleY:1, ease:Linear.easeNone});
		}
	});
	
	
	
	
	
	
	
	
	
    //初始化动画
	initPageMotion();
    function initPageMotion(){
    	//云朵
      	/*TweenMax.from('.cloud1', 55, { alpha: 1,x: -2200,scaleX: 1,scaleY: 1, ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.cloud2', 46, { alpha: 1,x: -2200,scaleX: 1,scaleY: 1, delay:1.2, ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.cloud3', 60, { alpha: 1,x: -2200,scaleX: 1,scaleY: 1, delay:1.5,ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.cloud4', 54, { alpha: 1,x: -2160,scaleX: 1,scaleY: 1, delay:2.5, ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.cloud5', 65, { alpha: 1,x: -2200,scaleX: 1,scaleY: 1, delay:3.8,ease:Linear.easeIn,repeat:-1});
      	
      	TweenMax.from('.cloud6', 20, { alpha: 1,x: -100,scaleX: 1,scaleY: 1,yoyo:true,repeat:-1, ease:Linear.easeIn});
      	TweenMax.from('.cloud7', 22, { alpha: 1,x: -200,scaleX: 1,scaleY: 1, yoyo:true,repeat:-1,ease:Linear.easeIn});
      	TweenMax.from('.cloud8', 20, { alpha: 1,x: -200,scaleX: 1,scaleY: 1,yoyo:true,repeat:-1,ease:Linear.easeIn});
      	TweenMax.from('.cloud9', 20, { alpha: 1,x: -160,scaleX: 1,scaleY: 1,yoyo:true,repeat:-1,ease:Linear.easeIn});*/
      	
      	//大雁
    	TweenMax.from('.bird1', 14, { alpha: 1,x: -220,y:350,scaleX: 1,scaleY: 1, delay:0.2,ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.bird2', 14, { alpha: 1,x: -220,y:350,scaleX: 1,scaleY: 1, delay:0.4, ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.bird3', 14, { alpha: 1,x: -220,y:350,scaleX: 1,scaleY: 1, delay:0.6,ease:Linear.easeIn,repeat:-1});
    }	
    
    //科目的hover以及click
	$('.Subject .pic1').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -327px 0 0 70px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    $('.Subject .pic2').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -329px 0 0 168px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});

	$('.Subject .pic3').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -228px 0 0 70px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
	
	$('.Subject .pic4').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -228px 0 0 168px'});
    	$('.high-three .middleSchool').css('z-index','0');
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
    	$('.high-three .middleSchool').css('z-index','1');
	});

    $('.Subject .pic5').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -130px 0 0 70px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    $('.Subject .pic6').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -130px 0 0 168px'});
    	$('.high-three .middleSchool').css('z-index','0');
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
    	$('.high-three .middleSchool').css('z-index','1');
	});
    
    $('.Subject .pic7').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -32px 0 0 70px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    $('.Subject .pic8').on("mouseenter", function () {
	   $('.lineTime').show().css({'margin':' -32px 0 0 168px'});
    	$('.high-three .middleSchool').css('z-index','0');
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
    	$('.high-three .middleSchool').css('z-index','1');
	});
    
    $('.Subject .pic9').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'66px 0 0 70px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    $('.Subject .pic10').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' 66px 0 0 168px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    $('.Subject .pic11').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'162px 0 0 70px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    $('.Subject .pic12').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' 162px 0 0 168px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    $('.Subject .pic13').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'262px 0 0 70px'});
	}).on("mouseleave", function () {
	    $('.lineTime').hide();
	});
    
    
    $('.Subject>img').click(function(){
    	//$(this).off('mouseenter').unbind('mouseleave');
    	//$('.lineTime').show();
    });
    
    
    
    //时间链的随机颜色
    Color();
    function Color(){
    	var Bgnum =[0,1,2,3,4,5];
    	var lens = $('.Line li').length;
    	for(var i=0;i<6;i++){
    		
    	}
    	$('.Line span').css('background-image','url(../img/chain-bg'+ Bgnum +'.png)');
    };
	
})
