$(function() {
	//模拟数据
	$('html').css('height',window.innerHeight)
	var res = [{
		"grade": ["一年级", "二年级", "三年级", "四年级"],
		"gradeId":[1,2,3,4,5,6,7,8]
	}, {
		"unit": ["第一单元  诗", "第二单元 词", "第三单元 歌", "第四单元 赋1", "第五单元 阅读理解", "第六单元 诗词", "第七单元 完形填空"]
	}, {
		"bar": ["1 爱的撒旦", "2 伟大", "3 完形填空", "4 按时大多数撒的", "1 爱的撒旦", "2 伟大", "3 完形填空", "4 按时大多数撒的", "1 爱的撒旦", "2 伟大", "3 完形填空", "4 按时大多数撒的", "1 爱的撒旦", "2 伟大", "3 完形填空", "4 按时大多数撒的"]
	}, {
		"subject": ["语语文上语文上文上", "数学上", "英语上", "语文语文上上", "语文上", "数语语文上语文上文上学上", "英", "语文上", "语文上", "数学上", "英语文上语文上语上", "语文语文上上", "数学上数学上", "英语上", "语文上", "数学上", "英语上", "语文上", "数学上", "英语语文上语文上上", "语文语文上上", "数学上", "英语语文上上", "语文上", "数学上", "英语上", "语文上", "数学上", "英语上"]
	}];
	//文本框失去焦点 给body添加属性
	$('input,textarea').not('input[readonly]').blur(function() {$('body').attr('isb',1);});
	$('.upload_choose').on('click', 'input', function() {
		//下半部分文本框被点击时触发的事件
			if(Number($('body').attr('isb'))) {
				$('body').attr('isb',0)
				return false
			};
			switch($(this).prop('name')) {
				//点击年级
				case 'grade':
					$('.upload_popup').css('display', 'block');
					$('#grade').css('display', 'block').siblings().not('.hide').css('display', 'none');
					var html = '<ul class="clearfix">';
					for(var i = 0; i < res[0].grade.length; i++) {
						html += '<li gradeId='+res[0].gradeId[i]+'>' + res[0].grade[i] + '</li>'
					}
					html += '</ul>';
					$('#grade').html(html);
					var gradeId = $(this).attr('gradeId');
//					$.each($('#grade li'), function(e, v) {
//						if(val == v.innerHTML) {
//							$(this).addClass('active');
//						}
//					});
					$('li[gradeId='+gradeId+']').addClass('active');
					var $that = $(this)
					$('#grade li').on('click', function() {
						$('input[name=grade]').attr('gradeId',$(this).attr('gradeId'))
						var str = $(this).text();
						$('input[name="grade"]').val(str);
						$('.hide').trigger('click');
						$that.parent().parent().nextAll().not('div:last-of-type').find('input').val('')
					});
					break;
				case 'subject':
				//点击学科
					if(!$('input[name=grade]').val()) {
						return false
					}
					$('.upload_popup').css('display', 'block');
					$('#subject').css('display', 'block').siblings().not('.hide').css('display', 'none');
					var html = '<ul class="clearfix">';
					for(var i = 0; i < res[3].subject.length; i++) {
						html += '<li>' + res[3].subject[i] + '</li>'
					}
					html += '</ul>';
					$('#subject').html(html);
					var $that = $(this)
					var val = $(this).val();
					$.each($('#subject li'), function(e, v) {
						if(val == v.innerHTML) {
							$(this).addClass('active');
						}
					});
					$('#subject li').on('click', function() {
						var str = $(this).text();
						$('input[name="subject"]').val(str);
						$('.hide').trigger('click');
						$that.parent().parent().nextAll().not('div:last-of-type').find('input').val('')
					});
					break;
				case 'unit':
				//点击单元
					if(!$('input[name=subject]').val()) {
						return false
					}
					$('.upload_popup').css('display', 'block');
					$('#foot_unit').css('display', 'block').siblings().not('.hide').css('display', 'none');
					var html = '<ul class="clearfix">';
					for(var i = 0; i < res[1].unit.length; i++) {
						html += '<li>' + res[1].unit[i] + '</li>'
					}
					html += '</ul>';
					$('#foot_unit').html(html);
					var $that = $(this)
					var val = $(this).val();
					$.each($('#foot_unit li'), function(e, v) {
						if(val == v.innerHTML) {
							$(this).addClass('active');
						}
					});
					$('#foot_unit li').on('click', function() {
						var str = $(this).text();
						$('input[name="unit"]').val(str);
						$('.hide').trigger('click')
						$that.parent().parent().nextAll().not('div:last-of-type').find('input').val('')
					});
					break;
				case 'node':
				//点击章节
					if(!$('input[name=unit]').val()) {
						return false
					}
					$('.upload_popup').css('display', 'block');
					$('#foot_node').css('display', 'block').siblings().not('.hide').css('display', 'none');
					var html = '<ul class="clearfix">';
					for(var i = 0; i < res[2].bar.length; i++) {
						html += '<li>' + res[2].bar[i] + '</li>'
					}
					html += '</ul>';
					$('#foot_node').html(html);
					var val = $(this).val();
					$.each($('#foot_node li'), function(e, v) {
						if(val == v.innerHTML) {
							$(this).addClass('active');
						}
					});
					$('#foot_node li').on('click', function() {
						var str = $(this).text();
						$('input[name="node"]').val(str);
						$('.hide').trigger('click')
					});
					break;
					
			}
				
		})
		//点击遮罩隐藏弹窗
	$('.hide').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		$('.upload_popup').css('display', 'none');
		if(Number($('body').attr('isb'))) {
			$('body').attr('isb',0)
		};
//		$('.wrapMain').css('height','auto')
	});
	
//	String.prototype.trim=function(){
//	　　   return this.replace(/(^\s*)|(\s*$)/g, "");
//	}
	//文件上传对其内文本做判断
	function uploadFile() {
//		$('.upload_del').show().siblings().not('.hide').hide();
		for(var i=0; i<$('input[type=text],textarea').length; i++){
			if($('input[type=text],textarea')[i].value.trim()=='') {
				$('.message').attr('isa',false).show().siblings().not('.hide').hide();
				setTimeout(function() {
					$('.upload_popup').hide();
				},1000)
				break;
			}else{
				$('.message').attr('isa',true);
			}
		}
	}
	//点击删除文件图标
	$('.showfile img').on('click', function() {
		$('.upload_popup').css('display', 'block');
		$('.upload_del').css('display', 'block').siblings().not('.hide').css('display', 'none');
		$('.upload_del').find('p').text('确认删除选中资源?');
	});
	//点击确认按钮
	$('#popup_sure').on('click', function() {
		switch($(this).prev().html()) {
			case '确认删除选中资源?':
				$('.initfile').show().siblings().hide();
//				$('.initfile input[type=file]').val('');
				$('.hide').trigger('click');
				$('#upload_sure').css({'background':'#ebebeb','color':'#686767'});
				document.getElementById('upload_sure').onclick = null; 
				break;
			case '确认提交此次微课?':
				uploadFile();
				if($('.message').attr('isa')=='false') {
					$('.upload_popup').show();
					return false;
				}
				$('.uploadEnd').text('上传成功！').show().siblings().not('.hide').css('display', 'none');
				setTimeout(function() { 
					window.location.href='http://www.baidu.com'
				},1000)
				break;
		}
	});
	
	//点击取消按钮
	$('#popup_cancel').on('click', function() {
		$('.upload_popup').css('display', 'none');
	});
	//点击body后
	$('body,html').on('click',function() {$('body').attr('isb',0)});
	$('.foot_unit').on('scroll',function() {
		console.log($(this).scrollTop());
		
	})
	$('.change_dom').on('click','span',function() {
		$(this).addClass('active').siblings().removeClass('active')
	})
})
//调用相册
function uploadPic() {
	android.uploadPic();
}
//点击底部的确认上传 
	function uploadSure() {
		$('.upload_popup').show();
		$('.upload_del').show().siblings().not('.hide').hide();
		$('.upload_del').find('p').text('确认提交此次微课?');
	}
	//上传成功之后调用
	function getTitle(fileName) {
		var oFile = document.getElementById('fileName');
		if(navigator.userAgent.indexOf('iPhone')>-1) {
			var title = '';
			for(var i=0;i<fileName.length; i++) {
				title+=fileName[i]
			}
			oFile.innerHTML = title
		}else{
			oFile.innerHTML = fileName
		}
		document.getElementById('initfile').style.display = 'none';
		document.getElementById('showfile').style.display = 'block';
		var oUpload = document.getElementById('upload_sure');
		oUpload.style.background = '#24bfff';
		oUpload.style.color = 'white';
		oUpload.onclick = uploadSure
	}
