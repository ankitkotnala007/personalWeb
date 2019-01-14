var btn_one = document.getElementById('btn_one');
var btn_two = document.getElementById('btn_two');
var btn_three = document.getElementById('btn_three');
var btn_four = document.getElementById('btn_four');
var btn_five = document.getElementById('btn_five');
var btn_six = document.getElementById('btn_six');
var btn_seven = document.getElementById('btn_seven');
var btn_eight = document.getElementById('btn_eight');
var btn_nine = document.getElementById('btn_nine');

//var one_count =0 , two_count=0 ;

var arr = [1,2,3,4,5,6,7,8,9];

var marker = "X";
var player_one="";
var player_two="";

var player_one_count=0;
var player_two_count=0;

var mode = localStorage.getItem("mode");
var prev_move = "O";

var p1_name = localStorage.getItem("p1_name");
var p2_name = localStorage.getItem("p2_name");

console.log(p1_name+" " + p2_name + "mode : "+mode);
document.getElementById("p1_name").innerHTML=p1_name;
document.getElementById("p2_name").innerHTML=p2_name;




	

// ----------  mode selected ---------------------------
function ModeSelected(){
	player_one = "X";
	player_two = "O";
	
	if(mode.value == "custum"){
		player_one = "X";
		player_two = "O";
		window.location.href = "TicTacToe.htm";
	}else{
		
	}
	

}



// Button clicks  ------------------------------------
function onClickBtnOne(){
	
	if(mode == "custom"){
		 btn_one.value = marker;
		 btn_one.innerHTML = marker;
		 btn_one.disabled = true;
		btn_one.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
	
		change_marker();
		
		setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_one.value = marker;
			 btn_one.innerHTML = marker;
			 btn_one.disabled = true;
			btn_one.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(1);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){		
					ComputerTurn();
					console.log(arr);
				}
			}
		}
			
	}
}
function onClickBtnTwo(){

     if(mode == "custom"){
	 btn_two.value = marker;
	btn_two.innerHTML = marker;
	btn_two.disabled = true;
	btn_two.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
	document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
       
	setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_two.value = marker;
			 btn_two.innerHTML = marker;
			 btn_two.disabled = true;
			btn_two.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(2);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){			
				
					ComputerTurn();
					console.log(arr);
				}
			}
		}
	}
}
function onClickBtnThree(){
     if(mode == "custom"){
	 btn_three.value = marker;
	btn_three.innerHTML = marker;
	btn_three.disabled = true;
	btn_three.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
		document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
      
	setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_three.value = marker;
			 btn_three.innerHTML = marker;
			 btn_three.disabled = true;
			btn_three.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(3);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){
				
					ComputerTurn();
					console.log(arr);
				}
			}
		}	
	}	
}
function onClickBtnFour(){

	if(mode == "custom"){
	 btn_four.value = marker;
	btn_four.innerHTML = marker;
	btn_four.disabled = true;
	btn_four.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
	document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
     
	setTimeout(()=>{
			check_finish();
		},1)
 	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_four.value = marker;
			 btn_four.innerHTML = marker;
			 btn_four.disabled = true;
			btn_four.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(4);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){
				
					ComputerTurn();
					console.log(arr);
				}
			}
		}
	}
}
function onClickBtnFive(){
	if(mode == "custom"){
	 btn_five.value = marker;
	btn_five.innerHTML = marker;
	btn_five.disabled = true;
	btn_five.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
	document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
      
	setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_five.value = marker;
			 btn_five.innerHTML = marker;
			 btn_five.disabled = true;
			btn_five.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(5);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){
				
					ComputerTurn();
					console.log(arr);
				}
			}
		}
	}
}
function onClickBtnSix(){
	if(mode == "custom"){
	 btn_six.value = marker;
	btn_six.innerHTML = marker;	
	btn_six.disabled = true;
	btn_six.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
	document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
      
	setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_six.value = marker;
			 btn_six.innerHTML = marker;
			 btn_six.disabled = true;
			btn_six.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
				remove_number(6);
			console.log(arr);
			if(!check_finish()){
			
				if(arr.length > 0){
				
					ComputerTurn();
				console.log(arr);
				}
			}
		}
	}
}
function onClickBtnSeven(){
	if(mode == "custom"){	
	 btn_seven.value = marker;
	btn_seven.innerHTML = marker;	
 	btn_seven.disabled = true;
	btn_seven.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
	document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
       
	setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_seven.value = marker;
			 btn_seven.innerHTML = marker;
			 btn_seven.disabled = true;
			btn_seven.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(7);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){
				
					ComputerTurn();
					console.log(arr);
				}
			}
		}
	}
}
function onClickBtnEight(){
	if(mode == "custom"){
	 btn_eight.value = marker;
	btn_eight.innerHTML = marker;	
	btn_eight.disabled = true;
	btn_eight.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
	document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
       
	setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_eight.value = marker;
			 btn_eight.innerHTML = marker;
			 btn_eight.disabled = true;
			btn_eight.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(8);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){				
				
					ComputerTurn();
					console.log(arr);
				}
			}
		}
	}
}

function onClickBtnNine(){
	if(mode == "custom"){
	 btn_nine.value = marker;
	btn_nine.innerHTML = marker;	
	btn_nine.disabled = true;
	btn_nine.style.backgroundColor = "powderblue";
	if(marker == "X"){
		player_one_count++;
	}else{
		player_two_count++;	
	}
	document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;

	change_marker();
      
	setTimeout(()=>{
			check_finish();
		},1)
	}else{
		if(prev_move == "X"){
			
		}else{
			 btn_nine.value = marker;
			 btn_nine.innerHTML = marker;
			 btn_nine.disabled = true;
			btn_nine.style.backgroundColor = "powderblue";
			if(marker == "X"){
				player_one_count++;
			}else{
				player_two_count++;	
			}
			document.getElementById("p1_count").innerHTML=player_one_count;
			document.getElementById("p2_count").innerHTML=player_two_count;
	
			change_marker();
			remove_number(8);
			console.log(arr);
			if(!check_finish()){
				
				if(arr.length > 0){
				
					ComputerTurn();
					console.log(arr);
				}
			}
		}
	}
}

function stop_playing(){
btn_one.disabled = true;
btn_two.disabled = true;
btn_three.disabled = true;
btn_four.disabled = true;
btn_five.disabled = true;
btn_six.disabled= true;
btn_seven.disabled = true;
btn_eight.disabled = true;
btn_nine.disabled = true;



}


function check_finish(){

// checking for X --------------------------------------------------------------	
var staus = false;
 if(btn_one.value == "X" && btn_two.value == "X" && btn_three.value == "X"){
	btn_one.style.backgroundColor = "Green";
	btn_two.style.backgroundColor = "Green";
	btn_three.style.backgroundColor = "Green";
	btn_four.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	status = true;
	
	stop_playing();
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
	
	
  }
if(btn_four.value == "X" && btn_five.value == "X" && btn_six.value == "X"){
	btn_four.style.backgroundColor = "Green";
	btn_five.style.backgroundColor = "Green";
	btn_six.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
  }
if(btn_seven.value == "X" && btn_eight.value == "X" && btn_nine.value == "X"){
	btn_seven.style.backgroundColor = "Green";
	btn_eight.style.backgroundColor = "Green";
	btn_nine.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
  }

if(btn_one.value == "X" && btn_four.value == "X" && btn_seven.value == "X"){
	btn_one.style.backgroundColor = "Green";
	btn_four.style.backgroundColor = "Green";
	btn_seven.style.backgroundColor = "Green";
	btn_two.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
  }
if(btn_two.value == "X" && btn_five.value == "X" && btn_eight.value == "X"){
	btn_two.style.backgroundColor = "Green";
	btn_five.style.backgroundColor = "Green";
	btn_eight.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
  }
if(btn_three.value == "X" && btn_six.value == "X" && btn_nine.value == "X"){
	btn_three.style.backgroundColor = "Green";
	btn_six.style.backgroundColor = "Green";
	btn_nine.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
  }

if(btn_one.value == "X" && btn_five.value == "X" && btn_nine.value == "X"){
	btn_one.style.backgroundColor = "Green";
	btn_five.style.backgroundColor = "Green";
	btn_nine.style.backgroundColor = "Green";
	btn_two.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
	
}

if(btn_three.value == "X" && btn_five.value == "X" && btn_seven.value == "X"){
	btn_three.style.backgroundColor = "Green";
	btn_five.style.backgroundColor = "Green";
	btn_seven.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 1  Wins ..!";
  }



// checking for O --------------------------------------------------------------	
 if(btn_one.value == "O" && btn_two.value == "O" && btn_three.value == "O"){
	btn_one.style.backgroundColor = "Green";
	btn_two.style.backgroundColor = "Green";
	btn_three.style.backgroundColor = "Green";
	btn_four.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";
  }
if(btn_four.value == "O" && btn_five.value == "O" && btn_six.value == "O"){
	btn_four.style.backgroundColor = "Green";
	btn_five.style.backgroundColor = "Green";
	btn_six.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_three       .style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";
  }
if(btn_seven.value == "O" && btn_eight.value == "O" && btn_nine.value == "O"){
	btn_seven.style.backgroundColor = "Green";
	btn_eight.style.backgroundColor = "Green";
	btn_nine.style.backgroundColor = "Green";
	btn_four.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";
}

if(btn_one.value == "O" && btn_four.value == "O" && btn_seven.value == "O"){
	btn_one.style.backgroundColor = "Green";
	btn_four.style.backgroundColor = "Green";
	btn_seven.style.backgroundColor = "Green";
	btn_two.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";		
  }
if(btn_two.value == "O" && btn_five.value == "O" && btn_eight.value == "O"){
	btn_two.style.backgroundColor= "Green";
	btn_five.style.backgroundColor = "Green";
	btn_eight.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";
  }
if(btn_three.value == "O" && btn_six.value == "O" && btn_nine.value == "O"){
	btn_three.style.backgroundColor = "Green";
	btn_six.style.backgroundColor = "Green";
	btn_nine.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_five.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";
  }

if(btn_one.value == "O" && btn_five.value == "O" && btn_nine.value == "O"){
	btn_one.style.backgroundColor = "Green";
	btn_five.style.backgroundColor = "Green";
	btn_nine.style.backgroundColor = "Green";
	btn_two.style.backgroundColor = "Grey";
	btn_three.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_seven.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";
  }

if(btn_three.value == "O" && btn_five.value == "O" && btn_seven.value == "O"){
	btn_three.style.backgroundColor = "Green";
	btn_five.style.backgroundColor = "Green";
	btn_seven.style.backgroundColor = "Green";
	btn_one.style.backgroundColor = "Grey";
	btn_two.style.backgroundColor = "Grey";
	btn_four.style.backgroundColor = "Grey";
	btn_six.style.backgroundColor = "Grey";
	btn_eight.style.backgroundColor = "Grey";
	btn_nine.style.backgroundColor = "Grey";
	stop_playing();	
	status = true;
	document.getElementById("winner_text").innerHTML = "Congratulations ... Player 2  Wins ..!";
  }

return status;

}


function change_marker(){
	if(marker == "X")
	{	marker = "O";
		prev_move = "X";
	}	
	else{ 
		marker = "X";
		prev_move = "O";		
	}
}

function reset(){

btn_one.disabled = false;
btn_two.disabled = false;
btn_three.disabled = false;
btn_four.disabled = false;
btn_five.disabled = false;
btn_six.disabled = false;
btn_seven.disabled = false;
btn_eight.disabled = false;
btn_nine.disabled = false;

btn_one.style.backgroundColor = "";
btn_two.style.backgroundColor = "";
btn_three.style.backgroundColor = "";
btn_four.style.backgroundColor = "";
btn_five.style.backgroundColor = "";
btn_six.style.backgroundColor = "";
btn_seven.style.backgroundColor = "";
btn_eight.style.backgroundColor = "";
btn_nine.style.backgroundColor = "";

btn_one.value = "";
btn_two.value = "";
btn_three.value = "";
btn_four.value = "";
btn_five.value= "";
btn_six.value = "";
btn_seven.value = "";
btn_eight.value = "";
btn_nine.value= "";

btn_one.innerHTML = "";
btn_two.innerHTML = "";
btn_three.innerHTML = "";
btn_four.innerHTML = "";
btn_five.innerHTML= "";
btn_six.innerHTML = "";
btn_seven.innerHTML = "";
btn_eight.innerHTML = "";
btn_nine.innerHTML= "";

marker = "X";
prev_move = "O";

player_one = "" ;
player_two = "" ;

player_one_count=0;
player_two_count=0;
document.getElementById("p1_count").innerHTML=player_one_count;
	document.getElementById("p2_count").innerHTML=player_two_count;
 arr = [1,2,3,4,5,6,7,8,9];
document.getElementById("winner_text").innerHTML ="";
window.location.reload();

}

function out(){
	window.location.href = "index.htm";
	localStorage.removeItem("p1_name");
	localStorage.removeItem("p2_name");
}

// Computer's Chance -----------------------

function ComputerTurn(){
   var num = random_item(arr);
   switch(num){
	case 1:  btn_one.value = marker;
		 btn_one.innerHTML = marker;
		 btn_one.disabled = true;
		btn_one.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
		
		break;
	case 2:  btn_two.value = marker;
		 btn_two.innerHTML = marker;
		 btn_two.disabled = true;
		btn_two.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
		break;
	case 3:  btn_three.value = marker;
		 btn_three.innerHTML = marker;
		 btn_three.disabled = true;
		btn_three.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
	
		setTimeout(()=>{
			check_finish();
				remove_number(num);
		},1)			
		break;
	case 4:  btn_four.value = marker;
		 btn_four.innerHTML = marker;
		 btn_four.disabled = true;
		btn_one.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
  		break;
	case 5:  btn_five.value = marker;
		 btn_five.innerHTML = marker;
		 btn_five.disabled = true;
		btn_five.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
		break;
	case 6:  btn_six.value = marker;
		 btn_six.innerHTML = marker;
		 btn_six.disabled = true;
		btn_one.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
 		break;
	case 7:  btn_seven.value = marker;
		 btn_seven.innerHTML = marker;
		 btn_seven.disabled = true;
		btn_seven.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
		break;
	case 8:  btn_eight.value = marker;
		 btn_eight.innerHTML = marker;
		 btn_eight.disabled = true;
		btn_eight.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
		break;
	case 9:  btn_nine.value = marker;
		 btn_nine.innerHTML = marker;
		 btn_nine.disabled = true;
		btn_nine.style.backgroundColor = "powderblue";
		if(marker == "X"){
			player_one_count++;
		}else{
			player_two_count++;	
		}
		document.getElementById("p1_count").innerHTML=player_one_count;
		document.getElementById("p2_count").innerHTML=player_two_count;
		
		change_marker();
		
		setTimeout(()=>{
			check_finish();
			remove_number(num);
		},1)
		break;

	}
}

// Getting the random number from the array  -------
function random_item(arr)
{
   return arr[Math.floor(Math.random()*arr.length)];    
}

//Deleting the particuler number from the array -------
function remove_number(x){
	
	    var index = arr.indexOf(x);
	 
	    if (index > -1) {
	       arr.splice(index, 1);
	    }
}

