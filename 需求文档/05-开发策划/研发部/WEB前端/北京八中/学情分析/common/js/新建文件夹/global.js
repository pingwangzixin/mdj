// Author: 阿辛

//设置pjax，延时30秒就刷新页面
$(document).pjax('a:not(.no-pjax)', '#container > .w1000', {timeout: 30000});
// NProgress.configure({ showSpinner: false });
$(document).on('pjax:start', function () {
    NProgress.start();
});
$(document).on('pjax:end', function () {
    NProgress.done();
});

//下拉菜单
var dropdown_t;
$('body').on({
    mouseenter: function () {
        var thisobj = $(this);
        dropdown_t = setTimeout(function () {
            thisobj.addClass('expand');
            thisobj.children('.son').stop().fadeIn('fast');
        }, 200);
    },
    mouseleave: function () {
        var thisobj = $(this);
        clearTimeout(dropdown_t);
        thisobj.children('.son').stop().fadeOut('fast', function () {
            thisobj.removeClass('expand');
        });
    }
}, '.dropdown');

/**
 * 通用弹出框
 * @param  {string} msg                可以是HTML，插入到弹出框的主体部分；「不能为空」
 * @param  {string} title              弹出框的标题文字；「为空则显示：系统提示」
 * @param  {string} classname          自定义的 class name，可以靠它来自定义弹出框样式；「可以为空」
 * @param  {[type]} disable_mask_click 禁止点击弹出框背后半透明遮罩层关闭弹出框；「 1 为可以点击，0为不可点击，默认为 1 」
 */
function popbox(msg, title, classname, disable_mask_click) {
    var html = '', disable_mask_class;

    title = typeof title == 'string' && title != '' ? title : '系统提示';
    classname = typeof classname == 'string' && classname != '' ? ' ' + classname : '';
    disable_mask_click = typeof disable_mask_click == 'number' ? disable_mask_click : 1;
    $('.mask, .msgbox').remove();

    disable_mask_class = disable_mask_click == 0 ? ' disable_click' : '';

    html += '<div class="mask' + disable_mask_class + '"></div>' +
        '<div class="msgbox' + classname + '">' +
        '<h3>' + title + '</h3>' +
        '<div class="msg-wrap">' + msg + '</div>' +
        '<i class="icon-close"></i>' +
        '</div>';

    $('#popbox-container').append(html);

    reset_popbox();

    $('.msgbox').css('opacity', 1);
    $('.mask').css('opacity', .3);
}

// 重置弹出框位置
function reset_popbox() {
    var msgbox = $('.msgbox'),
        w,
        h,
        winH = $(window).height(),
        winW = $(window).width(),
        tmpTop;

    $('.msgbox').css({
        'width': 'auto',
        'height': 'auto'
    });

    w = msgbox.outerWidth();
    h = msgbox.outerHeight();

    if (w < winW) {
        msgbox.css({
            'left': '50%',
            'margin-left': '-' + w / 2 + 'px'
        });
    } else {
        $('body').css('overflow', 'hidden');
        msgbox.css({
            'left': 0,
            'margin-left': 'auto',
            'width': $(window).width()
        });
    }

    if (h < winH) {
        tmpTop = (winH - h) / 2 >= 200 ? 200 : (winH - h) / 2;

        msgbox.css({
            'top': tmpTop
        });
    } else {
        $('body').css('overflow', 'hidden');
        msgbox.css({
            'top': 0,
            'height': $(window).height()
        });
    }
}

// 点击遮罩关闭弹出框
$('body').on('click', '.mask:not(.disable_click)', function () {
    $('.msgbox .icon-close').trigger('click');
});

// 关闭弹出框
$('body').on('click', '.msgbox .icon-close', function () {
    var msgbox = $('.msgbox'),
        mask = $('.mask');

    //复原到css初始值
    msgbox.css({
        'top': 150,
        'opacity': 0
    });

    mask.css('opacity', 0);

    $('body').css('overflow', 'visible');

    setTimeout(function () {
        msgbox.remove();
        mask.remove();
    }, 400);
});

// 函数式关闭弹出框
function close_popbox() {
    $('.msgbox .icon-close').trigger('click');
}

/**
 * 延迟自动关闭弹出框
 * @param  {number} sec  秒数
 * @param  {number} type 关闭时操作类型；「 0:不做任何操作直接关闭；1:关闭后刷新当前页面；2:关闭后跳转到指定 url」
 * @param  {string} url  当 type = 2 时跳转的 url 地址
 */
function delay_close_popbox(sec, type, url) {
    sec = typeof sec == 'number' ? sec : 3; // 默认3秒
    type = typeof type == 'number' ? type : 0; // 默认时间到之后关闭弹出框
    url = typeof url == 'string' && url != '' ? url : '';

    var container = $('.msgbox > h3');

    if (container.length) {
        container.append('<span class="counter">' + sec + '</span>');

        var timer = setInterval(function () {
            sec--;
            if (sec == 0) {
                clearInterval(timer);
                close_popbox();

                switch (type) {
                    case 0:
                        // Do nothing just close popbox.
                        break;
                    case 1:
                        // Reload current page.
                        location.reload();
                        break;
                    case 2:
                        location = url;
                }
            }
            container.find('.counter').text(sec);
        }, 1000);
    }
}

/**
 * 更新 badge 数字
 * @param  {object}  badge      要更新的 badge 选择器
 * @param  {number}  num        更新的数字
 * @param  {Boolean} is_replace 是否替换，1为用 num 替换当前的，0或无参数当前数字 + num
 */
function update_badge(badge, num, is_replace) {
    var current = 0;
    if (badge.text() != "") {
        current = parseInt(badge.text());
    }
    if (is_replace == 1) {
        badge.text(num);
    } else {
        if (isNaN(current)) {
            badge.text(1);
        } else {
            var ii = num + current;
            if( ii > 99){
                ii = '99+';
            }
            badge.text(ii);
        }
    }

    badge_display(badge);
}

/**
 * 显示或隐藏 badge
 * @param  {object} badge 含有待更新 badge 选择器
 */
function badge_display(badge) {
    var current = parseInt(badge.text());

    if (current > 0) {
        badge.show();
    } else {
        badge.hide();
    }
}

/**
 * 高亮顶部菜单
 * @param  {string} uri  需要高亮的菜单 href 值
 */
$('header a').click(function () {
    $('header a.current').removeClass('current');
    $(this).addClass('current');
});
function highlight_top_menu(uri) {
    if (uri != '') {
        $('header a.current').removeClass('current');
        $('header a[href="' + uri + '"]').addClass('current');
    }
}

/**
 * 返回顶部按钮位置
 */
scroll_to_top_pos();

$(window).on('resize.scroll_to_top', function () {
    scroll_to_top_pos();
});

function scroll_to_top_pos() {
    var gap = 10,
        btn = $('.icon-scroll-to-top'),
        winWidth = $(window).width(),
        containerWidth = $('#container > div').outerWidth(),
        scroll_btn_width = btn.outerWidth(),
        left;

    if (winWidth < (containerWidth + 2 * (scroll_btn_width + 2 * gap))) {
        btn.css('right', '10px');
    } else {
        right = (winWidth - containerWidth) / 2 - gap - scroll_btn_width;
        btn.css('right', right);
    }
}

$(window).on('scroll.scroll_to_top', function () {
    scroll_to_top_show();
});

function scroll_to_top_show() {
    var btn = $('.icon-scroll-to-top');
    if ($(document).scrollTop() > 500) {
        btn.stop().fadeIn();
    } else {
        btn.stop().fadeOut();
    }
}

$('body').on('click', '.icon-scroll-to-top', function () {
    $('html,body').animate({scrollTop: 0}, 500);
});

/**
 * AD-Gallery 相册
 * @param  {string} target 相册选择器
 * @param  {number} start  [可选] 默认显示第几张(从 0 开始)
 * @return {object}        返回相册对象
 */
function use_adgallery(target, start) {
    start = typeof start == 'undefined' ? 0 : start;
    var gallery = $(target).adGallery({
        loader_image: '/static/vendor/ad-gallery/loader.gif',
        start_at_index: start,
        update_window_hash: false,
        slideshow: {enable: false}
    });

    return gallery;
}

/**
 * 设置头部菜单 no pjax，防止当前页面 js 过多，点击进入下一个页面时产生冲突。
 */
function set_no_pjax() {
    $('header a').addClass('no-pjax');
}
/**
 * @param tabSelector
 * @param contextSelector
 * @param activie  样式
 * @param loadwidget true/false 启用/不启用 widget
 */
function tab_switch(tabSelector, contextSelector,active,loadwidget) {
    var tabClassName = 'active';
    if (active != '') {
        tabClassName = active;
    }

    $(contextSelector).hide();
    $(contextSelector + ':first').show();
    $(tabSelector).on('click', function () {
        $(tabSelector).removeClass(tabClassName);
        $(this).addClass(tabClassName);
        $(contextSelector).hide();
        var activeTab = $(this).data('id');
        $(activeTab).show();
        if(loadwidget == true){
            loadWidget($(activeTab));
        }
    });
}

$(function(){
    if( $('.module-widget-init').length ){
        $('.module-widget-init').each(function(){
            var that = $(this);
            if( that.attr('data-href') != '' && that.html() == ''){
                loadWidget(that);
            }
        });
    }

    // $('.module-widget').on('click',function(){
    //     if( $(this).attr('data-href') != '' && $(this).html() == ''){
    //         loadWidget($(this));
    //     }
    // });

});

function loadWidget($obj, callback) {
    var that = $obj;
    if( that.attr('data-href') != '' && that.html() == '') {
        $.ajax({
            url: that.attr('data-href'),
            beforeSend: function () {
                that.html('<div style="padding: 50px 0px;text-align: center"><i class="icon-spin5 animate-spin"></i></div>');
            },
            success: function (data) {
                that.html(data);
            }
        });
        if (callback) {
            callback();
        }
    }
}

function per2num(per) {
    return per.replace(/([0-9.]+)%/, function (a, b) {return +b / 100;})
}

/**
 * 获取文件名,文件类型
 * @param fileName
 * @param fileType 1 文件名  2 文件类型   默认为1
 * @returns {string}
 */
function get_fileType(fileName,fileType)
{
    var result = '',
        index = fileName.lastIndexOf('.');
    fileType = typeof fileType == 'number' ? fileType : 1;

    if (fileType == 1) {
        result = fileName.substr(0,index);
    } else{
        result = fileName.substr(index+1);
    }
    return result;
}

/**
 * 获取当时日期
 * @returns {string}
 */
function get_current_date() {

    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";

    return str;
}
