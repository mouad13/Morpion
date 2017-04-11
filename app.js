var tableau = 0

$('td').click(function(){
		tableau++;		
		tableau % 2 === 0 ? a = 'p2' : a = 'p1';
	});



$("td").click(function() {
	if (a == "p1") { 
		$(this).css("background","white url(rond.png) no-repeat center");
	}else{	
		$(this).css("background","white url(croix.png) no-repeat center");     
	}       
});



