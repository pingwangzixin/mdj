$(function () {
	var input = $("#idxg").find("input")
	var kong = $(".kongsave")
	var suresave = $(".suresave")

	$(".zhuyi").click(function () {
		input.removeAttr("disabled");
		input.css({
			"background": "#fff"
		});
		$("#saveid").show();
	})

	//点击保存，判断input是否为空
	$("#saveid").click(function () {
		if (input.val().length > 0) {
			$(".suresave").show();
			$("#saveid").hide();
			setTimeout(function () {
				$("#tcdui").hide(800);
			}, 2000)
			input.attr("disabled", true);
			input.css({
				"background": "#f9f9f9"
			});
		} else {
			kong.show();
		}
	})

	//确认保存弹窗事件
	$(".suresave .sure .btzuo").click(function () {
		suresave.hide();
		$("#tcdui").show(800);
		input.css({
			"background": "#f9f9f9"
		});
		setTimeout(function () {
			$("#tcdui").hide(1000);
		}, 1500)
	})

	$(".kongsave .close,.btyou").click(function () {
		kong.hide();
	})

	$(".kongsave .sure .btzuo").click(function () {
		kong.hide();
		suresave.show();
	})

	$(".suresave .close,.btyou").click(function () {
		suresave.hide();
	})


	//显示ID的input框失去焦点的事件
	$("#xianshiid").blur(function () {
		input.attr("disabled", "disabled");
		input.css({
			"background": "#f9f9f9"
		});
	})

	//搜索框点击事件
	$("#seacheid").click(function () {
		var cxid = $(".cxid").val();
		$("#xianshiid").val(cxid);
	})

	//遍历表格左边切换选项卡
	$(".tbody .zuobiao span").each(function (index) {
		$(this).click(function () {
			$(".tbody .zuobiao span").removeClass("tbactive");
			$(this).addClass("tbactive");
			$("td ul li").removeClass("xzactive");
			var nianji=$(this).html()
//			alert(banji)
			
			//遍历表格右边切换选项卡
			$("td ul li").each(function (index) {
				$(this).click(function () {
					$("td ul li").removeClass("xzactive");
					$(this).addClass("xzactive");
					var banji=$(this).text()
					$(".xiugaiid").html(nianji+banji)
				})
				
				
			})
			//结束
		})
	})
})