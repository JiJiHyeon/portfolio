$(function(){
	var myImage = document.getElementById("mainImage");
	var imageArray = ["images/main1.jpg","images/main2.jpg","images/main3.jpg"];
	var imageIndex=0;


		function changeImage(){
			myImage.setAttribute("src",imageArray[imageIndex]);
			imageIndex++;
			if(imageIndex>=imageArray.length){
				imageIndex=0;
			}
		}
		setInterval(changeImage,2000);
});

$(function(){
	$('.close a').on('click',function(){
		$('#pop a img').hide();
		$('.close a').hide();
	});
	$('#header h1').on('click',function(){
		$('#pop a img').show();
		$('.close a').show();
	});
});

$(function(){
	$(".menu").mouseenter(function(){
		$(this).children(".sub").slideDown(500);
	});

	$(".menu").mouseleave(function(){
		$(this).children(".sub").slideUp(500);
	});

});
