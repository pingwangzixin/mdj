Highcharts.setOptions({
    credits: {
        enabled: false,
        href: 'http://www.k12cloud.cn/',
        text: 'k12cloud.cn'
    },
    legend: {
        itemStyle: {
            fontSize: '14px',
            fontWeight: 300
        },
        itemHiddenStyle: {
            color: '#888'
        }
    }
});

//定义highcharts column最大宽度
(function (H) {
    var each = H.each;
    H.wrap(H.seriesTypes.column.prototype, 'drawPoints', function (proceed) {
        var series = this;
        if (series.data.length > 0) {
            series.options.maxPointWidth = typeof series.options.maxPointWidth == 'undefined' ? 30 : series.options.maxPointWidth;
            var width = series.barW > series.options.maxPointWidth ? series.options.maxPointWidth : series.barW;
            each(this.data, function (point) {
                point.shapeArgs.x += (point.shapeArgs.width - width) / 2;
                point.shapeArgs.width = width;
            });
        }
        proceed.call(this);
    })
})(Highcharts)

/**
 * 根据图表父元素重新自适应宽高
 * @param  {string} target 图表显示容器选择器
 */
function highcharts_reflow(target){
    if ( $(target).find('.highcharts-container').length > 0 ){
        $(target).highcharts().reflow();
    }
}

/**
 * 空心饼图
 * @param  {string} target   图表显示容器选择器
 * @param  {string} title    正标题
 * @param  {string} subtitle 副标题
 * @param  {object} data     坐标数据
 * @return {object}          返回 highcharts 对象
 */
function chart_pie_with_innertitle(target, title, subtitle, data){
    var style = {
            title: {fontSize: '18px', color: '#586779'},
            subtitle: {fontSize: '40px', color: '#fff'}
        },
        inner_size = title == '' ? '60%' : '80%';

    var chart = $(target).highcharts({
        chart: { type: 'pie', spacing: [0,0,0,0], backgroundColor: 'transparent' },
        title: {
            text: title,
            useHTML: true,
            verticalAlign: 'middle',
            align: 'center',
            y: -23,
            style: style.title
        },
        subtitle: {
            text: subtitle,
            useHTML: true,
            verticalAlign: 'middle',
            align: 'center',
            y: 21,
            style: style.subtitle
        },
        plotOptions: {
            pie: {
                slicedOffset: 0,
                dataLabels: { enabled: false },
                enableMouseTracking: false,
                innerSize: inner_size,
                borderWidth: 0
            }
        },
        series: [{
            data: data
        }]
    });

    return chart;
}

/**
 * 柱状图
 * @param  {string}  target     图表显示容器选择器
 * @param  {string}  title      标题
 * @param  {object}  categories 横坐标名称列表
 * @param  {string}  ytitle     纵坐标名称
 * @param  {object}  data       坐标数据
 * @param  {string}  units      单位
 * @param  {number}  min        [可选]y坐标最小值
 * @param  {boolean} tilt       [可选]x轴文字是否倾斜
 * @param  {boolean} hasLabels  [可选]是否显示 DataLabels
 * @param  {boolean} longtitle  [可选]标题是否太长
 * @return {object}             返回 highcharts 对象
 */
function chart_column(target, title, categories, ytitle, data, units, min, tilt, hasLabels, longtitle){
    var xAxis_align = typeof tilt != 'undefined' && tilt ? 'right' : 'center';
    tilt = typeof tilt != 'undefined' && tilt ? -45 : 0;
    hasLabels = typeof hasLabels == 'undefined' ? true : hasLabels;

    var useHTML = typeof longtitle != 'undefined' ? false : true;
    var rotation = typeof longtitle != 'undefined' ? 270 : 0;

    var chart = $(target).highcharts({
        chart: { type: 'column' },
        legend: { enabled: false },
        title: {
            text: title,
            style: { fontSize: '16px','fontFamily' : '微软雅黑'}
        },
        xAxis: {
            categories: categories,
            labels: {
                rotation: tilt,
                align: xAxis_align,
                fontFamily : '微软雅黑',
                color: '#000'
            },
            lineColor: '#E2E2E2',
            tickColor: '#E2E2E2'
        },
        yAxis: {
            title: {
                text: '<span class="yaxis-vertical-title">'+ytitle+'</span>',
                useHTML: useHTML,
                rotation: rotation
            },
            gridLineColor: '#E2E2E2',
            allowDecimals: false,
            min: min
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return '<strong>'+ this.x +'</strong><br>'+
                    '<strong class="no-vertical">'+ this.point.series.yAxis.axisTitle.textStr +'：</strong>'+ this.y + units;
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: hasLabels,
                    crop: false,
                    overflow: 'none',
                    format: '{y}'+units
                }
            }
        },
        'series': [{
            data: data
        }]
    });

    return chart;
}

/**
 * 有负值的分组柱状图
 * @param  {string}  target     图表显示容器选择器
 * @param  {string}  title      标题
 * @param  {object}  categories 横坐标名称列表
 * @param  {string}  ytitle     纵坐标名称
 * @param  {object}  data       坐标数据
 * @param  {string}  units      单位
 * @param  {number}  min        [可选]y坐标最小值
 * @param  {boolean} tilt       [可选]x轴文字是否倾斜
 * @param  {boolean} hasLabels  [可选]是否显示 DataLabels
 * @param  {boolean} longtitle  [可选]标题是否太长
 * @return {object}             返回 highcharts 对象
 */
function chart_columns(target, title, categories, ytitle, data, units, min, tilt, hasLabels, longtitle){
    var xAxis_align = typeof tilt != 'undefined' && tilt ? 'right' : 'center';
    var useHTML = typeof longtitle != 'undefined' ? false : true;
    var rotation = typeof longtitle != 'undefined' ? 270 : 0;

    tilt = typeof tilt != 'undefined' && tilt ? -45 : 0;
    hasLabels = typeof hasLabels == 'undefined' ? true : hasLabels;

    var chart = $(target).highcharts({
        chart: {
            type: 'column',
            events: {
                load: titleMove,
                redraw: titleMove
            }
        },
        legend: {
            margin: -10,
            title: {
                text: '可选择:',
                style: {
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: '300',
                    fontFamily : '微软雅黑'
                }
            },
            itemStyle: {
                fontSize: '14px',
                fontWeight: '300'
            },
            x: 50
        },
        title: {
            text: title,
            style: { fontSize: '16px' ,'fontFamily' : '微软雅黑'}
        },
        xAxis: {
            categories: categories,
            labels: {
                rotation: tilt,
                align: xAxis_align,
                fontFamily : '微软雅黑'
            },
            lineColor: '#E2E2E2',
            tickColor: '#E2E2E2'
        },
        yAxis: {
            title: {
                text: '<span class="yaxis-vertical-title">'+ytitle+'</span>',
                useHTML: useHTML,
                rotation: rotation
            },
            plotLines: [{
                 value: 0,
                 color: '#999',
                 zIndex: 1,
                 width: 1,
                 dashStyle: 'Dash' }
            ],
            gridLineColor: '#E2E2E2',
            allowDecimals: false,
            min: min
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return '<strong>'+ this.x +'</strong><br>'+
                    '<strong class="no-vertical">'+ this.point.series.yAxis.axisTitle.textStr +'：</strong>'+ this.y + units;
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: hasLabels,
                    crop: false,
                    overflow: 'none',
                    format: '{y}'+units
                }
            }
        },
        'series': data
    });

    return chart;
}

/**
 * 优良率柱状图
 * @param  {string} target     图表显示容器选择器
 * @param  {string} title      标题
 * @param  {object} categories 横坐标名称列表
 * @param  {string} ytitle     纵坐标名称
 * @param  {object} data       坐标数据
 * @param  {string} totalName  每住总数名称
 * @param  {string} units      单位
 * @param  {boolean}stackLabels[可选]是否显示 stackLabels
 *
 * @return {object}            返回 highcharts 对象
 */
function chart_column_stack(target, title, categories, ytitle, data, totalName, units, stackLabels){
	
    var check = true;
    $.each(data, function(key, val){
        if( val.data.length != categories.length ){
            check = false;
        }
    });
	
    if( check ){
        var stackLabels = typeof stackLabels != 'undefined' ? stackLabels : false;
        var chart = $(target).highcharts({
            chart: {
	            type: 'column',
	        },
            title: {
                text: title,
                style: { fontSize: '16px' }
            },
            xAxis: {
                categories: categories,
                lineColor: '#E2E2E2',
                tickColor: '#E2E2E2',
                labels: {
                    style: {
                        fontSize: '12px',
                       fontWeight: 300,
                        color: '#000',
                    	fill:'#000',
                    	fontFamily : '微软雅黑'
                    }
                }
            },
            yAxis: {
                title: {
                    text: '<div class="yaxis-vertical-title">'+ytitle+'</div>',
                    useHTML: true,
                    rotation: 0
                },
                stackLabels: {
                    enabled: stackLabels,
                    formatter: function(){
                        return '<span style="color: #4a4a4a; font-size: 12px; ">'+this.stack+'</span>';
                    },
                    y : -5
                },
                allowDecimals: false,
                gridLineColor: '#E2E2E2'
            },
            tooltip: {
                useHTML: true,
                formatter: function() {
                	var userOptions_stack = this.series.userOptions.stack;
                	if(userOptions_stack){
                		userOptions_stack = this.series.userOptions.stack;
                		 return '<strong>'+  userOptions_stack +'</strong><br>'+
	                    '<strong>'+ this.x +'</strong><br>'+
	                    '<strong>'+ this.series.name +'：</strong>'+ this.point.num + units +'<br>'+
	                    '<strong>'+totalName+'：</strong>'+ this.point.count + units;
                	}else{
                		userOptions_stack = '';
                		 return '<strong>'+ this.x +'</strong><br>'+
	                    '<strong>'+ this.series.name +'：</strong>'+ this.point.num + units +'<br>'+
	                    '<strong>'+totalName+'：</strong>'+ this.point.count + units;
                	}
                }
            },
            
            plotOptions: {
                column: {
                    stacking: 'normal',
                    borderWidth: 0
                }
            },
            legend: { enabled: false },
            series: data
        });
        return chart;
    } else {
        $(target).addClass('chart-error').html('<div>数据错误</div>');
    }
}

/**
 * 均分柱状图
 * @param  {string} target     图表显示容器选择器
 * @param  {string} title      标题
 * @param  {object} categories 横坐标名称列表
 * @param  {string} ytitle     纵坐标名称
 * @param  {string} plineName  均分线名称
 * @param  {number} plineValue 均分线数值
 * @param  {object} data       坐标数据
 * @param  {number} min        [可选]y坐标最小值
 * @param  {boolean} dashStyle [可选]均分是否为虚线
 * @param  {string} selected   [可选]选中的类别
 * @return {object}            返回 highcharts 对象
 */
function chart_column_line(target, title, categories, ytitle, plineName, plineValue, data, min, dashStyle, selected, max){
    dashStyle = typeof dashStyle == 'undefined' || dashStyle == false ? false : 'ShortDot';
    var chart = $(target).highcharts({
        chart: { type: 'column', spacing: [10,10,0,10] },
        title: {
            text: title,
            style: { fontSize: '16px' }
        },
        xAxis: {
            categories: categories,
            lineColor: '#E2E2E2',
            tickColor: '#E2E2E2',
            labels: {
                style: {
                    fontSize: '12px',
                    fontWeight: 300,
                    color: '#000',
                    fill:'#000',
                    fontFamily : '微软雅黑'
                },
                formatter: function() {
                    if (selected != '' && this.value == selected) {
                        return '<span style="fill: #d63e3e;">' + this.value + '</span>';
                    } else {
                        return this.value;
                    }
                }
            }
        },
        yAxis: {
            title: {
                text: '<div class="yaxis-vertical-title">'+ytitle+'</div>',
                useHTML: true,
                rotation: 0
            },
            gridLineColor: '#E2E2E2',
            plotLines: [{
                color: '#81D470',
                dashStyle: dashStyle,
                width: 2,
                value: plineValue,
                label: {
                    text: '<div class="plotline-label">'+plineValue+'</div>',
                    useHTML: true,
                    y: 2,
                    align: 'right'
                },
                //zIndex: 4
            }],
            allowDecimals: false,
            min: min,
            max: max
        },
        tooltip: {
            enabled: false,
            backgroundColor: null,
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            style: {
                padding: 0,
                fontSize: '14px',
                fontFamily : '微软雅黑'
            },
            formatter: function() {
                return '<strong>'+ this.x +'</strong><br>'+
                '<strong>'+this.series.name +'：</strong>'+ this.y;
            }
        },
        plotOptions: {
            column: {
                color: '#5093e1',
                enableMouseTracking: false,
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    crop: false,
                    overflow: 'none',
                    style: {
                        color: '#000',
                    	fill:'#000',
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily : '微软雅黑'
                    }
                },
                events: {
                    legendItemClick: function () {
                        return false;
                    }
                }
            },
            line: {
                events: {
                    legendItemClick: function () {
                        return false;
                    }
                }
            }
        },
        legend: {
            itemStyle: { cursor: 'auto' }
        },
        series: [{
            name: data.name,
            color: '#均分柱状',
            data: data.data
        },{
            type: 'line',
            name: plineName,
            color: '#81D470',
            dashStyle: dashStyle,
            marker: { enabled: false }
        }]
    });

    return chart;
}

/**
 * 雷达图
 * @param  {string} target     图表显示容器选择器
 * @param  {object} categories 横坐标名称列表
 * @param  {object} data       坐标数据
 * @return {object}            返回 highcharts 对象
 */
function chart_polar(target, categories, data){
    var chart = $(target).highcharts({
        chart: {
            polar: true,
            type: 'line',
            spacing: [20,0,10,0]
        },

        title: { text: null },

        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                distance: 25,
                style: { fontSize: '14px',fontFamily : '微软雅黑' }
            },

        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            minorGridLineColor: '#efefef',
            minorGridLineWidth: 1,
            minorTickInterval: 'auto',
            labels: {
                enabled: false,
                fontFamily : '微软雅黑'
            }
        },

        tooltip: {
            shared: true,
            useHtml: true,
            formatter: function(){
                return this.y;
            }
        },

        legend: { enabled: false },

        plotOptions: {
            line: {
                color: '#777',
                dashStyle: 'Dash',
                lineWidth: 1
            }
        },

        series: [{
            pointPlacement: 'on',
            data: data
        }]
    });

    return chart;
}

/**
 * 点图
 * @param  {string} target     图表显示容器选择器
 * @param  {string} title      标题
 * @param  {object} categories 横坐标名称列表
 * @param  {string} ytitle     纵坐标名称
 * @param  {object} data       坐标数据
 * @param  {object} additional [可选]点额外数据
 * @param  {string} postfix    [可选]点名称后缀
 * @param  {number} min        [可选]y坐标最小值
 * @return {object}            返回 highcharts 对象
 */
function chart_scatter(target, title, categories, ytitle, data, additional, postfix, min){
    postfix = typeof postfix == 'undefined' ? '' : postfix;

    var chart = $(target).highcharts({
        chart: { type: 'scatter' },
        title: { text: title },
        xAxis: {
            categories: categories,
            lineColor: '#E2E2E2',
            tickColor: '#E2E2E2'
        },
        yAxis: {
            title: {
                text: '<span class="yaxis-vertical-title">'+ ytitle +'</span>',
                useHTML: true,
                rotation: 0
            },
            gridLineColor: '#E2E2E2',
            allowDecimals: false,
            min: min
        },
        legend: { enabled: false },
        tooltip: {
            useHTML: true,
            formatter: function() {
                var tooltip_html = '',
                    obj = this;

                tooltip_html =  '<div><strong>'+ obj.x + postfix +'</strong></div>'+
                                '<div><strong class="no-vertical">'+ obj.point.series.yAxis.axisTitle.textStr +'：</strong>'+obj.y+'</div>';

                if( typeof additional == 'object' ){
                    $.each(additional, function(key, val){
                        tooltip_html += '<div><strong>'+val.name+'：</strong>'+obj.point[val.key]+'</div>';
                    });
                }

                return tooltip_html;
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            fillColor: 'transparent',
                            lineWidthPlus: 1,
                            radiusPlus: 1
                        }
                    }
                }
            }
        },
        series: [{
            data: data
        }]
    });

    return chart;
}

/**
 * app折线图
 * @param  {string} target     图表显示容器选择器
 * @param  {string} title      标题
 * @param  {object} categories 横坐标名称列表
 * @param  {string} ytitle     纵坐标名称
 * @param  {string} data       坐标数据
 * @param  {boolean} plotLines [可选]0刻度是否使用单独样式
 * @param  {boolean} legend    [可选]是否显示切换
 * @param  {int} tip_type      提示类型1: 离均差 2: 百分率 3: 名次
 * @paran  {boolean} reversed  Y轴是否倒序
 * @return {object}            返回 highcharts 对象
 */
function chart_line_mobile(target, title, categories, ytitle, data, plotLines, legend, tip_type, reversed) {
    //plotLines = typeof plotLines != 'undefined' ? false : [{ value: 0, color: '#999', zIndex: 1, width: 1, dashStyle: 'Dash' }];
    //统一全部虚线
    plotLines = [{ value: 0, color: '#999', zIndex: 1, width: 1, dashStyle: 'Dash' }];
    legend = false;//typeof legend != 'undefined' ? legend : true;
    tip_type = typeof tip_type != 'undefined' ? tip_type : 1;
    reversed = typeof reversed != 'undefined' ? reversed : false;

    var chart = $(target).highcharts({
        chart: {
            type: 'line'
        },
        title: { text: title },
        xAxis: {
            categories: categories,
            lineColor: '#E2E2E2',
            tickColor: '#E2E2E2',
            labels: {
                style: {
                    fontSize: '12px',
                    fontWeight: 300,
                    color: '#000',
                    fill:'#000',
                    fontFamily : '微软雅黑'
                }
            }
        },
        yAxis: {
            title: {
                enabled: false
            },
            reversed: reversed,
            plotLines: plotLines,
            allowDecimals: false,
            gridLineColor: '#E2E2E2'
        },
        tooltip: {
            formatter: function() {
                if (tip_type == 1) {
                    return '<strong>'+ this.x +'</strong><br>'+
                        '<strong>'+ this.series.name +'：</strong>'+ this.point.score +'分';
                } else if (tip_type == 2) {
                    return '<strong>'+ this.x +'</strong><br>'+
                        '<strong>'+ this.series.name +'：</strong>'+ this.point.y + '%';
                } else if (tip_type == 3) {
                    return '<strong>'+ this.x +'</strong><br>'+
                        '<strong>'+ this.series.name +'：</strong>第'+ this.point.y + '名';
                }
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    formatter: function(){
                        if (tip_type == 1) {
                            return this.point.y + '%(' + this.point.score + '分)';
                        } else if (tip_type == 2) {
                            return this.point.y + '%';
                        } else if (tip_type == 3) {
                            return '第' + this.point.y + '名';
                        }
                    }
                },
                events: {
                    mouseOver: function () {
                        // Show all data labels for the current series
                        $.each(this.data, function(i, point){
                            point.dataLabel.show();
                        });
                    },
                    mouseOut: function () {
                       // Hide all data labels for the current series
                        $.each(this.data, function(i, point){
                            point.dataLabel.hide();
                        });
                    }
                }
            },
            series: {
                color: '#d63e3e'
            }
        },
        legend: {
            enabled: false
        },
        series: data
    }, function(chart) {
           // Hide data labels by default
            $.each(chart.series, function(i, series) {
                $.each(series.data, function(i, point){
                    point.dataLabel.hide();
                });
            });
            //Add events for hovering legend items
            // $('.highcharts-legend-item').hover(function(e) {
            //     chart.series[$(this).index()].onMouseOver();
            // },function() {
            //     chart.series[$(this).index()].onMouseOut();
            // });
            $(target).on('click', '.highcharts-legend-item', function(){
                $.each(chart.series, function(i, series) {
                    $.each(series.data, function(i, point){
                        point.dataLabel.hide();
                    });
                });
            });
        }
    );

    return chart;
}

/**
 * 折线图
 * @param  {string} target     图表显示容器选择器
 * @param  {string} title      标题
 * @param  {object} categories 横坐标名称列表
 * @param  {string} ytitle     纵坐标名称
 * @param  {string} data       坐标数据
 * @param  {boolean} plotLines [可选]0刻度是否使用单独样式
 * @param  {boolean} legend    [可选]是否显示切换
 * @param  {int} tip_type      提示类型1: 离均差 2: 百分率 3: 名次, 0 : 没有括号内内容的百分比
 * @paran  {boolean} reversed  Y轴是否倒序
 * @return {object}            返回 highcharts 对象
 */
function chart_line(target, title, categories, ytitle, data, plotLines, legend, tip_type, reversed) {
    //plotLines = typeof plotLines != 'undefined' ? false : [{ value: 0, color: '#999', zIndex: 1, width: 1, dashStyle: 'Dash' }];
    //统一全部虚线
    plotLines = [{ value: 0, color: '#999', zIndex: 1, width: 1, dashStyle: 'Dash' }];
    legend = typeof legend != 'undefined' ? legend : true;
    tip_type = typeof tip_type != 'undefined' ? tip_type : 1;
    reversed = typeof reversed != 'undefined' ? reversed : false;

    var chart = $(target).highcharts({
        chart: {
            type: 'line',
            events: {
                load: titleMove,
                redraw: titleMove
            }
        },
        title: { text: title },
        xAxis: {
            categories: categories,
            lineColor: '#E2E2E2',
            tickColor: '#E2E2E2',
            labels: {
                style: {
                    fontSize: '12px',
                    fontWeight: 300,
                    color: '#000',
                    fill:'#000',
                    fontFamily : '微软雅黑'
                }
            }
        },
        yAxis: {
            title: {
                text: '<div class="yaxis-vertical-title">'+ytitle+'</div>',
                useHTML: true,
                rotation: 0
            },
            reversed: reversed,
            plotLines: plotLines,
            allowDecimals: false,
            gridLineColor: '#E2E2E2'
        },
        tooltip: {
            formatter: function() {
                if (tip_type == 1) {
                    return '<strong>'+ this.x +'</strong><br>'+
                        '<strong>'+ this.series.name +'：</strong>'+ this.point.score +'分';
                } else if (tip_type == 2) {
                    return '<strong>'+ this.x +'</strong><br>'+
                        '<strong>'+ this.series.name +'：</strong>'+ this.point.y + '%';
                } else if (tip_type == 3) {
                    return '<strong>'+ this.x +'</strong><br>'+
                        '<strong>'+ this.series.name +'：</strong>第'+ this.point.y + '名';
                } else {
                    return '<strong>'+ this.x +'</strong><br>';
                }
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    formatter: function(){
                        if (tip_type == 1) {
                            return this.point.y + '%(' + this.point.score + '分)';
                        } else if (tip_type == 2) {
                            return this.point.y + '%';
                        } else if (tip_type == 3) {
                            return '第' + this.point.y + '名';
                        } else {
                            return this.point.y;
                        }
                    }
                },
                events: {
                    mouseOver: function () {
                        // Show all data labels for the current series
                        $.each(this.data, function(i, point){
                            point.dataLabel.show();
                        });
                    },
                    mouseOut: function () {
                       // Hide all data labels for the current series
                        $.each(this.data, function(i, point){
                            point.dataLabel.hide();
                        });
                    }
                }
            }
        },
        legend: {
            enabled: legend,
            margin: -10,
            title: {
                text: '可选择:',
                style: {
                    color: '#000',
                    fill:'#000',
                    fontSize: '14px',
                    fontWeight: '300',
                    fontFamily : '微软雅黑'
                }
            },
            itemStyle: {
                fontSize: '14px',
                fontWeight: '300'
            },
            x: 50
        },
        series: data
    }, function(chart) {
           // Hide data labels by default
            $.each(chart.series, function(i, series) {
                $.each(series.data, function(i, point){
                    point.dataLabel.hide();
                });
            });
            //Add events for hovering legend items
            // $('.highcharts-legend-item').hover(function(e) {
            //     chart.series[$(this).index()].onMouseOver();
            // },function() {
            //     chart.series[$(this).index()].onMouseOut();
            // });
            $(target).on('click', '.highcharts-legend-item', function(){
                $.each(chart.series, function(i, series) {
                    $.each(series.data, function(i, point){
                        point.dataLabel.hide();
                    });
                });
            });
        }
    );

    return chart;
}

/* 可选择的位置调整 */
function titleMove(e) {
    var title = this.legend.title;

    title && title.translate(-60, 27.5);
    //change highcharts-legend-item rect y to 5
    $('.highcharts-legend-item rect').attr('y', '5');
}

/* addSeries */
function editColumnChart(obj, userSeries, redraw) {
    var chart = obj.highcharts();
    redraw = typeof redraw == 'undefined' ? false : true;
    chart.addSeries(userSeries, redraw);
}

/* 重新生成 category */
function editCategories(obj, categories, redraw) {
    var chart = obj.highcharts();
    redraw = typeof redraw == 'undefined' ? false : true;
    chart.xAxis[0].setCategories(categories, redraw);
}

/* 图标的删除 */
function removeSerie(obj, redraw) {
    var chart = obj.highcharts(),
        seriesTotal = chart.series.length;
    redraw = typeof redraw == 'undefined' ? false : true;

    for (var i = 0; i < seriesTotal; i++) {
        chart.series[0].remove(redraw);
    }
}

/* 折线图的重新生成 */
function editLineChart(obj, target, series) {
    var thisobj = obj,
        parent = thisobj.parent(),
        classtype = thisobj.attr('data-classtype'),
        chart = target.highcharts();

    if( !thisobj.hasClass('active') ){
        parent.find('.active').removeClass('active');
        thisobj.addClass('active');

        removeSerie(target);

        $.each(series[classtype].series, function(key, value){
            editColumnChart(target, value);
        });

        chart.redraw();

        $.each(chart.series, function(i, series) {
            $.each(series.data, function(i, point){
                point.dataLabel.hide();
            });
        });
    }

    return false;
}

/* 柱状图的重新生成 */
function updateColumnChart(obj, series) {
    var a = obj.siblings('.series-div-box-column').find('a.active'),
        parent = a.length ? obj.siblings('#chart-class-type'+a.data('classtype')) : obj.siblings('.chart-column-legend-class'),
        level = obj.siblings('.chart-column-legend'),
        chart = obj.highcharts();

    removeSerie(obj);

    $.each(series, function(key, value){
        if (level.find('span[data-level="'+value.level+'"].active').length == 0) {
            if (parent.length) {
                if (parent.find($('span[data-classid="'+value.class_id+'"]')).length && parent.find($('span[data-classid="'+value.class_id+'"].active')).length == 1) {
                    editColumnChart(obj, value);
                }
            } else {
                editColumnChart(obj, value);
            }
        }
    });

    chart.redraw();
}

/* 班级类型切换 */
function parallelUpdate(obj, target, series) {
    var parent = obj.parent(),
        classtype = obj.data('classtype');

    if (!obj.hasClass('active')) {
        parent.siblings('.chart-column-legend-class').hide();

        parent.siblings('#chart-class-type'+classtype).show();

        parent.find('.active').removeClass('active');
        obj.addClass('active');

        removeSerie(target);
        updateColumnChart(target, series);
    }
}

/* 级别的切换 (优秀良好等) */
function legendUpdate(obj, target, series, single) {
    var chart = target.highcharts(),
        single = typeof single == 'undefined' ? false : true;

    obj.toggleClass('active');

    if (single) {
        initSingleColumnChart(target, series);
    } else {
        updateColumnChart(target, series);
    }
}


/* 单柱状图的重新生成 */
function initSingleColumnChart(target, series) {
    var chart = target.highcharts(),
        legend = target.siblings('.chart-column-legend'),
        legend_class = target.siblings('.chart-column-legend-class');

    removeSerie(target);

    if (legend_class.length) {
        var c = [];
        legend_class.find('span.active').each(function(){
            var obj = $(this),
                text = obj.text();

            c.push(text);
        });
        editCategories(target, c, true);
    }

    $.each(series, function(key, value){
        var newObject = $.extend(true, {}, value);

        if (legend_class.length) {
            legend_class.find('span:not(.active)').each(function(){
                var obj = $(this),
                    classid = obj.data('classid');

                $.each(newObject.data, function(k, v){
                    if (v && v.class_id == classid) {
                        newObject.data.splice(k, 1);
                    }
                });
            });
        }

        if (legend.length) {
            if (legend.find('span[data-level="'+value.level+'"].active').length == 0) {
                editColumnChart(target, newObject);
            }
        } else {
            editColumnChart(target, newObject);
        }
    });

    chart.redraw();
}

/* 单柱状图&平均分线的重新生成 */
function initSingleColumnLineChart(parent, target, series) {
    var chart = target.highcharts();

    removeSerie(target);

    var c = [];
    parent.find('span.active').each(function(){
        c.push($(this).text());
    });

    editCategories(target, c, true);

    var newObject = $.extend(true, {}, series.data);

    parent.find('span:not(.active)').each(function(){
        var classid = $(this).data('classid');

        $.each(newObject.data, function(k, v){
            if (v && v.class_id == classid) {
                newObject.data.splice(k, 1);
            }
        });
    });

    editColumnChart(target, newObject);

    chart.addSeries({
        type: 'line',
        name: series.plineName,
        color: '#81D470',
        dashStyle: false,
        marker: { enabled: false }
    }, true);

    chart.redraw();
}

/**
 * 放大缩小的处理
 *
 * @author cc
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function highcharts_btb(obj, callback) {
    if (obj.length) {
        obj.toggleClass('modal');
        if (callback) {
            callback(obj);
        }
    }
}


function doReflow(obj) {
    if (obj.find('.charts-btb').length) {
        obj.find('.charts-btb').each(function(){
            $(this).highcharts().reflow();
        });
    }
}
