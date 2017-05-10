$(function(){
	//高三点击展开关闭
	var high3Off = true;
	$('.high-three .grade').click(function(){
		if( high3Off ){
			$(this).find('img').attr('src','../img/high-kong.png');
			$('.high1,.high2,.high3').show();
			$('.middle1,.middle2,.middle3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-three .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-three .middleSchool').css('margin','-136px 0px 0px -205px');
			$('.high-three .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-three .smallSchool').css('margin','-120px 0px 0px 134px');
			middleOff = true;
			smallOff = true;
			$('.high1,.high2,.high3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.high1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.high2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.high3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			high3Off = false;
		}else{
			$(this).find('img').attr('src','../img/high-three.png');
			$('.high1,.high2,.high3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high3Off = true;
		}
	});
	
	//高三---初中点击展开关闭
	var middleOff = true;
	$('.high-three .middleSchool').click(function(){
		if( middleOff ){
			$(this).find('img').attr('src','../img/middleSchool-kai.png');
			$(this).css('margin','-162px 0px 0px -205px');
			$('.middle1,.middle2,.middle3').show();
			$('.high1,.high2,.high3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-three .grade').find('img').attr('src','../img/high-three.png');
			$('.high-three .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-three .smallSchool').css('margin','-120px 0px 0px 134px');
			high3Off = true;
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
			$(this).css('margin','-136px 0px 0px -205px');
			$('.middle1,.middle2,.middle3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middleOff = true;
		}
	});
	
	
	//高三---小学点击展开关闭
	var smallOff = true;
	$('.high-three .smallSchool').click(function(){
		if( smallOff ){
			$(this).find('img').attr('src','../img/smallSchool-kai.png');
			$(this).css('margin','-143px 0px 0px 134px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.high1,.high2,.high3').hide();
			$('.middle1,.middle2,.middle3').hide();
			$('.high-three .grade').find('img').attr('src','../img/high-three.png');
			$('.high-three .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-three .middleSchool').css('margin','-136px 0px 0px -205px');
			high3Off = true;
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
			$(this).css('margin','-120px 0px 0px 134px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			smallOff = true;
		}
	});
	
	
	
	//高二点击展开关闭
	var high2Off = true;
	$('.high-two .grade').click(function(){
		if( high2Off ){
			$(this).find('img').attr('src','../img/high-kong.png');
			$('.high1,.high2,.high3').show();
			$('.middle1,.middle2,.middle3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-two .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-two .middleSchool').css('margin','-104px 0 0 -186px');
			$('.high-two .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-two .smallSchool').css('margin','-110px 0 0 80px');
			high2_middleOff = true;
			high2_smallOff = true;
			$('.high1,.high2,.high3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.high1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.high2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			high2Off = false;
		}else{
			$(this).find('img').attr('src','../img/high-two.png');
			$('.high1,.high2,.high3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high2Off = true;
		}
	});
	
	//高二---初中点击展开关闭
	var high2_middleOff = true;
	$('.high-two .middleSchool').click(function(){
		if( high2_middleOff ){
			$(this).find('img').attr('src','../img/middleSchool-kai.png');
			$(this).css('margin','-130px 0 0 -186px');
			$('.middle1,.middle2,.middle3').show();
			$('.high1,.high2,.high3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-two .grade').find('img').attr('src','../img/high-two.png');
			$('.high-two .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-two .smallSchool').css('margin','-110px 0 0 80px');
			high2Off = true;
			high2_smallOff = true;
			$('.middle1,.middle2,.middle3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.middle1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.middle2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.middle3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			high2_middleOff = false;
		}else{
			$(this).find('img').attr('src','../img/middleSchool.png');
			$(this).css('margin','-104px 0 0 -186px');
			$('.middle1,.middle2,.middle3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high2_middleOff = true;
		}
	});
	
	
	
	//高二---小学点击展开关闭
	var high2_smallOff = true;
	$('.high-two .smallSchool').click(function(){
		if( high2_smallOff ){
			$(this).find('img').attr('src','../img/smallSchool-kai.png');
			$(this).css('margin','-134px 0 0 80px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.high1,.high2,.high3').hide();
			$('.middle1,.middle2,.middle3').hide();
			$('.high-two .grade').find('img').attr('src','../img/high-two.png');
			$('.high-two .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-two .middleSchool').css('margin','-104px 0 0 -186px');
			high2Off = true;
			high2_middleOff = true;
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
			high2_smallOff = false;
		}else{
			$(this).find('img').attr('src','../img/smallSchool.png');
			$(this).css('margin','-110px 0 0 80px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high2_smallOff = true;
		}
	});
	
	
	
	//高一点击展开关闭
	var high1Off = true;
	$('.high-one .grade').click(function(){
		if( high1Off ){
			$(this).find('img').attr('src','../img/high-kong.png');
			$('.high1,.high2,.high3').show();
			$('.middle1,.middle2,.middle3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-one  .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-one  .middleSchool').css('margin','-110px 0 0 -264px');
			$('.high-one  .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-one  .smallSchool').css('margin','-63px 0 0 142px');
			high2_middleOff = true;
			high2_smallOff = true;
			$('.high1,.high2,.high3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.high1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.high2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			high1Off = false;
		}else{
			$(this).find('img').attr('src','../img/high-one.png');
			$('.high1,.high2,.high3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high1Off = true;
		}
	});
	
	
	//高一---初中点击展开关闭
	var high1_middleOff = true;
	$('.high-one .middleSchool').click(function(){
		if( high1_middleOff ){
			$(this).find('img').attr('src','../img/middleSchool-kai.png');
			$(this).css('margin','-137px 0 0 -264px');
			$('.middle1,.middle2,.middle3').show();
			$('.high1,.high2,.high3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-one  .grade').find('img').attr('src','../img/high-one.png');
			$('.high-one  .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-one  .smallSchool').css('margin','-63px 0 0 142px');
			high1Off = true;
			high1_smallOff = true;
			$('.middle1,.middle2,.middle3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.middle1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.middle2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.middle3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			high1_middleOff = false;
		}else{
			$(this).find('img').attr('src','../img/middleSchool.png');
			$(this).css('margin',' -110px 0 0 -264px');
			$('.middle1,.middle2,.middle3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high1_middleOff = true;
		}
	});
	
	
	//高一---小学点击展开关闭
	var high1_smallOff = true;
	$('.high-one .smallSchool').click(function(){
		if( high1_smallOff ){
			$(this).find('img').attr('src','../img/smallSchool-kai.png');
			$(this).css('margin','-86px 0 0 142px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.high1,.high2,.high3').hide();
			$('.middle1,.middle2,.middle3').hide();
			$('.high-one .grade').find('img').attr('src','../img/high-one.png');
			$('.high-one .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-one .middleSchool').css('margin','-110px 0 0 -264px');
			high1Off = true;
			high1_middleOff = true;
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
			high1_smallOff = false;
		}else{
			$(this).find('img').attr('src','../img/smallSchool.png');
			$(this).css('margin','-63px 0 0 142px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high1_smallOff = true;
		}
	});
	
	
	
	//初三---点击展开关闭
	var middle3Off = true;
	$('.middle-three .grade').click(function(){
		if( middle3Off ){
			$(this).find('img').attr('src','../img/middle-kong.png');
			$(this).css('margin','-52px 0px 0px -205px');
			$('.middle1,.middle2,.middle3').show();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.middle-three  .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.middle-three  .smallSchool').css('margin','-43px 0px 0px 139px');
			middle3_smallOff = true;
			$('.middle1,.middle2,.middle3').removeClass('guang');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.middle1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.middle2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.middle3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			middle3Off = false;
		}else{
			$(this).find('img').attr('src','../img/middle-three.png');
			$(this).css('margin',' -26px 0px 0px -205px');
			$('.middle1,.middle2,.middle3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middle3Off = true;
		}
	});
	
	//初三---小学点击展开关闭
	var middle3_smallOff = true;
	$('.middle-three .smallSchool').click(function(){
		if( middle3_smallOff ){
			$(this).find('img').attr('src','../img/smallSchool-kai.png');
			$(this).css('margin','-66px 0px 0px 139px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.middle1,.middle2,.middle3').hide();
			$('.middle-three .grade').find('img').attr('src','../img/middle-three.png');
			$('.middle-three .grade').css('margin',' -26px 0px 0px -205px');
			middle3Off = true;
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
			middle3_smallOff = false;
		}else{
			$(this).find('img').attr('src','../img/smallSchool.png');
			$(this).css('margin','-43px 0px 0px 139px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middle3_smallOff = true;
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
	    var a = $('.Subject img').attr('data-title');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
		}
	});
    
    $('.Subject .pic2').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -329px 0 0 168px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});

	$('.Subject .pic3').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -228px 0 0 70px'});
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
		}
	});
	
	$('.Subject .pic4').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -228px 0 0 168px'});
    	$('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});

    $('.Subject .pic5').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -130px 0 0 70px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic6').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -130px 0 0 168px'});
    	$('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
	    	$('.lineTime').hide();
	    	$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic7').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -32px 0 0 70px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic8').on("mouseenter", function () {
	   $('.lineTime').show().css({'margin':' -32px 0 0 168px'});
    	$('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic9').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'66px 0 0 70px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic10').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' 66px 0 0 168px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic11').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'162px 0 0 70px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic12').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' 162px 0 0 168px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic13').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'262px 0 0 70px'});
	    $('.middle-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
		if(!this.state){
			$('.lineTime').hide();
			$('.middle-Zindex').css('z-index','1');
		}
	    
	});
    
    //科目点击显示时间
    $('.Subject>img').click(function(){
    	this.state = true;
    	$('.lineTime').show();
    	$('.middle-Zindex').css('z-index','0');
    });
    
    
    //时间链的随机颜色
    Color();
    function Color(){
    	var BgColor =[0,1,2,3,4,5];
    	var BorderColor = ['#74bcd5','#f1ae4d','#6ad87e','#d085d9','#dec836','#f55f6b'];
    	var lens = $('.Line li').length;
    	var num = 0;
    	for(var i=0;i<lens;i++){
    		if(num==6){num=0};
    		$('.Line span').eq(i).css('background-image','url(../img/chain-bg'+ BgColor[num] +'.png)');
    		$('.chain .Line li em').eq(i).css('border-color',BorderColor[num]);
    		num++;
    	}
    };
    
    //时间连页面的科目,时间,年级的显示
    $('.chain-name').text(sessionStorage.getItem('title'));
    $('.chain-time').text(sessionStorage.getItem('time'));
    $('.chain-grade').text(sessionStorage.getItem('grade'));
	
})
