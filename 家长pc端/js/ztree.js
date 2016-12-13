
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
			{ id:1, pId:0, name:"一年级", open:true},
			{ id:11, pId:1, name:"第一章"},
			{ id:111, pId:11, name:"第一节合肥市的合肥市的法哈德"},
			{ id:112, pId:11, name:"第二节"},
			{ id:113, pId:11, name:"第三节"},
			{ id:114, pId:11, name:"第四节"},
			{ id:12, pId:1, name:"第二章"},
			{ id:121, pId:12, name:"第一节"},
			{ id:122, pId:12, name:"第二节"},
			{ id:123, pId:12, name:"第三节"},
			{ id:124, pId:12, name:"第四节"},
			
			
			{ id:2, pId:0, name:"二年级"},
			{ id:21, pId:2, name:"第一章"},
			{ id:211, pId:21, name:"第一节"},
			{ id:212, pId:21, name:"第二节"},
			{ id:213, pId:21, name:"第三节"},
			{ id:214, pId:21, name:"第四节"},
			{ id:22, pId:2, name:"第二章"},
			{ id:221, pId:22, name:"第一节"},
			{ id:222, pId:22, name:"第二节"},
			{ id:223, pId:22, name:"第三节"},
			{ id:224, pId:22, name:"第四节"},
			
			{ id:3, pId:0, name:"三年级"},
			{ id:31, pId:3, name:"第一章"},
			{ id:311, pId:31, name:"第一节"},
			{ id:312, pId:31, name:"第二节"},
			{ id:313, pId:31, name:"第三节"},
			{ id:314, pId:31, name:"第四节"},
			{ id:32, pId:3, name:"第二章"},
			{ id:321, pId:32, name:"第一节"},
			{ id:322, pId:32, name:"第二节"},
			{ id:323, pId:32, name:"第三节"},
			{ id:324, pId:32, name:"第四节"}
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
					//当前的伸展
					zTree_Menu.expandNode(node);
					if(!node.open){
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
			alert("Do what you want to do!");
		}

		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
			curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
			zTree_Menu.selectNode(curMenu);
			var a = $("#" + zTree_Menu.getNodes()[0].tId + "_a");
			a.addClass("cur");
			//给当前点击的文字加颜色
			$(document).on('click','.node_name',function(){
				$('.node_name').parent().removeClass('curSelectedNode');
				$(this).parent().addClass('curSelectedNode');
			});
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