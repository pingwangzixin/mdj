
/*筛选点击效果==============================================*/
function clickChangeColor(obj){
    $(obj+' .all').on('click',function(){
		if($(this).hasClass('active')){
			$(obj+' span').removeClass('active');
		}else{
			$(obj+' span').addClass('active');
		}
		
	})
    $(obj+' span').not('.all').on('click',function(){
		$(obj+' .all').removeClass('active')
		$(this).toggleClass('active');
		if($(obj+' span').not('.all').length===$(obj+' span.active').not('.all').length){
			$(obj+' span').addClass('active');
		}
	})
}





$(function(){
    clickChangeColor('#commPersons');
    clickChangeColor('#commVideo');
    
    /*小学初中高中点击切换效果============================*/
	$('.level span').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
    
    $('.ziyuan li').each(function(i,item){
        $(item).find('.ziyuan-item .ziyuan-dl-wrap dl').last().children('dd').css('border','none');
    })
    /*投票盒子左右居中============*/
    $('.cont-body ul li').each(function(i,item){
        var w=$(item).find('p.vote_num').innerWidth()/2;
        $(item).find('p.vote_num').css('margin-left',-w+'px')
    })
})
/*筛选点击箭头变换*/
$(document).on('click','.file_up_time,.click_num',function(){
    var srcD = "../img/down.png";
    var srcUp= "../img/up.png";
    var src=$(this).children('img').attr('src');
    if(src.indexOf('down')>=0){
        $(this).children().attr('src',srcUp);
    }else if(src.indexOf('up')>=0){
        $(this).children().attr('src',srcD);
    }
})

/*时间插件禁止输入*/
$(document).on('keyup','#time',function(){
    $(this).val('');
})


myBrowser();
function myBrowser(){
    var userAgent = navigator.userAgent; 
    var w=$(window).width();
 
    if (userAgent.indexOf("Firefox") > -1) {
    	if(w>=1320){
    		$('.commSource_select').css('width','65%');
    	}else{
    		$('.commSource_select').css('width','47%');
    	}
    	
    } 
}


leftTreeClick();
closeLeftTree();
/*兼容ipad点击============================*/
function leftTreeClick() {
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		$('.ziyuan li').each(function(i,item){
			$(item).on('touchend',function(){
				$(this).addClass('active').css('background','#3D7BC3');
				$(this).siblings('li').removeClass('active').css('background','none');
			})
		})
	}else{
		$('.ziyuan li').on('mouseover',function(){
			$(this).addClass('active').css('background','#3D7BC3');
		});
		$('.ziyuan li').on('mouseout',function(){
			$(this).removeClass('active').css('background','none');
		});
	}
}

function closeLeftTree(){
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		$(document).on('click','.ziyuan-item dt span,.ziyuan-item dd span',function(){
			$('.ziyuan li').removeClass('active').css('background','none');
		})
		
	}
}