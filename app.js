var compteur = 0;
var joueurEnCours = "";
var tableau = [[0, 0, 0], 
				[0, 0, 0],
			 	[0, 0, 0]];

var joueur1 = 1;
var joueur2 = 2;


$("td").click(function() {
	
	var cases = $(this).attr('style');
		
		if (cases === undefined) {

			compteur++;		
			joueurEnCours =   (compteur % 2 === 0) ? 'p2' : 'p1';

			var numCol = $(this).index();
			var numLigne = $(this).parent().index();
			//	console.log(numLigne +'/'+ numCol);

			if (joueurEnCours === "p1") { 
				$(this).css("background","white url(croix.png) no-repeat center");
							
			}else{	
				$(this).css("background","white url(rond.png) no-repeat center");
			}       
			
		}

	//console.log(tableau);
});



