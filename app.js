var compteur = 0;
var joueurEnCours = "";
var tableau = [[1, 2, 3], 
				[4, 5, 6],
			 	[7, 8, 9]];

var joueur1 = 1;
var joueur2 = 2;


$("td").click(function() {
	
	var cases = $(this).attr('style');
		
		if (cases === undefined) {

			compteur++;		
			joueurEnCours =   (compteur % 2 === 0) ? 'p2' : 'p1';

			var numCol = $(this).index();
			var numLigne = $(this).parent().index();
				//console.log(numLigne +'/'+ numCol);

			if (joueurEnCours === "p1") { 
				$(this).css("background","white url(croix.png) no-repeat center");
				//$(this).prepend('<img src="croix.png" />')
				tableau[numCol][numLigne] = "p1" ;
				//console.log(tableau);
			
			}else{	
				$(this).css("background","white url(rond.png) no-repeat center");
				//$(this).prepend('<img src="rond.png" />')
				tableau[numCol][numLigne] = "p2" ;
			}       
			
		}
		
		if (tableau[0][0]===tableau[1][0] && tableau[1][0]===tableau[2][0] ){
			alert("vous avez gagné");
		}

		if (tableau[0][1]===tableau[1][1] && tableau[1][1]===tableau[2][1] ){
			alert("vous avez gagné");
		}

		if (tableau[0][2]===tableau[1][2] && tableau[1][2]===tableau[2][2] ){
			alert("vous avez gagné");
		}

		if (tableau[0][0]===tableau[0][1] && tableau[0][1]===tableau[0][2] ){
			alert("vous avez gagné");
		}

		if (tableau[1][0]===tableau[1][1] && tableau[1][1]===tableau[1][2] ){
			alert("vous avez gagné");
		}

		if (tableau[2][0]===tableau[2][1] && tableau[2][1]===tableau[2][2] ){
			alert("vous avez gagné");
		}

		if (tableau[0][0]===tableau[1][1] && tableau[1][1]===tableau[2][2] ){
			alert("vous avez gagné");
		}

		if (tableau[2][0]===tableau[1][1] && tableau[1][1]===tableau[0][2] ){
			alert("vous avez gagné");
		}
});




