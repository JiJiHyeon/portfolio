$('.wrap > li:nth-of-type(1)').click(function() {
	$('.rap > li:nth-of-type(1)').css('display','block');
});
$('.rap > li:nth-of-type(1) span i').click(function(){
	$('.rap > li:nth-of-type(1)').css('display','none');
});

$('.wrap > li:nth-of-type(2)').click(function() {
	$('.rap > li:nth-of-type(2)').css('display','block');
});
$('.rap > li:nth-of-type(2) span i').click(function(){
	$('.rap > li:nth-of-type(2)').css('display','none');
});

$('.wrap > li:nth-of-type(3)').click(function() {
	$('.rap > li:nth-of-type(3)').css('display','block');
});
$('.rap > li:nth-of-type(3) span i').click(function(){
	$('.rap > li:nth-of-type(3)').css('display','none');
});

$('.wrap > li:nth-of-type(4)').click(function() {
	$('.rap > li:nth-of-type(4)').css('display','block');
});
$('.rap > li:nth-of-type(4) span i').click(function(){
	$('.rap > li:nth-of-type(4)').css('display','none');
});


$('.btn1 > i:nth-of-type(1)').click(function(){
	$('.imgG1 > img:last').prependTo(".imgG1");
});
$('.btn1 > i:nth-of-type(2)').click(function(){
	$('.imgG1 > img:first').appendTo(".imgG1");
});

$('.btn2 > i:nth-of-type(1)').click(function(){
	$('.imgG2 > img:last').prependTo(".imgG2");
});

$('.btn2 > i:nth-of-type(2)').click(function(){
	$('.imgG2 > img:first').appendTo(".imgG2");
});		

$('.btn3 > i:nth-of-type(1)').click(function(){
	$('.imgG3 > img:last').prependTo(".imgG3");
});

$('.btn3 > i:nth-of-type(2)').click(function(){
	$('.imgG3 > img:first').appendTo(".imgG3");
});		

$('.btn4 > i:nth-of-type(1)').click(function(){
	$('.imgG4 > img:last').prependTo(".imgG4");
});

$('.btn4 > i:nth-of-type(2)').click(function(){
	$('.imgG4 > img:first').appendTo(".imgG4");
});

$('footer > h5 a').hover(function(){
	$('footer > h5 a').css('color','#d42733');
	$('footer > a i').css('color','#d42733');
},function(){
	$('footer > h5 a').css('color','#fff');
	$('footer > a i').css('color','#fff');
});

var ht = $(window).height();
$("aside").height(ht);

$(window).resize(function(){
		$("aside").height(ht);
	});