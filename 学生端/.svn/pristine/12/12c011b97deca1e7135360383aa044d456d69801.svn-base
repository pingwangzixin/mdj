	var isTure = true;
	var curMenu = null, zTree_Menu = null;
	var setting = {
		view: {
			showLine: true,
			selectedMulti: false,
			dblClickExpand: false
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			onNodeCreated: this.onNodeCreated,
			beforeClick: this.beforeClick,
			onClick: this.onClick
		}
	};

		var zNodes =[
			{ id:1, pId:0, name:"初一", open:true},
			{ id:11, pId:1, name:"数学上册"},
			{ id:111, pId:11, name:"第一章"},
			{ id:1111, pId:111, name:"第一节第一节第一节第一节第一节第一节第一节第一节"},
			{ id:1112, pId:111, name:"第二节"},
			{ id:1113, pId:111, name:"第三节"},
			{ id:1114, pId:111, name:"第四节"},
			
			{ id:112, pId:11, name:"第二章"},
			{ id:1121, pId:112, name:"第一节"},
			{ id:1122, pId:112, name:"第二节"},
			{ id:1123, pId:112, name:"第三节"},
			{ id:1124, pId:112, name:"第四节"},
			
			{ id:113, pId:11, name:"第三章"},
			{ id:1131, pId:113, name:"第一节"},
			{ id:1132, pId:113, name:"第二节"},
			{ id:1133, pId:113, name:"第三节"},
			{ id:1134, pId:113, name:"第四节"},
			
			{ id:114, pId:11, name:"第四章"},
			{ id:1141, pId:114, name:"第一节"},
			{ id:1142, pId:114, name:"第二节"},
			{ id:1143, pId:114, name:"第三节"},
			{ id:1144, pId:114, name:"第四节"},
			
			{ id:12, pId:1, name:"数学下册"},
			{ id:121, pId:12, name:"第一章"},
			{ id:1211, pId:121, name:"第一节"},
			{ id:1212, pId:121, name:"第二节"},
			{ id:1213, pId:121, name:"第三节"},
			{ id:1214, pId:121, name:"第四节"},
			
			
			{ id:13, pId:1, name:"语文上册"},
			{ id:131, pId:13, name:"第一章"},
			{ id:1311, pId:131, name:"第一节"},
			{ id:1312, pId:131, name:"第二节"},
			{ id:1313, pId:131, name:"第三节"},
			{ id:1314, pId:131, name:"第四节"},
			
			{ id:14, pId:1, name:"语文下册"},
			{ id:141, pId:14, name:"第一章"},
			{ id:1411, pId:141, name:"第一节"},
			{ id:1412, pId:141, name:"第二节"},
			{ id:1413, pId:141, name:"第三节"},
			{ id:1414, pId:141, name:"第四节"},
		
			
		];
		function beforeClick(treeId, node) {
			$('.left_name').css('background-color','');
			if(node.open) {
				isTure = false
			}else{
				isTure = true
			}
			if (node.isParent) {
				if (node.level === 0) {
					zTree_Menu.expandNode(node);
					if(!node.open) {
						return false;
					}
					var pNode = curMenu;
					while (pNode && pNode.level !==0) {
						pNode = pNode.getParentNode();
					}
					if (pNode !== node) {
						var a = $("#" + pNode.tId + "_a");
						a.removeClass("cur");
						zTree_Menu.expandNode(pNode, false);
					}
					a = $("#" + node.tId + "_a");
					a.addClass("cur");
					var isOpen = false;
					for (var i=0,l=node.children.length; i<l; i++) {
						if(node.children[i].open) {
							isOpen = true;
							break;
						}
					}
					if (isOpen) {
						zTree_Menu.expandNode(node, true);
						curMenu = node;
					} else {
						zTree_Menu.expandNode(node.children[0].isParent?node.children[0]:node, true);
						curMenu = node.children[0];

					}
				} else {
					zTree_Menu.expandNode(node);
				}
			}
			
			return !node.isParent;
			
		}
		function onClick(e, treeId, node) {
			alert("点击以后需要执行的事情，请来这里，呵呵~~~~");
		}
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
			curMenu = zTree_Menu.getNodes()[0].children[0].children[0].children[0];//默认选中的
			zTree_Menu.selectNode(curMenu);
			var a = $("#" + zTree_Menu.getNodes()[0].tId + "_a");
			a.addClass("cur");
			//给当前点击的文字加颜色
			$(document).on('click','.node_name',function(){
				$('.node_name').parent().removeClass('curSelectedNode');
				$(this).parent().addClass('curSelectedNode');
			})
			
			//全部收缩展开	
			$('.left_name').on('click',function() {
				$(this).css('background-color','rgb(184, 217, 243)')
				if(isTure) {
					zTree_Menu.expandAll(false);
					for(var i = 0; i<zTree_Menu.getNodes().length; i++) {
						a = $("#" + zTree_Menu.getNodes()[i].tId + "_a");
						a.removeClass("cur");
					}
					isTure = false;
				    return false
				}else{
					$(this).css('background-color','')
					curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
					zTree_Menu.selectNode(curMenu);
					a = $("#" + zTree_Menu.getNodes()[0].tId + "_a");
					a.addClass("cur");
					isTure = true;
				}
			});
			
			
		});
