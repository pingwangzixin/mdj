/**
 * @param tabSelector
 * @param contextSelector
 * @param activie  样式
 * @param loadwidget true/false 启用/不启用 widget
 * @param par 父级loading盖
 */
function tab_switch_k(tabSelector, contextSelector,active,loadwidget,par) {
    var tabClassName = 'active';
    if (active != '') {
        tabClassName = active;
    }
    $(contextSelector).hide();

    $(tabSelector).on('click', function () {
        $(this).addClass(tabClassName).siblings().removeClass(tabClassName);
        var activeTab = $(this).data('id');

        if($(activeTab).html() !== ''){
            $(activeTab).show().siblings().hide();
        }else{
            if(loadwidget == true){
                loadWidget_k($(activeTab),$(par));
            }
        }
    });

    if( $(tabSelector + '.' + tabClassName).length == 1){
        $(tabSelector + '.' + tabClassName).trigger('click');
    }else {
        $(tabSelector + ':first').trigger('click');
    }
}

function loadWidget_k(obj, par, callback) {
    if( obj.attr('data-href') != '' && obj.html() == '') {
        $.ajax({
            url: obj.attr('data-href'),
            beforeSend: function () {
                if ( par.find('.loading').length !== 1){
                    par.addClass('loading-frame-k').append('<div class="loading"><i class="icon-spin5 animate-spin"></i></div>');
                }
            },
            success: function (data) {
                par.find('.loading').remove();
                par.removeClass('loading-frame-k');
                obj.show().siblings().hide();
                obj.html(data);
            }
        });
        if (callback) {
            callback();
        }
    }
}

/*function loadWidget_frame(obj,par) {
    $.ajax({
        url: obj.attr('data-href'),
        beforeSend: function () {
            if ( par.find('.loading').length !== 1){
                par.addClass('loading-frame-k').append('<div class="loading"><i class="icon-spin5 animate-spin"></i></div>');
            }
        },
        success: function (data) {
            par.find('.loading').remove();
            par.removeClass('loading-frame-k');
            obj.html(data);
        }
    });
}*/
function loadWidget_frame(obj) {
    $.ajax({
        url: obj.attr('data-href'),
        success: function (data) {
            obj.html(data);
        }
    });
}
