$(function(){
	$('header > article div').hover(function(){
		$(this).css('opacity','1');
	},function(){
		$(this).css('opacity','.7');
	});


	$('.content > fieldset .circle:nth-of-type(1)').hover(function(){
		$(this).css('background','#fff');
		$('.content > fieldset .circle:nth-of-type(1) p a').css('color','#000');
	},function(){
		$(this).css('background','#01103B');
		$('.content > fieldset .circle:nth-of-type(1) p a').css('color','#fff');
	});

	$('.content > fieldset .circle:nth-of-type(2)').hover(function(){
		$(this).css('background','#01103B');
		$('.content > fieldset .circle:nth-of-type(2) p a').css('color','#fff');
	},function(){
		$(this).css('background','#fff');
		$('.content > fieldset .circle:nth-of-type(2) p a').css('color','#000');
	});

	$('.content > fieldset .circle:nth-of-type(3)').hover(function(){
		$(this).css('background','#01103B');
		$('.content > fieldset .circle:nth-of-type(3) p a').css('color','#fff');
	},function(){
		$(this).css('background','#fff');
		$('.content > fieldset .circle:nth-of-type(3) p a').css('color','#000');
	});

	$('.content > fieldset .circle:nth-of-type(4)').hover(function(){
		$(this).css('background','#01103B');
		$('.content > fieldset .circle:nth-of-type(4) p a').css('color','#fff');
	},function(){
		$(this).css('background','#fff');
		$('.content > fieldset .circle:nth-of-type(4) p a').css('color','#000');
	});

	$('.content > fieldset .circle:nth-of-type(5)').hover(function(){
		$(this).css('background','#01103B');
		$('.content > fieldset .circle:nth-of-type(5) p a').css('color','#fff');
	},function(){
		$(this).css('background','#fff');
		$('.content > fieldset .circle:nth-of-type(5) p a').css('color','#000');
	});

	$(function(){
		$('.movie > h4 a').hover(function(){
			$('.movie > h4 a').css('background','#000');
		},function(){
			$('.movie > h4 a').css('background','#282424');
		});
	});


});