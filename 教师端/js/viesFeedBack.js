$(function(){
	$(document).on('click','.zcj_main_right_list',function(){
		console.log(this.status);
		this.status = !this.status;
		if(this.status){
			$('.icon-left').attr('class','icon-right');
			$('.main_mainRight').show();
		}else{
			$('.icon-right').attr('class','icon-left');
			$('.main_mainRight').hide();
		}
	});
		/*上传资源取消，确认按钮*/
	$('.upsuresc,.upqxsc').on('click',function(){
		$('.up_box').hide();
	});

	$('.edit_but span,.up_flie').on('click',function(){
		$('.up_box').show();
	});
});