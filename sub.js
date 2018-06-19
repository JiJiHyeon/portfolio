$('.one h1 a:first').mouseenter(function(){
	$('.two').css('display','block');
	$('article,hr').css('display','block');
});
$('.one h1 a:first').mouseleave(function(){
	$('.two').css('display','block');
	$('article,hr').css('display','block');
});

$('.one > h2 a:nth-of-type(1)').hover(function(){
	$(this).css('background','red');
	$('.one > p:nth-of-type(1)').css('display','block');
	$('.two').css('display','none');
	$('article,hr').css('display','none');
},function(){
	$(this).css('background','none');
	$('.one > p:nth-of-type(1)').css('display','none');
	$('.two').css('display','none');
	$('article,hr').css('display','none');
});

$('.one > h2 a:nth-of-type(2)').hover(function(){
	$(this).css('background','red');
	$('.one > p:nth-of-type(2)').css('display','block');
	$('.two').css('display','none');
	$('article,hr').css('display','none');
},function(){
	$(this).css('background','none');
	$('.one > p:nth-of-type(2)').css('display','none');
	$('.two').css('display','none');
	$('article,hr').css('display','none');
});

$('.one > h2 a:nth-of-type(3)').hover(function(){
	$(this).css('background','red');
	$('footer img').css('display','block');
	$('footer p:nth-of-type(2)').css('display','block');
	$('.two').css('display','none');
	$('article,hr').css('display','none');
},function(){
	$(this).css('background','none');
	$('footer img').css('display','none');
	$('footer p:nth-of-type(2)').css('display','none');
	$('.two').css('display','none');
	$('article,hr').css('display','none');
});

$('footer h5 a').hover(function(){
	$(this).css('color','#fff');
	$('footer i').css('color','#fff');
},function(){
	$(this).css('color','red');
	$('footer i').css('color','red');
});

