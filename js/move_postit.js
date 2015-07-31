

$(document).ready(function(){

	var checkerR = true;
	var checkerL = true;
	
	/*
	$(".form-this").hover(function () {
	    targetright = checkerR ? "65%" : "50%";
	    $(".post-it1").animate({right: targetright},400);   
	    checkerR ? checkerR = false : checkerR = true;
	    
	    targetleft = checkerL ? "61%" : "50%";
	    $(".post-it2").animate({left: targetleft},400);   
	    checkerL ? checkerL = false : checkerL = true;
	});
	*/


	$(".form-this").hover(
		function(){
        	$('.post-it1').stop().animate({right: '65%'}, 1000);
        	$('.post-it2').stop().animate({ left: '61%' }, 1000);
        	$('.animate-text').stop().animate({ right: '70%' }, 1000);
    	}, 
    	function(){
        	$('.post-it1').stop().animate({right: '50%'}, 1000);
        	$('.post-it2').stop().animate({ left: '50%' }, 1000);
        	$('.animate-text').stop().animate({ right: '55%' }, 1000);
    	}
    );
	
	/*$(".tot-form-pin").hover(function(){
    	$(".post-it1").animate({right: '65%'});
    	$(".post-it2").animate({left: '65%'});
	});*/

});