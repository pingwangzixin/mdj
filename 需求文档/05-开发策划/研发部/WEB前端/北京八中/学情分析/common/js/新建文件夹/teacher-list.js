/**
 * author chencong
 */

//根据传递的参数信息组装教师列表
//teacher_list:弹出层所需要的所有教师列表,selected：初始被选中的所有教师,course:全部教师或者对应学科教师
function pop_teacher_list(teacher_list, selected, course, need_button) {
    var html = '', list_html = '';
    if (teacher_list !== false && typeof teacher_list != 'undefined') {
        course = typeof course == 'undefined' ? 0 : course;
        need_button = typeof need_button == 'undefined' ? 0 : need_button;

        if (course > 0) {//学科教师列表
            for (var i = 0; i < teacher_list.length; i++) {
                if (in_array(teacher_list[i].teacher_id, selected) !== false) {
                    list_html += '<span data-id="'+teacher_list[i].teacher_id+'" class="selected">'+teacher_list[i].name+'</span>';
                } else {
                    list_html += '<span data-id="'+teacher_list[i].teacher_id+'">'+teacher_list[i].name+'</span>';
                }
            }

            //自然加载的时候,显示,切换的时候,则不显示
            if (need_button != -1) {
                html += '<div class="popbox-teacher-list">' +
                            list_html +
                        '</div>';
                html += '<a href="javascript:;" class="see-all" data-courseid="'+course+'">查看所有教师</a>';
            } else {
                html += list_html;
            }
        } else {//全部教师列表
            for (var i in teacher_list) {
                var li_list_html = '';
                for (var j = 0; j < teacher_list[i].length; j++) {
                    if (in_array(teacher_list[i][j].teacher_id, selected) !== false) {
                        li_list_html += '<span class="selected" data-id="'+teacher_list[i][j].teacher_id+'">'+teacher_list[i][j].name+'</span>';
                    } else {
                        li_list_html += '<span data-id="'+teacher_list[i][j].teacher_id+'">'+teacher_list[i][j].name+'</span>';
                    }
                }

                list_html +=    '<li class="clearfix">' +
                                    '<div class="zimu fl">'+i+'</div>' +
                                    '<div class="laoshi">'+li_list_html+'</div>' +
                                '</li>';
            }
            html += '<ul>'+list_html+'</ul>';
        }
        //自然加载的时候,显示确定跟取消按钮,切换的时候,则不显示
        if (need_button != -1) {
            html += '<div class="warning-btns">'+
                        '<button class="btn btn-blue btn-middle confirm-one-step-upgrade">确定</button>'+
                        '<a href="javascript:;" class="btn btn-gray btn-middle" onclick="close_popbox();">取消</a>'+
                    '</div>';
        }

    } else {
        html =  '<div class="tips noborder">暂无教师信息，请前往 <a href="/settings/st_teacher">教师管理</a> 添加</div>';
    }
    return html;
}

//in_array
function in_array(k, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(k) === parseInt(arr[i])) {
            return i;
        }
    }
    return false;
}

/* get object length */
function object_length(obj) {
    var count = 0;

    if (typeof obj == 'object') {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                count++;
            }
        }
    }

    return count;
}

/* 下一页 */
function nextpage(parent, btn, target, item, limited) {
    $(parent).on('click', btn, function(){
        var obj = $(this),
            page = obj.attr('data-page');

        if (!obj.hasClass('disabled')) {
            if (typeof limited == 'string' && limited == 'false') {
                loadMore(btn, target, item, page, 'false');
            } else {
                loadMore(btn, target, item, page);
            }
        }

        return false;
    });
}

/* 加载更多 */
function loadMore(btn, target, item, page, limited) {
    var newpage = $(btn).attr('href'),
        defaultTxt = $(btn).text();

    $.ajax({
        url: newpage,
        dataType: 'html',
        beforeSend: function(){
            $(btn).html('<i class="icon-spin3 animate-spin"></i>正在加载中，请稍后···').addClass('disabled');
        }
    }).done(function(data){
        var wrappedObj = $('<div id="tempwrap"></div>').html(data);

        if ($(item, wrappedObj).length <= 0) {
            $(btn).html('没有更多');
        } else {
            $(target).append($(target, wrappedObj).html());

            if (page < 3 || (typeof limited == 'string' && limited == 'false')) {
                $(btn).html(defaultTxt).removeClass('disabled');
                $(btn).attr('href', $(btn, wrappedObj).attr('href'));
                $(btn).attr('data-page', $(btn, wrappedObj).attr('data-page'));
            } else {
                $(btn).parent().hide();
                if ($('.notice-original-page').length) {
                    $('.notice-original-page').show();
                }
            }
        }
    });
}

/* 下一页 */
function nextpage_zw(parent, btn, target, item) {
    $(parent).on('click', btn, function(){
        var obj = $(this),
            page = obj.attr('data-page');

        if (!obj.hasClass('disabled')) {
            loadMore_zw(btn, target, item, page);
        }

        return false;
    });
}

/* 加载更多 */
function loadMore_zw(btn, target, item, page, limited) {
    var newpage = $(btn).attr('href'),
        defaultTxt = $(btn).text();

    $.ajax({
        url: newpage,
        dataType: 'json',
        beforeSend: function(){
            $(btn).html('<i class="icon-spin3 animate-spin"></i>正在加载中，请稍后···').addClass('disabled');
        }
    }).done(function(response){
        if(response.msg != '')
        {
            popbox(response.msg);
        }
        else
        {
            var data = response.html;
            var wrappedObj = $('<div id="tempwrap"></div>').html(data);

            if ($(item, wrappedObj).length <= 0) {
                $(btn).html('没有更多');
            } else {
                $(target).append($(target, wrappedObj).html());
                $(btn).html(defaultTxt).removeClass('disabled');
                $(btn).attr('href', response.href);
            }
        }
    });
}


/*
 * 公告列表页通用的点击弹出框处理方法
 * type 1 : 家校公告 2 : 校内通知
 */
function popbox_notice_handle(obj, type) {
    var _class = obj.attr('class'),
        url = obj.attr('href'),
        html = '',
        text = '';

    text = type == 1 ? '家校公告' : '校内通知';

    if (_class == 'icon-notice-edit') {
        html += '<span class="warning-msg">编辑该条'+text+'后，原有数据将被清空，并重新发出一条新'+text+'。<br>是否确定要编辑该条'+text+'？</span>' +
                '<div class="warning-btns">' +
                    '<a href="javascript:;" class="btn btn-blue btn-middle confirm-notice-edit" data-url="' + url + '">确认编辑</a>' +
                    '<a href="javascript:;" class="btn btn-gray btn-middle" onclick="close_popbox();">取消</a>' +
                '</div>';

    } else if (_class == 'icon-notice-delete') {
        html += '<span class="warning-msg">确定要删除该条'+text+'？</span>' +
                '<div class="warning-btns">' +
                    '<a href="javascript:;" class="btn btn-blue btn-middle confirm-notice-delete" data-url="' + url + '">确定</a>' +
                    '<a href="javascript:;" class="btn btn-gray btn-middle" onclick="close_popbox();">取消</a>' +
                '</div>';
    } else if (_class == 'icon-notice-recover') {
        html += '<span class="warning-msg">确定要恢复该条'+text+'？</span>' +
                '<div class="warning-btns">' +
                    '<a href="javascript:;" class="btn btn-blue btn-middle confirm-notice-recover" data-url="' + url + '">确定</a>' +
                    '<a href="javascript:;" class="btn btn-gray btn-middle" onclick="close_popbox();">取消</a>' +
                '</div>';
    } else {
        return false;
    }

    popbox(html, '', 'notice-confirm-popbox cc-global', 0);
}

/*
 * 公告列表页通用的弹出框确认以及取消操作
 * icon-notice-edit: 编辑，直接跳转
 * icon-notice-delete: 删除，删除并且隐藏掉对应条目
 * icon-notice-recover: 恢复，恢复并且隐藏掉对应条目
 */
function handle_popbox_notice(obj) {
    var url = obj.data('url'),
        parent = $('a[href="'+url+'"]').closest('li');

    if (obj.hasClass('confirm-notice-edit')) {
        location = url;
    } else if (obj.hasClass('confirm-notice-delete') || obj.hasClass('confirm-notice-recover')) {
        var current = obj.hasClass('confirm-notice-delete') ? $('.confirm-notice-delete') : $('.confirm-notice-recover');
        $.ajax({
            url: url,
            dataType: 'json',
            beforeSend: function(){
                current.addClass('disabled').html('<i class="icon-spin5 animate-spin"></i>');
            }
        }).done(function(response){
            if( response.status ){
                if (typeof response.url != 'undefined') {
                    location = response.url;
                } else {
                    parent.fadeOut();
                    close_popbox();
                }
            } else {
                popbox(response.msg);
            }
        });
    } else {
        return false;
    }
}

