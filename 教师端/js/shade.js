function shdeNote() {
	var UserAgent = navigator.userAgent.toLowerCase();
	 alert(UserAgent);
	if(UserAgent.indexOf('chrome')<=-1 && UserAgent.indexOf('firefox')<=-1){
	    var html = '<div class="del_down " style="display: block"><div class="hide"></div> <div class="con shade"><div class="sahdeHead clearfix"><span>提示</span><img src="../img/task_close.png" class="closeShade"/></div><div class="shadeWarn"><img src="../img/warn.png"/><p>为了更好地展现页面效果</p><p>建议您下载使用<a href="##" class="browserLink">火狐 /谷歌</a>浏览器查看。</p></div></div></div><div class="topNote clearfix" style="display: none;"><span>建议您下载使用 <a href="##">火狐 /谷歌</a> 浏览器查看</span><p><img src="../img/36.png"/><img src="../img/x.png" class="closeNote"/></p></div>';
	    $('body').append(html);
	    html='';
	    $('.closeShade,.browserLink').on('click',function() {
	    	$('.del_down').hide().siblings('.topNote').show();
	    })
	    $('.closeNote').click(function() {
	    	$('.topNote').hide()
	    })
	   
	}
}
shdeNote();
