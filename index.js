
$(function(){
	$('.col2 a , .col2 span').hover(function(){
		$('#col a, #col span').css('color','#939393');
	},function(){
		$('#col a, #col span').css('color','#fff');
	});

	$('.col2 > a, .col2 > span').first().hover(function(){
		$('.imgG > li:nth-of-type(2)').css('display','block');
		$('.imgG > li:nth-of-type(1)').css('display','none');
		$('.imgG > li:nth-of-type(3)').css('display','none');
		$('.imgG > li:nth-of-type(4)').css('display','none');
		$('.imgG > li:nth-of-type(5)').css('display','none');
	},function(){
		$('.imgG > li:nth-of-type(1)').css('display','block');
		$('.imgG > li:nth-of-type(2)').css('display','none');
		$('.imgG > li:nth-of-type(3)').css('display','none');
		$('.imgG > li:nth-of-type(4)').css('display','none');
		$('.imgG > li:nth-of-type(5)').css('display','none');

	});

	$('.one > ul li:nth-of-type(3)').hover(function(){
		$('.imgG > li:nth-of-type(3)').css('display','block');
		$('.imgG > li:nth-of-type(1)').css('display','none');
		$('.imgG > li:nth-of-type(2)').css('display','none');
		$('.imgG > li:nth-of-type(4)').css('display','none');
		$('.imgG > li:nth-of-type(5)').css('display','none');
	},function(){
		$('.imgG > li:nth-of-type(1)').css('display','block');
		$('.imgG > li:nth-of-type(2)').css('display','none');
		$('.imgG > li:nth-of-type(3)').css('display','none');
		$('.imgG > li:nth-of-type(4)').css('display','none');
		$('.imgG > li:nth-of-type(5)').css('display','none');
	});

	$('.one > ul li:nth-of-type(4)').hover(function(){
		$('.imgG > li:nth-of-type(4)').css('display','block');
		$('.imgG > li:nth-of-type(1)').css('display','none');
		$('.imgG > li:nth-of-type(2)').css('display','none');
		$('.imgG > li:nth-of-type(3)').css('display','none');
		$('.imgG > li:nth-of-type(5)').css('display','none');
	},function(){
		$('.imgG > li:nth-of-type(1)').css('display','block');
		$('.imgG > li:nth-of-type(2)').css('display','none');
		$('.imgG > li:nth-of-type(3)').css('display','none');
		$('.imgG > li:nth-of-type(4)').css('display','none');
		$('.imgG > li:nth-of-type(5)').css('display','none');
	});

	$('.one > ul li:nth-of-type(5)').hover(function(){
		$('.imgG > li:nth-of-type(5)').css('display','block');
		$('.imgG > li:nth-of-type(1)').css('display','none');
		$('.imgG > li:nth-of-type(2)').css('display','none');
		$('.imgG > li:nth-of-type(3)').css('display','none');
		$('.imgG > li:nth-of-type(4)').css('display','none');
	},function(){
		$('.imgG > li:nth-of-type(1)').css('display','block');
		$('.imgG > li:nth-of-type(2)').css('display','none');
		$('.imgG > li:nth-of-type(3)').css('display','none');
		$('.imgG > li:nth-of-type(4)').css('display','none');
		$('.imgG > li:nth-of-type(5)').css('display','none');
	});

	$('footer > p a').click(function(){
		// $('article').css('display','block');
		$('article').animate({'margin-top':'0px'},200);
	});

	$(function(){
	$('#pop a img').on('click',function(){
		$('#pop a img').hide();
	});
});


});
