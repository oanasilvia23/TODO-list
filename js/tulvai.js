

$(document).ready(function(){

	$("#flipbook").fadeOut("fast");
	/*
	var divpos= $('.drag-pen').position();
	var divposleft = divpos.left; //left of div
	var divpostop = divpos.top;  //top of div
	var divposright = divpos.right;
	*/
	$( "#draggable" ).draggable();
	$( "#droppable" ).droppable({
      drop: function( event, ui ) {
      	$("#flipbook").fadeIn("slow");
      	//document.getElementById("draggable").css('z-index', 0);
        //document.getElementById("flipbook").style.visibility = "visible";
      }
    });
    /*8
    $(".hard").hover(function()
    {
    	$("#draggable").css('z-index', 2);
    });
    
    $(".pg").hover(function()
    {
    	$("#draggable").css('z-index', 2);
    });
    
    $("#coperta22").hover(function()
   	{
   		$("#coperta22").css('z-index', 1);
   		$("#draggable").css('z-index', 4);
   		
   	}
    );
    
    
   
   	$(".hard")
   		.mouseover(function(){
   			$(this).css('z-index', 4);
   			$("#draggable").css('z-index', 3);
   		})
   		.mouseout(function(){
   			$(this).css('z-index', 3);
   			$("#draggable").css('z-index', 4);
   		});
   		
   	$(".pg")
   		.mouseover(function(){
   			$(this).css('z-index', 4);
   			$("#draggable").css('z-index', 3);
   		})
   		.mouseout(function(){
   			$(this).css('z-index', 3);
   			$("#draggable").css('z-index', 4);
   		});
   	*/	
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
      	$("#flipbook").fadeOut("slow");
      	
        //document.getElementById("flipbook").style.visibility = "hidden";
      }
    });
    
    $('.make-scroll').height($('.pg').height());
	
	
	$('#coperta1').on('click', function () {
		$('#flipbook').stop().animate({'left': '500px'});
		
    },
    
    function () {
		$('#flipbook').stop().animate({'left': '600px'});
		
    });

	
	/*
	$('#coperta11').hide();
	$('#coperta12').hide();
	$('#coperta21').hide();
	$('#coperta22').hide();
	$(".pg").hide();
	
	
	
	$( "#draggable" ).on("drag", function( event, ui ) {
	        
	        $('#coperta11').show();
			$('#coperta12').show();
	        $(".pg").show();
	        $('#coperta21').show();
			$('#coperta22').show();
	        
	    }
	);
	*/
	
	
	//$('.drag-pen').each(function() {
	//$( "#draggable" ).on("drag", function( event, ui ) {
		//if($(".drag-pen:has(img.draggable)").length > 0){
		/*
		var imgpos  = $('#draggable').position();
		var imgleft = imgpos.left;
		var imgtop = imgpos.top;
		var imgright = imgpos.right;
		
		if(imgtop>=divpostop && imgleft >= divposleft && imgright >=divposright)
		{
			document.getElementById("flipbook").style.visibility = "hidden";
			return;
		}
		else{
			document.getElementById("flipbook").style.visibility = "visible";
			return;
		}
		
		*/
			
			
		/*	
	    if ($('.div-drag').find('#draggable').length) {
	        document.getElementById("flipbook").style.visibility = "hidden";
	    }
	    else {
	    	document.getElementById("flipbook").style.visibility = "visible";
	    }
		
	    }
	);
	
	*/
	   
	
    
	
});