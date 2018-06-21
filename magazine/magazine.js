$(function(){
	$('.top > p:nth-of-type(2)').hover(function(){
		$('.top > p:nth-of-type(2)').css('border-bottom','none');
		$('.top > p:nth-of-type(2)').css('color','#ff1a1a');
		$('.top > p:nth-of-type(2) span').css('color','#000');
	},function(){
		$('.top > p:nth-of-type(2)').css('border-bottom','7px dotted');
		$('.top > p:nth-of-type(2)').css('color','#000');
	});

	$('header > h2 span').hover(function(){
		$('header > h2 span').css('color','#ff1a1a');
		$('header > img').css('display','none');
	},function(){
		$('header > h2 span').css('color','#000');
		$('header > img').css('display','block');
	});

	$('.gallery > div a:nth-of-type(1) img').hover(function(){
		$(this).css({'filter':'none','border':'8px solid #ff1a1a','transform':'scale(1.05)','margin-bottom':'20px'});
	},function(){
		$(this).css({'filter':'grayscale(100%)','border':'8px solid #000','transform':'scale(1)','margin-bottom':'0px'});
	});

	$('.box > a').hover(function(){
		$('.box > a p').css('fontSize','28px');
		$('.box > a p').css('color','28px');
	},function(){
		$('.box > a p').css('fontSize','25px');
	});





});