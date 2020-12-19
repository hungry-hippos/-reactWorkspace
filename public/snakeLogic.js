var mainGrid=document.getElementById('mainGrid');
for (var i=0;i<525;i++){
	var square=document.createElement('div');
	square.classList.add('snakeSquare');
	square.setAttribute('key', i);
	mainGrid.appendChild(square);
};

var squares=document.getElementsByClassName('snakeSquare');
var bodyLocation=[];
var headLocation=createSnakeHead();
var ratLocation=ratCreation();

function createSnakeHead(){
	var spawnSq=Math.floor(Math.random()*524);
	squares[spawnSq].setAttribute('id','snakeHead');
	return spawnSq;
}

function ratCreation(){
  //random num that is not the snakehead
  while (true){
    var ratSpawnLocation=Math.floor(Math.random()*524);
    if (ratSpawnLocation===headLocation){
      continue;
    }

    var repeat=false;
    for (var i=0;i<bodyLocation.length;i++){
      if (ratSpawnLocation===bodyLocation[i]){
        repeat=true;
        break;
      }
    }
    if (!repeat){
      squares[ratSpawnLocation].setAttribute('id','rat');
      return ratSpawnLocation;
    }

  }	
}



function headMovement(){
	if (movementDirection=='left'){
		snakeSuicide(headLocation-1);
		if (headLocation%35==0)
			snakeDead();
		else if (headLocation-1==ratLocation)
			snakeEats(headLocation-1);
		else
			snakeMoves(headLocation-1);
	}
	else if (movementDirection=='up'){
		snakeSuicide(headLocation-35);
		if (0<=headLocation && headLocation<=34)
			snakeDead();
		else if (headLocation-35==ratLocation)
			snakeEats(headLocation-35);
		else
			snakeMoves(headLocation-35);
	}
	else if (movementDirection=='right'){
		snakeSuicide(headLocation+1);
		if ((headLocation+1)%35==0)
			snakeDead();
		else if (headLocation+1==ratLocation)
			snakeEats(headLocation+1);
		else
			snakeMoves(headLocation+1);
	}
	else if (movementDirection=='down'){
		snakeSuicide(headLocation+35);
		if (490<=headLocation && headLocation<=524)
			snakeDead();
		else if (headLocation+35==ratLocation)
			snakeEats(headLocation+35);
		else
			snakeMoves(headLocation+35);
	}
}

function snakeSuicide(nextHead){
	bodyLocation.forEach(function(bodyPart){
		if (nextHead==bodyPart)
			snakeDead();
	})
}
function snakeDead(){
	clearInterval(currentIntervalCode);
	for (var i=0;i<bodyLocation.length;i++){
		squares[bodyLocation[i]].classList.remove('snakeBody');
	}
	squares[headLocation].removeAttribute('id');
	squares[ratLocation].removeAttribute('id');

	headLocation=createSnakeHead();
	bodyLocation=[];
	ratLocation=ratCreation();
	
	if (document.getElementById('gameConfirmText').textContent!='Submit when ready.'){
		document.getElementById('appleCounter').textContent="10";
	}

	time=150;
	
}
function snakeEats(nextHead){
	squares[headLocation].removeAttribute('id');
	squares[headLocation].classList.add('snakeBody');
	bodyLocation.push(headLocation);
	squares[nextHead].setAttribute('id','snakeHead');
	headLocation=nextHead;
	ratLocation=ratCreation();
	
	if (document.getElementById('gameConfirmText').textContent!='Submit when ready.'){
		const counter=document.getElementById('appleCounter');
		var num=parseInt(counter.textContent,10);
		num--;
		if (num===0){
			document.getElementById('gameConfirmText').textContent='Submit when ready.'
			document.getElementById('gameConfirmBtn').disabled=false;
			return;
		}
		counter.textContent=num;
	}
	if (time>=80){
		time=time-5;
	}
}
function snakeMoves(nextHead){
	squares[headLocation].removeAttribute('id');
	squares[headLocation].classList.add('snakeBody');
	bodyLocation.push(headLocation);
	squares[bodyLocation[0]].classList.remove('snakeBody');
	bodyLocation.shift();
	squares[nextHead].setAttribute('id','snakeHead');
	headLocation=nextHead;
}

document.addEventListener('keydown',changeDirection);
var currentIntervalCode=0;
var movementDirection="";
var time=150;
function changeDirection(event){
	
	clearInterval(currentIntervalCode);
	if (event.keyCode==37 && movementDirection!='right'){
		//move left
		movementDirection='left';
		document.getElementById('initialInstructions').style.display='none';
	}
	if (event.keyCode==38 && movementDirection!='down'){
		//move up
		movementDirection='up';
		document.getElementById('initialInstructions').style.display='none';
	}
	if (event.keyCode==39 && movementDirection!='left'){
		//move right
		movementDirection='right';
		document.getElementById('initialInstructions').style.display='none';
	}
	if (event.keyCode==40 && movementDirection!='up'){
		//move down
		movementDirection='down';
		document.getElementById('initialInstructions').style.display='none';
	}
	currentIntervalCode=setInterval(headMovement,time);
}


