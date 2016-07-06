$mute.on('click',function(){
  if(!$(this.).attr('ov')){
	$(this.).attr('ov',audio.volume);
	audio.volume=0;
  }else{
  	audio.volume=$(this.)attr('ov');
  	$(this).removeAttr('ov');
  }
})


	$volumeOp.on('click',function(e){
		audio.volume=e.offsetX / $(this).width();
	})

	$indicator.on('mousedown',function(e){
		$volume.addClass('moving');
		var left= $volumeOp.offset().left;
		$(document).on('mousedown',function(e){
			e.pagex - $volumeOp.offset().left;
			//var v = (e.pagex - left)/width;
			audio.volume=v;
		})
	})



$audio.on('volumechange',function(){
	if(audio.volume===0){
		$mute.addClass('active');
	}else{
		$mute.removeClass('active');
	}
	var v=audio.volume*volumeOp.width();
	$currentVol.width(v);
	$indicator.css({left:v-$indicator.width()/2})
})