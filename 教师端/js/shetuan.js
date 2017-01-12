$(function(){
    
    //社团管理左侧树点击切换改变颜色
    $(document).on("click",".shetuanname li",function(){
        $(this).addClass("xuanzhong").siblings().removeClass("xuanzhong");
    });
    
    
    
    
})