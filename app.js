var compteur = 0;
var joueurEnCours="";




$("td").click(function() {
	
var cases = $(this).attr('style');
	
	if (cases === undefined) {

		compteur++;		
		joueurEnCours =   (compteur%2===0) ?  'p2' :  'p1';
		
		if (joueurEnCours === "p1") { 
			$(this).css("background","white url(croix.png) no-repeat center");     
		
		}else{	
			$(this).css("background","white url(rond.png) no-repeat center");
	
		}       
		
	}

});


	
	
	//console.log(joueurEnCours);




