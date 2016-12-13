$(function (){
	
	//选择学期、考试、年级、班级  当前状态
	$(document).on('click','.j_radio ul li',function (){
		$(this).addClass('active').siblings('li').removeClass('active');
	});
	
	//模拟禁止点击遮盖层 
	$(document).on('click','.text11 ul li',function (){
		$(".tests").show();
		setTimeout(function(){
			$(".tests").hide();
		},2000)
	});

	//上传文件名称
	$(document).on("change",".File",function(){
		var t = $(this).val().replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1");
		$('.sFile').text(t);
	});
	
	
	//确认上传按钮
	$(document).on('click','.confirm',function (){
		$('.bomb').show();
		$('.sFile').text('');
	});
	
	
	//班级对应学科显示
	var arr=[
		['全科','语文','数学','英语','地理','历史'],
		['全科','体育','化学','生物','计算机'],
		['全科','美术','音乐','书法']
	];
	var initLen = arr[0].length;
	var initStr = ''
	$('.subjects ul').html('');
	for(var i = 0; i<initLen;i++){
		initStr = '<li> '+ arr[0][i] +'</li>';
		$('.subjects ul').append(initStr);
	}
	$('.subjects ul li').first().addClass('active');
		
	$(document).on('click','.class ul li',function (){
		$('.subjects ul').html('');
		var _index=$(this).index();
		var str= '';
		var len = arr[_index].length;
		for(var i = 0; i<len;i++){
			str = '<li> '+ arr[_index][i] +'</li>';
			$('.subjects ul').append(str);
		}
		$('.subjects ul li').first().addClass('active');
	});	
});
