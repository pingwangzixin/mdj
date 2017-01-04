$(document).on('click','.subjectsWrap span,.nianjiWrapIn span',function(){
    
    $(this).addClass('cur').siblings().removeClass('cur');
})
$(function(){
    $('.testListWrap li:last-child').css('border','0 none');
})
/*查看科目页面==============================================================*/
$('.testDetail_ichartTits li').on('click',function(){
    var num=$(this).index();
    $(this).addClass('cur').siblings('li').removeClass('cur');
    $('.notesWrap').eq(num).show().siblings('.notesWrap').hide();
})
/*全科选项卡点击=====================================================*/
$(document).on('click','.subsAllIchart .ichartTits li',function(){
    var num=$(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.ichartWrap .notesWrap').eq(num).show().siblings('.notesWrap').hide();
})
/*单科选项卡点击=====================================================*/
$(document).on('click','.subsSingleIchart .ichartTits li',function(){
    var num=$(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.notesWrap').eq(num).show().siblings('.notesWrap').hide();
})
$(function(){
    function scrollBar(){
        var w=$(window).outerWidth(true);
        if(w>=1183){
            $('body').css('overflow-x','hidden');
        }else{
            $('body').css('overflow-x','auto');
        }
    }
    scrollBar();
    $(window).resize(scrollBar);
})

