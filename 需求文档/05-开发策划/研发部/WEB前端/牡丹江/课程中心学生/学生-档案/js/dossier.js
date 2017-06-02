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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
//			$(this).find('img').attr('src','../img/high-kong.png');
			$('.middle1,.middle2,.middle3').hide();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.high-one  .middleSchool').find('img').attr('src','../img/middleSchool.png');
			$('.high-one  .middleSchool').css('margin','-110px 0 0 -264px');
			$('.high-one  .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.high-one  .smallSchool').css('margin','-63px 0 0 142px');
			high2_middleOff = true;
			high2_smallOff = true;
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			high1Off = false;
		}else{
//			$(this).find('img').attr('src','../img/high-one.png');
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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
			$('.middle1,.middle2,.middle3').show();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.middle-three  .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.middle-three  .smallSchool').css('margin','-43px 0px 0px 139px');
			middle3_smallOff = true;
			$('.middle1,.middle2,.middle3').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.middle1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.middle2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.middle3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			middle3Off = false;
		}else{
			$(this).find('img').attr('src','../img/middle-three.png');
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
			$('.middle-three .grade').css('margin',' -49px 0px 0px -210px');
			middle3Off = true;
			$('.small1,.small2,.small3,small4,.small5,.small6').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
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
	
	
	//初二---点击展开关闭
	var middle2Off = true;
	$('.middle-two .grade').click(function(){
		if( middle2Off ){
			$(this).find('img').attr('src','../img/middle-kong.png');
			$('.middle1,.middle2,.middle3').show();
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.middle-two  .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.middle-two  .smallSchool').css('margin','-51px 0px 0px 139px');
			middle2_smallOff = true;
			$('.middle1,.middle2,.middle3').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.middle1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.middle2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			middle2Off = false;
		}else{
			$(this).find('img').attr('src','../img/middle-twp.png');
			$('.middle1,.middle2,.middle3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middle2Off = true;
		}
	});
	
	
	//初二---小学点击展开关闭
	var middle2_smallOff = true;
	$('.middle-two .smallSchool').click(function(){
		if( middle2_smallOff ){
			$(this).find('img').attr('src','../img/smallSchool-kai.png');
			$(this).css('margin','-76px 0px 0px 139px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.middle1,.middle2,.middle3').hide();
			$('.middle-two .grade').find('img').attr('src','../img/middle-two.png');
			$('.middle-two .grade').css('margin',' -107px 0px 0px -214px');
			middle2Off = true;
			$('.small1,.small2,.small3,small4,.small5,.small6').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.small3', 1.5, { alpha: 0, y:100, scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			TweenMax.from('.small4', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.8, ease:Elastic.easeOut});
			TweenMax.from('.small5', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:1, ease:Elastic.easeOut});
			TweenMax.from('.small6', 1.5, { alpha: 0, y:-100,scaleX: 0,scaleY: 0,delay:1.2, ease:Elastic.easeOut});
			middle2_smallOff = false;
		}else{
			$(this).find('img').attr('src','../img/smallSchool.png');
			$(this).css('margin','-51px 0px 0px 139px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middle2_smallOff = true;
		}
	});
	
	
	//初一---点击展开关闭
	var middle1Off = true;
	$('.middle-one .grade').click(function(){
		if( middle1Off ){
//			$(this).find('img').attr('src','../img/middle-kong.png');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			$('.middle-one  .smallSchool').find('img').attr('src','../img/smallSchool.png');
			$('.middle-one  .smallSchool').css('margin','-73px 0px 0px 120px');
			middle1_smallOff = true;
			$('.middle1,.middle2,.middle3').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middle1Off = false;
		}else{
//			$(this).find('img').attr('src','../img/middle-one.png');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middle1Off = true;
		}
	});
	
	//初一---小学点击展开关闭
	var middle1_smallOff = true;
	$('.middle-one .smallSchool').click(function(){
		if( middle1_smallOff ){
			$(this).find('img').attr('src','../img/smallSchool-kai.png');
			$(this).css('margin','-98px 0px 0px 120px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.middle1,.middle2,.middle3').hide();
			$('.middle-one .grade').find('img').attr('src','../img/middle-one.png');
			$('.middle-one .grade').css('margin',' -57px 0px 0px -214px');
			middle1Off = true;
			$('.small1,.small2,.small3,small4,.small5,.small6').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.small3', 1.5, { alpha: 0, y:100, scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			TweenMax.from('.small4', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.8, ease:Elastic.easeOut});
			TweenMax.from('.small5', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:1, ease:Elastic.easeOut});
			TweenMax.from('.small6', 1.5, { alpha: 0, y:-100,scaleX: 0,scaleY: 0,delay:1.2, ease:Elastic.easeOut});
			middle1_smallOff = false;
		}else{
			$(this).find('img').attr('src','../img/smallSchool.png');
			$(this).css('margin','-73px 0px 0px 120px');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			middle1_smallOff = true;
		}
	});
	
	
	
	//小学6点击展开关闭
	var small6Off = true;
	$('.small-six .grade').click(function(){
		if( small6Off ){
			$(this).find('img').attr('src','../img/small-kong3.png');
			$('.small1,.small2,.small3,.small4,.small5,.small6').show();
			$('.small1,.small2,.small3,.small4,.small5,.small6').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.small3', 1.5, { alpha: 0, y:100, scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			TweenMax.from('.small4', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.8, ease:Elastic.easeOut});
			TweenMax.from('.small5', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:1, ease:Elastic.easeOut});
			TweenMax.from('.small6', 1.5, { alpha: 0, y:-100,scaleX: 0,scaleY: 0,delay:1.2, ease:Elastic.easeOut});
			small6Off = false;
		}else{
			$(this).find('img').attr('src','../img/small-six.png');
			$('.small1,.small2,.small3,.small4,.small5,.small6').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			small6Off = true;
		}
	});
	
	
	
	//小学5点击展开关闭
	var small5Off = true;
	$('.small-five .grade').click(function(){
		if( small5Off ){
			$(this).find('img').attr('src','../img/small-kong3.png');
			$('.small1,.small2,.small3,.small4,.small5').show();
			$('.small1,.small2,.small3,.small4,.small5').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, x:100, y:-10, scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.small3', 1.5, { alpha: 0, y:100, scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			TweenMax.from('.small4', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.8, ease:Elastic.easeOut});
			TweenMax.from('.small5', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:1, ease:Elastic.easeOut});
			small5Off = false;
		}else{
			$(this).find('img').attr('src','../img/small-five.png');
			$('.small1,.small2,.small3,.small4,.small5').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			small5Off = true;
		}
	});
	
	
	//小学4点击展开关闭
	var small4Off = true;
	$('.small-four .grade').click(function(){
		if( small4Off ){
			$(this).find('img').attr('src','../img/small-kong2.png');
			$('.small1,.small2,.small3,.small4').show();
			$('.small1,.small2,.small3,.small4').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100,y:-10,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, x:100,y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.small3', 1.5, { alpha: 0, x:-100,y:100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			TweenMax.from('.small4', 1.5, { alpha: 0, x:-100,y:-10,scaleX: 0,scaleY: 0,delay:0.8, ease:Elastic.easeOut});
			small4Off = false;
		}else{
			$(this).find('img').attr('src','../img/small-four.png');
			$('.small1,.small2,.small3,.small4').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			small4Off = true;
		}
	});
	
	
	//小学3点击展开关闭
	var small3Off = true;
	$('.small-three .grade').click(function(){
		if( small3Off ){
			$(this).find('img').attr('src','../img/small-kong2.png');
			$('.small1,.small2,.small3').show();
			$('.small1,.small2,.small3').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.small3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			small3Off = false;
		}else{
			$(this).find('img').attr('src','../img/small-three.png');
			$('.small1,.small2,.small3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			small3Off = true;
		}
	});
	
	//小学2点击展开关闭
	var small2Off = true;
	$('.small-two .grade').click(function(){
		if( small2Off ){
			$(this).find('img').attr('src','../img/small-kong1.png');
			$('.small1,.small2').show();
			$('.small1,.small2').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.small1', 1.5, { alpha: 0, x:100, scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.small2', 1.5, { alpha: 0, y:100, scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			small2Off = false;
		}else{
			$(this).find('img').attr('src','../img/small-two.png');
			$('.small1,.small2').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			small2Off = true;
		}
	});
	
	//小学1点击展开关闭
	var small1Off = true;
	$('.small-one .grade').click(function(){
		if( small1Off ){
//			$(this).find('img').attr('src','../img/small-kong1.png');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			small1Off = false;
		}else{
//			$(this).find('img').attr('src','../img/small-one.png');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			small1Off = true;
		}
	});
	
	
	//托班点击展开关闭
	var Child1Off = true;
	$('.Child-one .grade').click(function(){
		if( Child1Off ){
//			$(this).find('img').attr('src','../img/Child-kong.png');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			Child1Off = false;
		}else{
//			$(this).find('img').attr('src','../img/Child-one.png');
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			Child1Off = true;
		}
	});
	
	//小班点击展开关闭
	var Child2Off = true;
	$('.Child-two .grade').click(function(){
		if( Child2Off ){
			$(this).find('img').attr('src','../img/Child-kong.png');
			$('.Child1,.Child2').show();
			$('.Child1,.Child2').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.Child1', 1.5, { alpha: 0, x:100, scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.Child2', 1.5, { alpha: 0, y:100, scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			Child2Off = false;
		}else{
			$(this).find('img').attr('src','../img/Child-two.png');
			$('.Child1,.Child2').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			Child2Off = true;
		}
	});
	
	
	//中班点击展开关闭
	var Child3Off = true;
	$('.Child-three .grade').click(function(){
		if( Child3Off ){
			$(this).find('img').attr('src','../img/Child-kong.png');
			$('.Child1,.Child2,.Child3').show();
			$('.Child1,.Child2,.Child3').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.Child1', 1.5, { alpha: 0, x:100,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.Child2', 1.5, { alpha: 0, y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.Child3', 1.5, { alpha: 0, x:-100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			Child3Off = false;
		}else{
			$(this).find('img').attr('src','../img/Child-three.png');
			$('.Child1,.Child2,.Child3').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			Child3Off = true;
		}
	});
	
	
	//大点击展开关闭
	var Child4Off = true;
	$('.Child-four .grade').click(function(){
		if( Child4Off ){
			$(this).find('img').attr('src','../img/Child-kong.png');
			$('.Child1,.Child2,.Child3,.Child4').show();
			$('.Child1,.Child2,.Child3,.Child4').removeClass('guang');
			if($('.Subject').css('opacity')=='0'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			TweenMax.from('.Child1', 1.5, { alpha: 0, x:100,y:-10,scaleX: 0,scaleY: 0,delay:0.2, ease:Elastic.easeOut});
			TweenMax.from('.Child2', 1.5, { alpha: 0, x:100,y:100,scaleX: 0,scaleY: 0,delay:0.4, ease:Elastic.easeOut});
			TweenMax.from('.Child3', 1.5, { alpha: 0, x:-100,y:100,scaleX: 0,scaleY: 0,delay:0.6, ease:Elastic.easeOut});
			TweenMax.from('.Child4', 1.5, { alpha: 0, x:-100,y:-10,scaleX: 0,scaleY: 0,delay:0.8, ease:Elastic.easeOut});
			Child4Off = false;
		}else{
			$(this).find('img').attr('src','../img/Child-four.png');
			$('.Child1,.Child2,.Child3,.Child4').hide();
			if($('.Subject').css('opacity')=='1'){
				TweenMax.to('.Subject', 1, { alpha: 0,scaleX: 0,scaleY: 0, ease:Linear.easeNone});
			}
			Child4Off = true;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	//点击各年级展开左侧科目
	$('.high1,.high2,.high3,.middle1,.middle2,.middle3,.small1,.small2,.small3,.small4,.small5,.small6,.Child1,.Child2,.Child3,.Child4').click(function(){
		$(this).addClass('guang').siblings().removeClass('guang');
		if($('.Subject').css('opacity')=='0'){
			$('.Subject').show();
			TweenMax.from('.Subject', 1, { alpha: 1,scaleX: 0,scaleY:0, ease:Linear.easeNone});
			TweenMax.to('.Subject', 1, { alpha: 1,scaleX: 1,scaleY:1, ease:Linear.easeNone});
		}
	});
	$('.small-one .grade,.middle-one .grade,.high-one .grade,.Child-one .grade').click(function(){
		if($('.Subject').css('opacity')=='0'){
			$('.Subject').show();
			TweenMax.from('.Subject', 1, { alpha: 1,scaleX: 0,scaleY:0, ease:Linear.easeNone});
			TweenMax.to('.Subject', 1, { alpha: 1,scaleX: 1,scaleY:1, ease:Linear.easeNone});
		}
	});
	
	
    //初始化动画
	initPageMotion();
    function initPageMotion(){
      	//大雁
    	TweenMax.from('.bird1', 14, { alpha: 1,x: -320,y:450,scaleX: 1,scaleY: 1, delay:0.2,ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.bird2', 14, { alpha: 1,x: -320,y:450,scaleX: 1,scaleY: 1, delay:0.4, ease:Linear.easeIn,repeat:-1});
      	TweenMax.from('.bird3', 14, { alpha: 1,x: -320,y:450,scaleX: 1,scaleY: 1, delay:0.6,ease:Linear.easeIn,repeat:-1});
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
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
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
    	$('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});

    $('.Subject .pic5').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -130px 0 0 70px'});
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic6').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -130px 0 0 168px'});
    	$('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
	    	$('.lineTime').hide();
	    	$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic7').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' -32px 0 0 70px'});
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic8').on("mouseenter", function () {
	   $('.lineTime').show().css({'margin':' -32px 0 0 168px'});
    	$('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic9').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'66px 0 0 70px'});
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic10').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' 66px 0 0 168px'});
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic11').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'162px 0 0 70px'});
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic12').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':' 162px 0 0 168px'});
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
	    if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	});
    
    $('.Subject .pic13').on("mouseenter", function () {
	    $('.lineTime').show().css({'margin':'262px 0 0 70px'});
	    $('.Time-Zindex').css('z-index','0');
	}).on("mouseleave", function () {
		if(!this.state){
			$('.lineTime').hide();
			$('.Time-Zindex').css('z-index','1');
		}
	    
	});
    
    //科目点击显示时间
    $('.Subject>img').click(function(){
    	this.state = true;
    	$('.lineTime').show();
    	$('.Time-Zindex').css('z-index','0');
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
    
    //时间链页面的科目,时间,年级的显示
    $('.chain-name').text(sessionStorage.getItem('title'));
    $('.chain-time').text(sessionStorage.getItem('time'));
    $('.chain-grade').text(sessionStorage.getItem('grade'));
	
})
