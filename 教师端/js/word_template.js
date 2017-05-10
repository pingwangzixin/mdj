$(document).ready(function (){
	
	//插件medium-editor
	function MediumButton(options) {
        if (options.label === undefined || !/\S{1}/.test(options.label) ||
            options.start === undefined || !/\S{1}/.test(options.start) ||
            options.end === undefined || !/\S{1}/.test(options.end)) {

            if (options.label === undefined || !/\S{1}/.test(options.label) ||
                options.action === undefined || !/\S{1}/.test(options.action)) {
                console.error('[Custom-Button] You need to specify "label", "start" and "end" OR "label" and "action"')
                return
            }
        }
        options.start = (options.start === undefined) ? '' : options.start;
        options.end = (options.end === undefined) ? '' : options.end;
        options.checkType = (options.checkType === undefined) ? false : options.checkType;
        var self = this;
        this.options = options;
        this.button = document.createElement('button');
//      this.button.setAttribute('data-QType',options.type);
//      this.button.className = 'medium-editor-action task';
        this.button.innerHTML = options.label;
        
//      $('.medium-editor-button-last').parent('li').append('<p>pppp</p>')
		function YsetClass(obj,sClass){
			setTimeout(function(){
				obj.button.parentNode.className = sClass;
			}.bind(obj),0);
		}
		//添加类名
		if(options.label == '题干'){
			YsetClass(this,'Ystem_btn');
		}else if(options.label == '选项'){
			YsetClass(this,'Yoption_btn');
		}else if(options.label == '答案'){
			YsetClass(this,'Yanswer_btn');
		}else if(options.label == '解析'){
			YsetClass(this,'Yanalysis_btn');
		}else if(options.label == '单选'){
			YsetClass(this,'Ytypes Ytype_radio active');
		}else if(options.label == '多选'){
			YsetClass(this,'Ytypes Ytype_check');
		}else if(options.label == '判断'){
			YsetClass(this,'Ytypes Ytype_judge');
		}else if(options.label == '填空'){
			YsetClass(this,'Ytypes Ytype_fill');
		}else if(options.label == '材料'){
			YsetClass(this,'Ytypes Ytype_material');
		}else if(options.label == '简答'){
			YsetClass(this,'Ytypes Ytype_simple');
		}else if(options.label == '完形填空'){
			YsetClass(this,'Ytypes Ytype_gestalt');
		}else if(options.label == '阅读理解'){
			YsetClass(this,'Ytypes Ytype_read');
		}else if(options.label == 'A'){
			YsetClass(this,'Yopts YoptsA');
		}else if(options.label == 'B'){
			YsetClass(this,'Yopts YoptsB');
		}else if(options.label == 'C'){
			YsetClass(this,'Yopts YoptsC');
		}else if(options.label == 'D'){
			YsetClass(this,'Yopts YoptsD');
		}
        
        this.button.onclick = function () {
            // get current selectet text
            var html = getCurrentSelection();
            var sel = window.getSelection();
            var parent = sel.anchorNode.parentElement;
//          console.log(sel.anchorNode.parentElement)
            
            // modify content
            //var mark = true;
            if (options.start === undefined || html.indexOf(options.start) == -1 && html.indexOf(options.end) == -1) {
                if (options.action != undefined) html = options.action(html, true, parent);
                html = options.start + html + options.end
            } else { // clean old
                if (options.action != undefined) html = options.action(html, false, parent);
//                  html = String(html).split(options.start).join('');
//                  html = String(html).split(options.end).join('');
            }
            var range;
            var fragment;
            //Set new Content
            if (sel.getRangeAt && sel.rangeCount) {

                range = window.getSelection().getRangeAt(0);
                range.deleteContents();
				
                if (range.createContextualFragment) fragment = range.createContextualFragment(html);
                else {
                    var div = document.createElement('div');

                    div.innerHTML = html;
                    fragment = document.createDocumentFragment();
                    var child;
                    while ((child = div.firstChild))
                        fragment.appendChild(child)
                }
//              console.log(fragment.lastChild)
                var firstInsertedNode = fragment.firstChild;
                var lastInsertedNode = fragment.lastChild;
                range.insertNode(fragment);
                if (firstInsertedNode) {
                    range.setStartBefore(firstInsertedNode);
                    range.setEndAfter(lastInsertedNode)
                }
                sel.removeAllRanges();
                sel.addRange(range)
            }
            self.base.checkContentChanged();
        };
//      $compile(this.button);
    };
    MediumButton.prototype.getButton = function () {
        return this.button;
    };
    MediumButton.prototype.checkState = function () {
        var html = getCurrentSelection();
        if (this.options.start != '' && html.indexOf(this.options.start) > -1 && html.indexOf(this.options.end) > -1) {
            this.button.classList.add('medium-editor-button-active')
        } else {
            this.button.classList.remove('medium-editor-button-active')
        }
    };
	function getCurrentSelection() {
        var html = '';
        var sel;

        if (typeof window.getSelection != 'undefined') {
            sel = window.getSelection();
            if (sel.rangeCount) {
                var container = document.createElement('div');
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    container.appendChild(sel.getRangeAt(i).cloneContents())
                }
                html = container.innerHTML;
            }
        } else if (typeof document.selection != 'undefined') {
            if (document.selection.type == 'Text') {
                html = document.selection.createRange().htmlText;
            }
        }
        return html;
    };

    var editor = new MediumEditor('.Yimport_text', {
        toolbar: {
            buttons: [
                'QTitle', 'QOptions', 'QAnswer', 'QAnalysis',	//题干选项答案解析
                'QOptA','QOptB','QOptC','QOptD',	//abcd选项
                'QRadio', 'QCheck', 'QQudge', 'QFill', 'QMaterial', 'QSimple', 'QGestalt', 'QRead'	//题型
//              'multiChoice', 'trueFalse', 'long_answer',
                //'fill_blank'
            ]
        },
        extensions: {
            'QTitle': new MediumButton({
                label: '题干',
                action: function (html) {
                	console.log(html)
//                  $scope.questions.set_question_title('<span class="question_global">' + html + '</span>');
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QOptions': new MediumButton({
                label: '选项',
                action: function (html) {
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QAnswer': new MediumButton({
                label: '答案',
                action: function (html) {
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QAnalysis': new MediumButton({
                label: '解析',
                action: function (html) {
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QRadio': new MediumButton({
                label: '单选',
                checkType : 'true',
//              type : 'QBlack',
                action: function (html) {
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QCheck': new MediumButton({
                label: '多选',
                checkType : 'true',
//              type : 'QBlack',
                action: function (html) {
                	
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QQudge': new MediumButton({
                label: '判断',
                checkType : 'true',
                action: function (html) {
                	
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
           'QFill': new MediumButton({
                label: '填空',
                checkType : 'true',
                action: function (html) {
                	
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
             'QMaterial': new MediumButton({
                label: '材料',
                checkType : 'true',
                action: function (html) {
                	
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QSimple': new MediumButton({
                label: '简答',
                checkType : 'true',
                action: function (html) {
                	
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QGestalt': new MediumButton({
                label: '完形填空',
                checkType : 'true',
                action: function (html) {
                	
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QRead': new MediumButton({
                label: '阅读理解',
                checkType : 'true',
                action: function (html) {
                	
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QOptA': new MediumButton({
                label: 'A',
                checkType : 'true',
                action: function (html) {
                	return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QOptB': new MediumButton({
                label: 'B',
                checkType : 'true',
                action: function (html) {
                	return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QOptC': new MediumButton({
                label: 'C',
                checkType : 'true',
                action: function (html) {
                	return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'QOptD': new MediumButton({
                label: 'D',
                checkType : 'true',
                action: function (html) {
                	return '<span class="question_grey">' + html + '</span>';
                }
            }),
            /*'multiChoice': new MediumButton({
                label: $filter('translate')('multichoice'),
                checkType : 'true',
                type : 'multichoice',
                action: function (html) {
                    if($scope.update_index != 0){
                        toolkit.showToast($filter('translate')("update status can't update questions type"),'f');
                        return html;
                    }
                    $('.QTypeActive').css('display','block');
                    $scope.questions.setCurrentType('multichoice',true);
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'fill_blank': new MediumButton({
                label: $filter('translate')('fill_blank'),
                checkType : 'true',
                type : 'fill_blank',
                action: function (html) {
                    if($scope.update_index != 0){
                        toolkit.showToast($filter('translate')("update status can't update questions type"),'f');
                        return html;
                    }
                    $('.QTypeActive').css('display','block');
                    $scope.questions.setCurrentType('fill_blank',true);
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'trueFalse': new MediumButton({
                label: $filter('translate')('truefalse'),
                type : 'truefalse',
                checkType : 'true',
                action: function (html) {
                    if($scope.update_index != 0){
                        toolkit.showToast($filter('translate')("update status can't update questions type"),'f');
                        return html;
                    }
                    $('.QTypeActive').css('display','block');
                    $scope.questions.setCurrentType('truefalse',true);
                    return '<span class="question_grey">' + html + '</span>';
                }
            }),
            'long_answer': new MediumButton({
                label: $filter('translate')('long_answer'),
                type : 'long_answer',
                checkType : 'true',
                action: function (html) {
                    if($scope.update_index != 0){
                        toolkit.showToast($filter('translate')("update status can't update questions type"),'f');
                        return html;
                    }
                    $('.QTypeActive').css('display','block');
                    $scope.questions.setCurrentType('long_answer',true);
                    return '<span class="question_grey">' + html + '</span>';
                }
            })*/
        }
    });
 
 	//左侧可操作编辑区域添加父级class
	$('#medium-editor-toolbar-1').addClass('Ymove');
	
	//左右高度
	$('.Ymain_left,.Ymain_right').css('height',$(window).height() - 115 + 'px');
	$(window).resize('.Ymain_left,.Ymain_right',function (){
		$('.Ymain_left,.Ymain_right').css('height',$(window).height() - 115 + 'px');
	});
	
	//创建试题 题型选择
	$('.Ymove').on('click','.Ytypes',function (ev){
		ev.stopPropagation();
		if($(this).is('.Ytypes:first')){
			$(this).nextAll().toggle();
		}else{
			$(this).show().insertBefore('.Ytypes:first').addClass('active').siblings('.Ytypes').hide().removeClass('active');
		}
		$('.Yopts').hide();
	});
	//创建题干
	var YstemGroup = {
		//单选
		YCreatRadio : '<div class="Ytype Yradio_topic"><ul><li class="Ystem"><em class="Yorder">1</em><p> </p><div class="Yeditor Yedit_stem" onselectstart="return false" id=""></div></li><li class="Yoption"><em>选项</em><ol><li><b>A：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li><li><b>B：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li><li><b>C：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li><li><b>D：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li></ol></li><li class="Yanswer"><em>答案</em><p><span><input type="radio" name="Yradio" id="" value="" disabled /><label for="">A</label></span><span><input type="radio" name="Yradio" id="" value="" disabled /><label for="">B</label></span><span><input type="radio" name="Yradio" id="" value="" disabled /><label for="">C</label></span><span><input type="radio" name="Yradio" id="" value="" disabled /><label for="">D</label></span></p></li><li class="Yanalysis"><em>解析</em><p> </p><div class="Yeditor Yedit_Yanalysis" onselectstart="return false" id=""></div></li></ul><span class="Ymore_operation"><img src="../img/Yedit.png" class="Yedit_img"/><img src="../img/Ydelete.png" class="Ydelete_img"/></span><strong class="Yedit_over">结束编辑</strong></div>',
		//多选
		YCreatCheck : '<div class="Ytype"><ul><li class="Ystem"><em class="Yorder">1</em><p> </p><div class="Yeditor Yedit_stem" onselectstart="return false" id=""></div></li><li class="Yoption"><em>选项</em><ol><li><b>A：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li><li><b>B：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li><li><b>C：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li><li><b>D：</b><p> </p><div class="Yeditor Yedit_option" onselectstart="return false" id=""></div></li></ol></li><li class="Yanswer"><em>答案</em><p><span><input type="checkbox" name="Yradio" id="" value="" disabled /><label for="">A</label></span><span><input type="checkbox" name="Yradio" id="" value="" disabled /><label for="">B</label></span><span><input type="checkbox" name="Yradio" id="" value="" disabled /><label for="">C</label></span><span><input type="checkbox" name="Yradio" id="" value="" disabled /><label for="">D</label></span></p></li><li class="Yanalysis"><em>解析</em><p> </p><div class="Yeditor Yedit_Yanalysis" onselectstart="return false" id=""></div></li></ul><span class="Ymore_operation"><img src="../img/Yedit.png" class="Yedit_img"/><img src="../img/Ydelete.png" class="Ydelete_img"/></span><strong class="Yedit_over">结束编辑</strong></div>',
		YCreateJudge : ''
	};
	$('.Ymove').on('click','.Ystem_btn',function (e){
		var Ytxt = $(getCurrentSelection()).text();
		var Yhtml = $('.Ytypes:first button').text();
		if(! $('.Ytype').hasClass('active')){
//			$('.Ytest_cases_scoll').
			$('.Ytype').find('.Yorder').removeClass('active');
		}
		
		console.log(Yhtml)
		switch (Yhtml){
			//单选Ytype_radio
			case '单选':
				if( ! $('.Yradio .Ytype').length){
					$('.Yradio').parent('.Yborder').show();
					$('.Yradio').find('.Yheadline').show();
				}
				if(! $('.Yradio .Ytype').hasClass('active')){
					$('.Yradio').append(YstemGroup.YCreatRadio);
//					$('.Ytype').find('.Yorder').removeClass('active');
					$('.Yradio .Ytype').last().find('.Yorder').addClass('active');
					/*$('.Ytype').each(function (i,ele){
						$(this).find('.Yorder').text(i + 1);
					});*/
//					$('.Yradio .Ytype .Yorder.active + p').text(Ytxt);
				}else{
//					$('.Yradio .Ytype.active .Yorder.active+p').text(Ytxt);
				}
				
				$('.Yradio .Yanswer').find('p').each(function (index,ele){
					$(this).find('input').attr('name','Yopt_radio' + index);
				});
				
				$('.Yradio .Yanswer').find('input[type=radio]').each(function (index,ele){
					$(this).attr('id',$(this).attr('type') + index);
					$(this).next('label').attr('for',$(this).attr('id'));
				});
				
//				$('.Yorder').parent().siblings('.Yanswer').find('input').attr('disabled',true);
//				$('.Yorder.active').parent().siblings('.Yanswer').find('input').attr('disabled',false);
				/*$('.Yeditor').each(function (index,ele){
					$(this).attr('id','Ytype_radio' + index);
					UE.getEditor($(this).attr('id'));
				});*/
				
				break;
			//多选Ytype_check
			case '多选':
				console.log('多攒')
				if( ! $('.Ycheck .Ytype').length){
					$('.Ycheck').parent('.Yborder').show();
					$('.Ycheck').find('.Yheadline').show();
				}
				if(! $('.Ycheck .Ytype').hasClass('active')){
					$('.Ycheck').append(YstemGroup.YCreatCheck);
//					$('.Ytype').find('.Yorder').removeClass('active');
					$('.Ycheck .Ytype').last().find('.Yorder').addClass('active');
					/*$('.Ytype').each(function (i,ele){
						$(this).find('.Yorder').text(i + 1);
					});*/
				}
				
				$('.Ycheck .Yanswer').find('p').each(function (index,ele){
					$(this).find('input').attr('name','Yopt_check' + index);
				});
				
				$('.Ycheck .Yanswer').find('input[type=checkbox]').each(function (index,ele){
					$(this).attr('id',$(this).attr('type') + index);
					$(this).next('label').attr('for',$(this).attr('id'));
				});
				
				
				
				break;
			//简答Ytype_simple
			case '简答':
				
				break;
			default:
				
				break;
		}
		//是否是编辑状态下的标题
		if(! $('.Ytype').hasClass('active')){
			$('.Ytype .Yorder.active + p').text(Ytxt);
		}else{
			$('.Ytype.active .Yorder.active+p').text(Ytxt);
		}
		
		
		//题号
		$('.Ytype').each(function (i,ele){
			console.log($(this))
			$(this).find('.Yorder').text(i + 1);
		});
		
		//题号active下  input单选多选可选择
		$('.Yorder').parent().siblings('.Yanswer').find('input').attr('disabled',true);
		$('.Yorder.active').parent().siblings('.Yanswer').find('input').attr('disabled',false);
		
		//编辑器生成调用
		$('.Yeditor').each(function (index,ele){
			$(this).attr('id','Yeditor' + index);
			UE.getEditor($(this).attr('id'));
		});
		
		//提交按钮
		if($('.Ytype').length > 0){
			$('.Ysave').css('visibility','initial');
		}
	});
	
	//操作错误提示弹框
	function YtipsBox(str){
		$('.Ytips_box').show().find('.Ytext').text(str);
		setTimeout(function (){
			$('.Ytips_box').hide();
		},2000);
	}
	
	//创建试题 单选选项选择
	$('.Ymove').on('click','.Yoption_btn',function (ev){
		ev.stopPropagation();
		if( ! $('.Yorder').hasClass('active')){
			$(this).children('span').hide();
			YtipsBox('还没有添加题干');
		}else{
			$(this).siblings('.Yopts').toggle();
		}
		$('.Ytypes').not(':first').hide();
		$('.Yorder').parent().siblings('.Yanswer').find('input').attr('disabled',true);
		$('.Yorder.active').parent().siblings('.Yanswer').find('input').attr('disabled',false);
		
	});
	
	//单选ABCD选项添加
	$('.Ymove').on('click','.Yopts',function (){
		var Ytxt = $(getCurrentSelection()).text();
		var Ychoose = $(this).children('button').text();
		console.log(Ytxt)
		$('.Yorder.active').parent().siblings('.Yoption').find('ol li b').each(function (i,ele){
			if($(this).text().substring(0,1) == Ychoose){
				$(this).siblings('p').text(Ytxt);
			}
		});
		$('.Yopts').hide();
		$('.Yorder').parent().siblings('.Yanswer').find('input').attr('disabled',true);
		$('.Yorder.active').parent().siblings('.Yanswer').find('input').attr('disabled',false);
	});
	
	//单选答案
	$('.Ymove').on('click','.Yanswer_btn',function (){
		if( ! $('.Yorder').hasClass('active')){
			YtipsBox('还没有添加题干');
		}else{
			YtipsBox('单选答案请在右侧编辑试题选择');
			$('.Yorder').parent().siblings('.Yanswer').find('input').attr('disabled',true);
			$('.Yorder.active').parent().siblings('.Yanswer').find('input').attr('disabled',false);
		}
	});
	
	//单选解析
	$('.Ymove').on('click','.Yanalysis_btn',function (){
		var Ytxt = $(getCurrentSelection()).text();
		if( ! $('.Yorder').hasClass('active')){
			YtipsBox('还没有添加题干');
		}else{
			$('.Yorder.active').parent().siblings('.Yanalysis').find('p').text(Ytxt);
		}
		$('.Yorder').parent().siblings('.Yanswer').find('input').attr('disabled',true);
		$('.Yorder.active').parent().siblings('.Yanswer').find('input').attr('disabled',false);
	});
	
	
	//页面其它位置 题型选择收回
	$(document).on('click',function (){
		$('.Ytypes').not(':first').hide();
	});
	
	//页面其它位置 答案选项选择收回
	$(document).on('click',function (){
		$('.Yopts ').hide();
	});
	
	$(document).on('click',function (e){
//					console.log(e.target.parentNode)
		/*if(e.target.parentNode.parentNode.parentNode.className!='Ymove'&&e.target.parentNode.parentNode.className!='Yoption_btn'){
//						$('.Ymove').hide();
					}*/
	});
	
	
	
	
	//重新导入word
	$('.Ytit').on('click','.Yre_import',function (){
		$('.import_bombB').show();
	});
	//重新导入word关闭
	$('.import_bombB').on('click','.import_close,.import_btn span:last-child',function (){
		$('.import_bombB').hide();
	});
	
	//帮助教程
	//打开教程弹窗
	$('.Ytit').on('click','.Yuse_tutorial',function (){
		$('.Yuse_tutorial_box').show();
	});
	//关闭教程弹框
	var YmainPic = $('.Yuse_main_pic');
	$('.Yuse_tutorial_box').on('click','.Yuse_close',function (){
		$('.Yuse_tutorial_box').hide();
		YmainPic.attr('src','../img/Ystep1.png').siblings('.Yuse_prev').hide().siblings('.Yuse_next').show().css({'top':'560px','right':'70px'});
	});
	//下一步
	$('.Yuse_tutorial_box').on('click','.Yuse_next',function (){
		if(YmainPic.attr('src').indexOf('Ystep1') != -1){
			YmainPic.attr('src','../img/Ystep2.png').siblings('.Yuse_next').css({'top':'520px','right':'266px'}).siblings('.Yuse_prev').css({'top':'520px'});
		}else{
			YmainPic.attr('src','../img/Ystep3.png').siblings('.Yuse_next').hide().siblings('.Yuse_prev').css({'top':'546px','left':'168px'});
		}
		$('.Yuse_prev').show();
	});
	//上一步
	$('.Yuse_tutorial_box').on('click','.Yuse_prev',function (){
		if(YmainPic.attr('src').indexOf('Ystep3') != -1){
			YmainPic.attr('src','../img/Ystep2.png').siblings('.Yuse_next').show().css({'top':'520px','right':'266px'}).siblings('.Yuse_prev').css({'top':'520px'});
		}else{
			YmainPic.attr('src','../img/Ystep1.png').siblings('.Yuse_prev').hide().siblings('.Yuse_next').css({'top':'560px','right':'70px'});
		}
	});
	//帮助教程
	
	
	//右侧试题双击可编辑
	$('.Ytest_cases').on('dblclick','.Ytype',function (){
		$(this).parents('.Ytest_cases').find('.Ytype').removeClass('active').find('.Yedit_over').hide();
		$(this).parents('.Ytest_cases').find('input[type=radio]').attr('disabled',true);
		$(this).parents('.Ytest_cases').find('ul li').not('.Yanswer').children('p').show().siblings('.Yeditor').hide();
		$('.Yorder').removeClass('active');
		$(this).addClass('active').find('.Yedit_over').show();
		$(this).find('input[type=radio]').attr('disabled',false);
		$(this).find('ul li').not('.Yanswer').children('p').hide().siblings('.Yeditor').show();
		$(this).find('.Yorder').addClass('active');
	});
	//右侧试题点击编辑图标可编辑
	$('.Ytest_cases').on('click','.Yedit_img',function (){
		$(this).parents('.Ytest_cases').find('.Ytype').removeClass('active').find('.Yedit_over').hide();
		$(this).parents('.Ytest_cases').find('input[type=radio]').attr('disabled',true);
		$(this).parents('.Ytest_cases').find('ul li').not('.Yanswer').children('p').show().siblings('.Yeditor').hide();
		$('.Yorder').removeClass('active');
		$(this).parents('.Ytype').addClass('active').find('.Yedit_over').show();
		$(this).parents('.Ytype').find('input').attr('disabled',false);
		$(this).parents('.Ytype').find('ul li').not('.Yanswer').children('p').hide().siblings('.Yeditor').show();
		$(this).parents('.Ytype').find('.Yorder').addClass('active');
	});
	//右侧试题点击结束按钮结束编辑
	$('.Ytest_cases').on('click','.Yedit_over',function (){
		$(this).hide().parents('.Ytype').removeClass('active');
		$(this).parents('.Ytype').find('ul li').not('.Yanswer').children('p').show();
		$('.Yeditor').hide();
		
		/*$(this).hide().parents('.Ytype').removeClass('active').find('input[type=radio]').attr('disabled',true);
		$(this).parents('.Ytype').find('ul li').not('.Yanswer').children('p').show();
		$('.Yorder').removeClass('active');
		console.log($(this).parents('.Ytype').parent().find('.Ytype').last())
		$(this).parents('.Ytype').parent().find('.Ytype').last().find('.Yorder').addClass('active');
		$('.Yeditor').hide();
		$('.Yanswer').find('input').attr('disabled',true);
		$('.Yorder.active').parent().siblings('.Yanswer').find('input').attr('disabled',false);*/
	});
	//右侧试题点击删除整条试题
	$('.Ytest_cases').on('click','.Ydelete_img',function (){
		if($(this).parents('.Ytype').siblings('.Ytype').length == 0){
			$(this).parents('.Ytype').siblings('.Yheadline').hide();
			$(this).parents('.Yborder').hide();
		}
		var YDobj = $(this).parents('.Ytype').parent();
		$(this).parents('.Ytype').remove();
		YDobj.find('.Ytype').each(function (i,ele){
			console.log(55555)
			$(this).find('.Yorder').text(i + 1);
		});
		$('.Yorder').removeClass('active');
		YDobj.find('.Ytype').last().find('.Yorder').addClass('active');
		
		$('.Yanswer').find('input[type=radio]').each(function (index,ele){
			$(this).attr('id',$(this).attr('type') + index);
			$(this).next('label').attr('for',$(this).attr('id'));
		});
		
		if($('.Ytype').length == 0){
			$('.Ysave').css('visibility','hidden');
		}
	});
	//右侧保存弹框
	var YemptyText = 0;
	$('.Ytest_cases').on('click','.Ysave',function (){
		var _index;
		//选择题选项
		$('.Ytype').parent().children('.Ytype').each(function (index,ele){
			_index = index + 1;
			if($(this).find('.Yedit_over').css('display') == 'none'){
				$(this).find('.Yoption ol li p').each(function (i,e){
					if($(e).text().trim() == ''){
						YemptyText = 2;
						return false;
					}else{
						YemptyText = 0;
					}
				});
				if(YemptyText == 2) return false;
				//选择题答案
				$(this).find('.Yanswer p input').each(function (i,e){
					console.log($(e).prop('checked'))
					if($(this).prop('checked')){
						YemptyText = 0;
						return false;
					}else{
						YemptyText = 3;
					}
				});
				if(YemptyText == 3) return false;
				//解析
				if($(this).find('.Yanalysis p').text().trim() == ''){
					YemptyText = 4;
				}
			}else{
				YemptyText = 1;
				return false;
			}
		});
		
		if(YemptyText == 1){
			YtipsBox('第' + _index + '题正在编辑');
		}else if(YemptyText == 2){
			YtipsBox('第' + _index + '题缺少选项');
		}else if(YemptyText == 3){
			YtipsBox('第' + _index + '题缺少答案');
		}else if(YemptyText == 4){
			YtipsBox('第' + _index + '题缺少解析');
		}else{
			$('.YtestBox').show();
		}
	});
	//关闭保存弹窗
	$('.YtestBox').on('click','.Ytextclose,.Ycancel',function (){
		$('.YtestBox').hide();
	});
	//清除试卷标题
	$('.YtestBox').on('click','.Yedit_tit>img',function (){
		$('.Yedit_tit>input').val('')
	});
	//填写分值 计算卷面总分
	var YReg = /^[0-9]+(\.[0-9]+)?$/;
	var Ytotal = 0;
	$('.Ytotal_score>span').text(Ytotal + '分');
	$('.YtestBox').on('input','.Yscore_setting ul input',function (){
		if( ! YReg.test($(this).val())){
			$(this).siblings('i').show().text('*请输入符合规则的数字');
		}else{
			$(this).siblings('i').hide();
		}
		Ytotal = 0;
		$('.Yscore_setting ul input').each(function (i,ele){
			if( ! isNaN($(ele).val())){
				Ytotal += Number($(ele).val());
			}
		});
		$('.Ytotal_score>span').text(Ytotal + '分')
	});
	//分值失去焦点
	$('.YtestBox').on('blur','.Yscore_setting ul input',function (){
		! YReg.test($(this).val()) || $(this).val() == '' ? $(this).siblings('i').show().text('*请输入符合规则的数字') : $(this).siblings('i').hide();
	});
	//分值获取焦点
	$('.YtestBox').on('focus','.Yscore_setting ul input',function (){
		$(this).siblings('i').hide();
	});
	
});
