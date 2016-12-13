
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
			{ id:111, pId:11, name:"第一单元"},
			{ id:1111, pId:111, name:"第一章"},
			{ id:11111, pId:1111, name:"第一节"},
			{ id:11112, pId:1111, name:"第二节"},
			{ id:11113, pId:1111, name:"第三节"},
			{ id:11114, pId:1111, name:"第四节"},
			{ id:112, pId:11, name:"第二单元"},
			{ id:1121, pId:112, name:"第一章"},
			{ id:11211, pId:1121, name:"第一节"},
			{ id:11212, pId:1121, name:"第二节"},
			{ id:11213, pId:1121, name:"第三节"},
			{ id:11214, pId:1121, name:"第四节"},
			{ id:113, pId:11, name:"第三单元"},
			{ id:1131, pId:113, name:"第一章"},
			{ id:11311, pId:1131, name:"第一节"},
			{ id:11312, pId:1131, name:"第二节"},
			{ id:11313, pId:1131, name:"第三节"},
			{ id:11314, pId:1131, name:"第四节"},
			{ id:114, pId:11, name:"第四单元"},
			{ id:1141, pId:114, name:"第一章"},
			{ id:11411, pId:1141, name:"第一节"},
			{ id:11412, pId:1141, name:"第二节"},
			{ id:11413, pId:1141, name:"第三节"},
			{ id:11414, pId:1141, name:"第四节"},
			{ id:12, pId:1, name:"数学下册"},
			{ id:121, pId:12, name:"第一单元"},
			{ id:1211, pId:121, name:"第一章"},
			{ id:12111, pId:1211, name:"第一节"},
			{ id:12112, pId:1211, name:"第二节"},
			{ id:12113, pId:1211, name:"第三节"},
			{ id:12114, pId:1211, name:"第四节"},
			{ id:13, pId:1, name:"语文上册"},
			{ id:131, pId:13, name:"第一单元"},
			{ id:1311, pId:131, name:"第一章"},
			{ id:13111, pId:1311, name:"第一节"},
			{ id:13112, pId:1311, name:"第二节"},
			{ id:13113, pId:1311, name:"第三节"},
			{ id:13114, pId:1311, name:"第四节"},
			
			
			
			{ id:2, pId:0, name:"初二"},
			{ id:21, pId:2, name:"数学上册"},
			{ id:211, pId:21, name:"第一单元"},
			{ id:212, pId:21, name:"第二单元"},
			{ id:213, pId:21, name:"第三单元"},
			{ id:214, pId:21, name:"第四单元"},
			{ id:22, pId:2, name:"数学下册"},
			{ id:221, pId:22, name:"第一单元"},
			{ id:222, pId:22, name:"第二单元"},
			{ id:223, pId:22, name:"第三单元"},
			{ id:224, pId:22, name:"第四单元"},
			
			{ id:3, pId:0, name:"初三"},
			{ id:31, pId:3, name:"数学上册"},
			{ id:311, pId:31, name:"第一单元"},
			{ id:312, pId:31, name:"第二单元"},
			{ id:313, pId:31, name:"第三单元"},
			{ id:314, pId:31, name:"第四单元"},
			{ id:32, pId:3, name:"数学下册"},
			{ id:321, pId:32, name:"第一单元"},
			{ id:322, pId:32, name:"第二单元"},
			{ id:323, pId:32, name:"第三单元"},
			{ id:324, pId:32, name:"第四单元"}
			
		];

		function beforeClick(treeId, node) {
			if (node.isParent) {
				if (node.level === 0) {
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
			curMenu = zTree_Menu.getNodes()[0].children[0];//默认选中的
			zTree_Menu.selectNode(curMenu);
			var a = $("#" + zTree_Menu.getNodes()[0].tId + "_a");
			a.addClass("cur");
		});
