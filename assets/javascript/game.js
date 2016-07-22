
	var Wins = 0
	var Losses = 0


$(document).ready(function(){
	function Gamestart(){
		 diamond1 = 1 + Math.floor(Math.random()*12)
		 diamond2 = 1 + Math.floor(Math.random()*12)
		 diamond3 = 1 + Math.floor(Math.random()*12)
		 diamond4 = 1 + Math.floor(Math.random()*12)
		 RandTargNum = Math.floor((Math.random() * 112) + 19)
		 UserAdd = 0

		$('#diamond1').attr("value", diamond1);
		$('#diamond2').attr("value", diamond2);
		$('#diamond3').attr("value", diamond3);
		$('#diamond4').attr("value", diamond4);
		$('#TheRandomNumber').html(RandTargNum);
		$('#UserNumber').html(UserAdd);
	console.log(diamond1, diamond2, diamond3, diamond4, RandTargNum)


	}

	Gamestart()
	
	$('.diamond').click(function(){
			UserAdd = Number(UserAdd)+Number($(this).val())
			console.log(UserAdd)
			$('#UserNumber').html(UserAdd)
		if (UserAdd < RandTargNum){
			
	}
		else if (UserAdd == RandTargNum){
			alert('YOU WIN!')
			Wins++
			$('#Wins').html('Wins:' + Wins)
			$('#Losses').html('Losses:' + Losses)
			Gamestart()	
		
	}
		else {
			alert('You lose...')
			Losses++
			$('#Wins').html('Wins:' + Wins)
			$('#Losses').html('Losses:' + Losses)
			Gamestart()
		}

	})

	$('#valuerefresh').click(function(){

	Gamestart()
		
	});



});