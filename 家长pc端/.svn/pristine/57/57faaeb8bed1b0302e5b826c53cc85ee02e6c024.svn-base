
/*筛选点击效果==============================================*/
function clickChangeColor(obj){
    $(document).on('click',obj+'>span',function(){
         $(this).addClass('active').siblings('span').removeClass('active');
    })
}


$(function(){
    clickChangeColor('#commPersons');
    clickChangeColor('#commVideo');

    /*去除左导航dd下边框=======================*/
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
	

/*控制发表内容的高度=================*/
$(function(){
    function textareHeight(){
        var h=$(window).height()-345;
        $('.messageBox>ul').css('max-height',h+'px');
    }
    textareHeight();
    $(window).resize(textareHeight);
})

$(document).on('click','.collection',function(){
	$('.xiafaSuccess,.zhezhao').show();
	setTimeout(hide,1500);
	function hide(){
		$('.xiafaSuccess,.zhezhao').hide();
	}
})



