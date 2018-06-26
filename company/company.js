$(function(){
		$("#slideImg").vegas({
	    	slides: [
	    	    { src: "images/main.jpg" },
	    	    { src: "images/main2.jpg" },
	    	    { src: "images/main3.jpg" },
	    	],
	    	timer: false,//하단 타이머 미노출
	    	delay: 4000,//노출 시간
	    	transition: 'slideRight2'
		});
		$('.subImg > a img').hover(function(){
			$('.subImg > a img').css('opacity','1');
			$('.subImg > a img').css('transform','scale(1.2)');
		},function(){
			$('.subImg > a img').css('opacity','.6');
			$('.subImg > a img').css('transform','scale(1)');
		});

		$('.box > .box1').hover(function(){
			$('.box > .box1').css('backgroundColor','#D0D0D0');
			$('.box > .box1 h3').css('fontSize','20px');
			$('.box > .box1 p').css('fontSize','14px');
		},function(){
			$('.box > .box1').css('backgroundColor','#fff');
			$('.box > .box1 h3').css('fontSize','13px');
			$('.box > .box1 p').css('fontSize','13px');
		});

		$('.box > .box2').hover(function(){
			$('.box > .box2').css('backgroundColor','#000');
			$('.box > .box2 h3').css('fontSize','20px');
			$('.box > .box2 p').css('fontSize','14px');
		},function(){
			$('.box > .box2').css('backgroundColor','#9C9C9F');
			$('.box > .box2 h3').css('fontSize','13px');
			$('.box > .box2 p').css('fontSize','13px');
		});

		$('.box > .box3').hover(function(){
			$('.box > .box3').css('backgroundColor','#BFBFBF');
			$('.box > .box3 h3').css('fontSize','20px');
			$('.box > .box3 p').css('fontSize','14px');
		},function(){
			$('.box > .box3').css('backgroundColor','#000');
			$('.box > .box3 h3').css('fontSize','13px');
			$('.box > .box3 p').css('fontSize','13px');
		});

		$('.box > .box4').hover(function(){
			$('.box > .box4').css('backgroundColor','#D0D0D0');
			$('.box > .box4 h3').css('fontSize','20px');
			$('.box > .box4 p').css('fontSize','14px');
		},function(){
			$('.box > .box4').css('backgroundColor','#fff');
			$('.box > .box4 h3').css('fontSize','13px');
			$('.box > .box4 p').css('fontSize','13px');
		});

		$('.subImg2_1 > p img').hover(function(){
			$(this).css('opacity','1');
			$(this).css('transform','scale(1.2)');
		},function(){
			$(this).css('opacity','.6');
			$(this).css('transform','scale(1)');
		});

		$('.content > h4').hover(function(){
			$('.content > h4').css('backgroundColor','#2D2D2D');
			$('.content > h4 a').css('color','#fff');
		},function(){
			$('.content > h4').css('backgroundColor','#fff');
			$('.content > h4 a').css('color','#000');
		});

		$('footer > h5 a').hover(function(){
			$('footer > a i').css('color','#999');
			$('footer > h5 a').css('color','#999');
		},function(){
			$('footer > a i').css('color','#fff');
			$('footer > h5 a').css('color','#fff');
		});

		$(window).scroll(function(){
			if(400 < $(window).scrollTop()){
			$('header').css('background-color','#fff');
			$('header > ul li').css('color','#000');
		}else{
			$('header').stop(true).css('background-color','#000');
			$('header > ul li').css('color','#fff');
		}
	});
});
